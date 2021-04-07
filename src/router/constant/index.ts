import { RouteRecordRaw } from 'vue-router';

export default [
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/error-page/404.vue'),
  },
] as Array<RouteRecordRaw>;
