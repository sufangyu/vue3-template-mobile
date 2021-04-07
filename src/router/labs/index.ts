import { RouteRecordRaw } from 'vue-router';

export default [
  {
    path: '/labs',
    name: 'Labs',
    redirect: '/labs/navigation',
    component: () => import('@/layouts/empty.vue'),
    children: [
      {
        path: 'navigation',
        name: 'LabsNav',
        component: () => import('@/views/labs/navigation.vue'),
        meta: {
          title: 'Labs 导航',
        },
      },
      {
        path: 'white-space',
        name: 'LabsWhiteSpace',
        component: () => import('@/views/labs/white-space-demo.vue'),
        meta: {
          title: 'WhiteSpace 上下留白',
        },
      },
      {
        path: 'wing-blank',
        name: 'LabsWingBlank',
        component: () => import('@/views/labs/wing-blank-demo.vue'),
        meta: {
          title: 'WingBlank 两翼留白',
        },
      },
      {
        path: 'request',
        name: 'LabsRequest',
        component: () => import('@/views/labs/request.vue'),
        meta: {
          title: 'Request 请求',
        },
      },
      {
        path: 'filter',
        name: 'LabsFilter',
        component: () => import('@/views/labs/filter.vue'),
        meta: {
          title: 'Filter 过滤器',
        },
      },
      {
        path: 'precision',
        name: 'LabsPrecision',
        component: () => import('@/views/labs/precision.vue'),
        meta: {
          title: 'Precision 小数精准度',
        },
      },
    ],
  },
] as Array<RouteRecordRaw>;
