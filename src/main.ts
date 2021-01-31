import Vant from 'vant';
import 'vant/lib/index.css';
import app from './global';

import router from './router';
import store, { key } from './store';
import './permission';

// 插件
import './plugins/logger';
import './plugins/icon';

app.use(store, key)
  .use(router)
  .use(Vant)
  .mount('#app');
