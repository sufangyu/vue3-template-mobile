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
        path: 'request',
        name: 'LabsRequest',
        component: () => import('@/views/labs/request.vue'),
        meta: {
          title: 'Request 请求',
        },
      },
    ],
  },
];
