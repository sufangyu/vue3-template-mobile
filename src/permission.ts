// 路由守卫 (权限控制)
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import router from '@/router';


// NProgress Configuration
NProgress.configure({ showSpinner: true });

router.beforeEach(async (to, from, next) => {
  NProgress.start();

  next();
});


router.afterEach(() => {
  NProgress.done();
});

