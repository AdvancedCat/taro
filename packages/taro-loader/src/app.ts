import { normalizePath } from '@tarojs/helper'
import { getOptions, stringifyRequest } from 'loader-utils'

import { REG_POST } from './constants'

import type * as webpack from 'webpack'

// 在 MiniPlugin.ts 中使用该插件
// 需要注意的该文件才是 @tarojs/taro-loader 的 main 入口文件
export default function (this: webpack.LoaderContext<any>) {
  const stringify = (s: string): string => stringifyRequest(this, s)

  const options = getOptions(this) // HX: 获取当前插件配置的options
  const { importFrameworkStatement, frameworkArgs, creator, creatorLocation, modifyInstantiate } = options.loaderMeta
  const config = JSON.stringify(options.config)
  const blended = options.blended
  const pxTransformConfig = options.pxTransformConfig
  const loaders = this.loaders
  const thisLoaderIndex = loaders.findIndex(item => normalizePath(item.path).indexOf('@tarojs/taro-loader') >= 0)
  const { globalObject } = this._compilation?.outputOptions || { globalObject: 'wx' }

  const prerender = `
if (typeof PRERENDER !== 'undefined') {
  ${globalObject}._prerender = inst
}`

  const runtimePath = Array.isArray(options.runtimePath) ? options.runtimePath : [options.runtimePath]
  let setReconcilerPost = ''
  const setReconciler = runtimePath.reduce((res, item) => {
    if (REG_POST.test(item)) {
      setReconcilerPost += `import '${item.replace(REG_POST, '')}'\n`
      return res
    } else {
      return res + `import '${item}'\n`
    }
  }, '')

  const createApp = `${creator}(component, ${frameworkArgs})`

  let instantiateApp = blended
    ? `
var app = ${createApp}
app.onLaunch()
exports.taroApp = app
`
    : `var inst = App(${createApp})`

  if (typeof modifyInstantiate === 'function') {  // HX: 给 Harmony 用的，已经抽离出去了
    instantiateApp = modifyInstantiate(instantiateApp, 'app')
  }

  return `${setReconciler}
import { window } from '@tarojs/runtime'
import { ${creator} } from '${creatorLocation}'
import { initPxTransform } from '@tarojs/taro'
${setReconcilerPost}
import component from ${stringify(this.request.split('!').slice(thisLoaderIndex + 1).join('!'))}
${importFrameworkStatement}
var config = ${config};
window.__taroAppConfig = config
${instantiateApp}
${options.prerender ? prerender : ''}
initPxTransform({
  designWidth: ${pxTransformConfig.designWidth},
  deviceRatio: ${JSON.stringify(pxTransformConfig.deviceRatio)}
})
`
}
