import { MockMethod } from 'vite-plugin-mock';
import Query from './utils';
import ListData from './list';

export default [
  {
    url: '/api/list',
    method: 'get',
    response: ({ query }) => {
      const { page, size, dataSource } = Query(query, ListData.list);

      return {
        success: true,
        message: '请求成功',
        data: {
          list: dataSource.slice((page - 1) * size, page * size),
          page: Number(page),
          size: Number(size),
          pages: Math.ceil(dataSource.length / size),
          total: dataSource.length,
        },
      }
    },
  },
  {
    url: '/api/post',
    method: 'post',
    response: ({ body }) => {
      return {
        success: true,
        message: '请求成功',
        data: {
          name: body.name,
        },
      };
    },
  },
] as MockMethod[];
