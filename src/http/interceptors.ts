import qs from 'qs';
import { Notify } from 'vant';
import axios, { AxiosResponse, Canceler } from 'axios';
import { API_BASE } from '@/config';
import { BaseObject } from '@/types/index.d';
import { IRequestConfig, IResponse } from './index.d';
import { showFullScreenLoading, hideFullScreenLoading } from './help';

// 缓存请求对象, 用于取消重复请求
const cacheRequestPromise: { [key: string]: Canceler; } = {};
// 是否是空对象
const isEmptyObject = (obj: any) => JSON.stringify(obj) === '{}';


/**
 * 请求拦截器 - 显示 loading
 *
 * @export
 * @param {IRequestConfig} config
 * @returns
 */
export function handleRequestDefault(config: IRequestConfig) {
  const METHOD = config.method!.toLocaleUpperCase();
  if (config.loading) {
    if (['POST', 'PUT'].includes(METHOD)) {
      config.loadingMessage = '提交中...';
    }
    const message = config.loadingMessage;
    showFullScreenLoading(message);
  }

  return config;
}


/**
 * 请求拦截器 - 处理全局参数
 *
 * @export
 * @param {IRequestConfig} config
 * @returns
 */
export function handleRequestGlobalParams(config: IRequestConfig) {
  const METHOD = config.method!.toLocaleUpperCase();

  // TODO: 具体处理全局参数

  if (METHOD === 'GET') {
    // GET请求: 数组类型如arr=[1,2]，则转换成arr=1&arr=2
    config.paramsSerializer = (params) => qs.stringify(params, { arrayFormat: 'repeat' });
  }

  if (METHOD === 'GET' && !config.isCache) {
    config.params._ = Date.now();
  }

  return config;
}


/**
 * 请求拦截器 - 处理重复请求拦截器
 *
 * @export
 * @param {IRequestConfig} config
 * @returns
 */
export function handleRequestDuplicate(config: IRequestConfig) {
  // 发起请求时，取消掉当前正在进行的相同请求
  let cacheRequestKey = config.url!;
  // eslint-disable-next-line no-underscore-dangle
  const _data = Object.assign({}, config.data);
  // eslint-disable-next-line no-underscore-dangle
  const _params = Object.assign({}, config.params);
  delete _data._;
  delete _params._;

  if (config.isCancelDuplicateWithoutParams) {
    cacheRequestKey += config.method;
  } else {
    if (!isEmptyObject(_data)) {
      cacheRequestKey += `&${JSON.stringify(_data)}`;
    }

    if (!isEmptyObject(_params)) {
      cacheRequestKey += `&${JSON.stringify(_params)}`;
    }
  }
  config.cacheRequestKey = cacheRequestKey;

  // 取消重复请求
  if (cacheRequestPromise[cacheRequestKey]) {
    cacheRequestPromise[cacheRequestKey]('Cancel operation');
  }
  cacheRequestPromise[cacheRequestKey] = config.cancelFn!;

  return config;
}


/**
 * 请求拦截器 - 处理请求 URL 域名拼接
 *
 * @export
 * @param {IRequestConfig} config
 * @returns
 */
export function handleRequestConfigUrl(config: IRequestConfig) {
  // 处理完整 URL. 非 http, https 才处理
  const isExternal = /^(https?:)/.test(config.url!);
  if (!isExternal) {
    const hasServer = !!API_BASE[config.server!];
    if (!hasServer) {
      console.warn(`API_BASE not found 'server: ${config.server}' config, will reset server to 'base'`);
      config.server = 'base';
    }
    config.url = `${API_BASE[config.server!]}${config.url}`;
  }

  return config;
}


/**
 * 响应处理 loading 显示
 * @param response AxiosResponse
 */
export function handleResponseDefault(response: AxiosResponse) {
  const requestConfig: IRequestConfig = response.config;
  if (requestConfig.loading) {
    hideFullScreenLoading();
  }

  return response;
}


/**
 * 响应拦截器 - 处理成功响应
 *
 * @export
 * @param {AxiosResponse<IResponse>} response
 * @returns
 */
export async function handleResponseSuccess(response: AxiosResponse<IResponse>) {
  if (response.config.responseType!.toLocaleLowerCase() === 'blob') {
    return Promise.resolve(response);
  }
  const { successful } = response.data ?? {};
  if (successful) {
    return Promise.resolve(response);
  }

  return response;
}


/**
 *
 *
 * @export
 * @param {AxiosResponse<IResponse>} response
 * @returns
 */
export function handleResponseFail(response: AxiosResponse<IResponse>) {
  return response;
}

/**
 *
 *
 * @export
 * @param {*} error
 * @returns
 */
export async function handleResponseError(error: { response?: any; message?: string; }) {
  hideFullScreenLoading();

  // 通过 axios.isCancel(error) 判断是否是 canceled 的请求
  if (axios.isCancel(error)) {
    return Promise.reject({
      isCancel: true,
      status: 'canceled',
      statusText: 'Cancel operation',
      message: error.message,
    });
  }

  // HTTP 错误
  if (error && error.response) {
    const MESSAGE_MAP: BaseObject = {
      400: '错误请求',
      401: '会话过期，请重新登录',
      403: '拒绝访问',
      404: '请求错误，未找到该资源',
      405: '请求方法未允许',
      408: '请求超时',
      500: '服务器端出错',
      501: '网络未实现',
      502: '网络错误',
      503: '服务不可用',
      504: '网络超时',
      505: 'http版本不支持该请求',
    };
    error.message = MESSAGE_MAP[error.response.status] || `连接错误${error.response.status}`;
  } else {
    error.message = error.message || '连接到服务器失败';
  }

  const { status = '', statusText = '未知错误', data } = error.response || {};
  Notify(`${status} - ${error.message}`);

  // TODO: 处理登录过期 & 没有权限的逻辑
  if (status && status === 401) {
    return Promise.reject(data);
  }
  return Promise.reject({
    status,
    statusText,
    message: error.message,
  });
}
