export default [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about.vue'),
  },
  // 没有匹配对应的路由
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    hidden: true,
  },
];
