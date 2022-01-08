import { Weapp } from '@tarojs/plugin-platform-weapp'
import { components } from './components'

import type { IOptions } from '@tarojs/plugin-platform-weapp'

const PACKAGE_NAME = '@tarojs/plugin-platform-xhs'

export default class XHS extends Weapp {
  platform = 'xhs'
  globalObject = 'xhs'
  projectConfigJson = 'project.config.json'
  runtimePath = `${PACKAGE_NAME}/dist/runtime`
  fileType = {
    templ: '.xhsml',
    style: '.css',
    config: '.json',
    script: '.js',
    xs: '.wxs'
  }

  /**
   * 1. setupTransaction - init
   * 2. setup
   * 3. setupTransaction - close
   * 4. buildTransaction - init
   * 5. build
   * 6. buildTransaction - close
   */
  constructor (ctx, config, pluginOptions: IOptions) {
    super(ctx, config, pluginOptions)

    this.buildTransaction.addWrapper({
      init: this.beforeBuild
    })
  }

  beforeBuild () {
    // 处理 XHS 与微信的组件差异
    this.template.mergeComponents(this.ctx, components)
    this.template.Adapter = {
      if: 'xhs:if',
      else: 'xhs:else',
      elseif: 'xhs:elif',
      for: 'xhs:for',
      forItem: 'xhs:for-item',
      forIndex: 'xhs:for-index',
      key: 'xhs:key',
      xs: 'wxs',
      type: 'xhs'
    }
  }
}
