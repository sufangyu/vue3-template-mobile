import http from '@/http';

interface List {
  /** 列表数据 */
  list: [];
  page: number;
  pages: number;
  size: number;
  total: number;
}

interface New {
  name?: string;
  /** 标题 */
  title?: string;
  /** 内容 */
  content?: string;
}


/**
 * 获取列表
 * @param params 参数
 */
export const getList = (params = {}) => {
  const url = 'http://localhost:3000/api/list';

  return http.get<List>({
    url,
    params,
  });
};


/**
 * 创建新闻
 * @param data 参数
 */
export const createNews = (data: New) => {
  const url = 'http://localhost:3000/api/post';

  return http.post<List>({
    url,
    data,
  });
};
