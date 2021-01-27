import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import routerAsyncMap from './async';
import routerConstantMap from './constant';
import routerLabsMap from './labs';


// 开发环境注入 labs 路由
if (process.env.NODE_ENV === 'development') {
  routerConstantMap.unshift(...routerLabsMap);
}

const routes: Array<RouteRecordRaw> = [
  ...routerAsyncMap,
  ...routerConstantMap,
  // 没有匹配对应的路由
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
