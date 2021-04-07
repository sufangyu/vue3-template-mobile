import Vant from 'vant';
import 'vant/lib/index.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'vite-plugin-svg-icons/register';
import app from './global';

import router from './router';
import store, { key } from './store';
import './permission';

// 插件
import './plugins/logger';

app.use(store, key)
  .use(router)
  .use(Vant)
  .mount('#app');
