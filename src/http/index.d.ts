import { AxiosRequestConfig, Canceler } from 'axios';

// 请求配置项
export interface IRequestConfig extends AxiosRequestConfig {
  /** 是否显示 loading */
  loading?: boolean;
  /** 全局loading 提示语 */
  loadingMessage?: string;
  /** 调用的域名服务标志 */
  server?: string;
  /** 缓存请求 cancelToken 的 key */
  cacheRequestKey?: string;
  /** 是否缓存 GET 请求. 设置时间戳参数 */
  isCache?: boolean;
  /** Axios 请求配置 */
  config?: any;
  /** 取消重复 url 请求（不包含参数） */
  isCancelDuplicateWithoutParams?: boolean;
  /** 强制不取消请求 */
  isNotCancel?: boolean;
  /** 取消请求对象 */
  cancelFn?: Canceler;
  /** 自定义 处理 失败提示语 返回 true 展示默认提示语 */
  errorMessageCallback?: (res: any) => boolean;
  /** 数据模型 */
  model?: ClassType,
}


export interface ClassType {
  new (...args: any[]): any;
}


// 请求响应体
export interface IResponse<T = any> {
  /** 响应实体数据 */
  data: T;
  /** 响应是否成功 */
  successful?: boolean;
  /** 响应描述内容 */
  message?: string;
  /** 响应 Code */
  code?: string;
}


// Promise 拓展
export type IPromise<T = any> = Promise<IResponse<T>>
