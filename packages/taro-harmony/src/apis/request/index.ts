import { isString, isFunction } from '@tarojs/shared'
import { IRequestOptions } from '../utils/types'

const http = require('@ohos.net.http')
const app = require('@system.app')
const appInfo = app.getInfo()
const appID = appInfo.appID

console.log('appID:', appID)

interface IHttpResponse {
  result: string | object
  responseCode: number
  header: object
}
interface IHttpResponseError {
  code: string
  data: any
}

const NOOP = () => {},
  METHODS = ['OPTIONS', 'GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'TRACE', 'CONNECT'],
  TIMEOUT = 60000

export function request(options: IRequestOptions) {

  let {
    url,
    method = 'GET',
    header = {
      'content-type': 'application/json'
    },
    data = '',
    dataType = 'json',
    fail = NOOP,
    success = NOOP,
    complete = NOOP
  } = options
  console.log('1 要发请求了', method, url)

  const res: any = {
    errMsg: ''
  }
  // 参数校验
  ;(!url || !isString(url)) && (res.errMsg = 'url不合法')
  !METHODS.includes(method) && (res.errMsg = `method不在${METHODS.toString()}中`)

  console.log('2 校验', res.errMsg)

  if (res.errMsg) {
    isFunction(fail) && fail(res)
    return
  }

  const httpRequest = http.createHttp()
  const destroyRequest = () => {
    httpRequest.destroy()
    isFunction(complete) && complete(res)
  }

  console.log('3 新建http')

  httpRequest.request(
    url,
    {
      method,
      header,
      extraData: data,
      readTimeout: TIMEOUT,
      connectTimeout: TIMEOUT
    },
    (err: IHttpResponseError, data: IHttpResponse) => {
      console.log('4 返回结果', data.responseCode)
      if (!err) {
        let result = data.result
        if (dataType === 'json' && isString(result)) {
          result = JSON.parse(result)
        }

        res.data = result
        res.statusCode = data.responseCode
        res.header = data.header
        isFunction(success) && success(res)
      } else {
        res.errMsg = 'error code:' + err.code + ', error:' + err.data
        isFunction(fail) && fail(res)
      }

      destroyRequest()
    }
  )
}
