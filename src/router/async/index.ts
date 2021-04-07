import { RouteRecordRaw } from 'vue-router';

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
] as Array<RouteRecordRaw>;
