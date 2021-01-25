import axios from 'axios';
import { IRequestConfig, IResponse } from './index.d';
import {
  handleRequestDefault, handleRequestDuplicate, handleRequestGlobalParams, handleRequestConfigUrl,
  handleResponseDefault, handleResponseSuccess, handleResponseFail, handleResponseError,
} from './interceptors';

const { CancelToken } = axios;

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  // send cookies when cross-domain requests
  withCredentials: true,
});

// request interceptors
instance.interceptors.request.use(handleRequestDefault, (error) => Promise.reject(error));
instance.interceptors.request.use(handleRequestGlobalParams);
instance.interceptors.request.use(handleRequestDuplicate);
instance.interceptors.request.use(handleRequestConfigUrl);

// response interceptors
instance.interceptors.response.use(handleResponseDefault);
instance.interceptors.response.use(handleResponseSuccess);
instance.interceptors.response.use(handleResponseFail, handleResponseError);


// 请求默认参数
const defaultConfig: IRequestConfig = {
  server: 'base',
  url: '',
  method: 'GET',
  params: {},
  data: {},
  config: {},
  loading: true,
  loadingMessage: '加载中...',
  responseType: 'json',
  isCache: false,
  isCancelDuplicateWithoutParams: false,
  isNotCancel: false,
};


const http = {
  /** GET 请求 */
  async get<T = any>({ config = {}, ...requestConfig }: IRequestConfig): Promise<IResponse<T>> {
    const mergeConfig: IRequestConfig = Object.assign({}, {
      ...defaultConfig,
      ...requestConfig,
      method: 'GET',
    }, config);

    mergeConfig.cancelToken = new CancelToken((c) => {
      mergeConfig.cancelFn = c;
    });

    const res = await instance.request(mergeConfig);
    return res.data;
  },
  /** POST 请求 */
  async post<T = any>({ config = {}, ...requestConfig }: IRequestConfig): Promise<IResponse<T>> {
    const mergeConfig = Object.assign({}, {
      ...defaultConfig,
      ...requestConfig,
      method: 'POST',
    }, config);

    mergeConfig.cancelToken = new CancelToken((c) => {
      mergeConfig.cancelFn = c;
    });

    const res = await instance.request(mergeConfig);
    return res.data;
  },
  /** PUT 请求 */
  async put<T = any>({ config = {}, ...requestConfig }: IRequestConfig): Promise<IResponse<T>> {
    const mergeConfig = Object.assign({}, {
      ...defaultConfig,
      ...requestConfig,
      method: 'PUT',
    }, config);

    mergeConfig.cancelToken = new CancelToken((c) => {
      mergeConfig.cancelFn = c;
    });

    const res = await instance.request(mergeConfig);
    return res.data;
  },
  /** DELETE 请求 */
  async delete<T = any>({ config = {}, ...requestConfig }: IRequestConfig): Promise<IResponse<T>> {
    const mergeConfig = Object.assign({}, {
      ...defaultConfig,
      ...requestConfig,
      method: 'DELETE',
    }, config);

    mergeConfig.cancelToken = new CancelToken((c) => {
      mergeConfig.cancelFn = c;
    });

    const res = await instance.request(mergeConfig);
    return res.data;
  },
};

export default http;
