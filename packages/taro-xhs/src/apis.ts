import { processApis } from '@tarojs/shared'
import {
  needPromiseApis
} from '@tarojs/plugin-platform-weapp/dist/runtime-utils'

declare const xhs: any

const asyncApis = new Set([])

export function initNativeApi (taro) {
  processApis(taro, xhs, {
    needPromiseApis: new Set([...needPromiseApis, ...asyncApis])
  })
}
