import XHS from './program'

import type { IPluginContext } from '@tarojs/service'
import type { IOptions } from '@tarojs/plugin-platform-weapp'

export { XHS }

export default (ctx: IPluginContext, options: IOptions) => {
  ctx.registerPlatform({
    name: 'xhs',
    useConfigName: 'mini',
    async fn ({ config }) {
      const program = new XHS(ctx, config, options)
      await program.start()
    }
  })
}
