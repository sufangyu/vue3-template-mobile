import Vant from 'vant';
import 'vant/lib/index.css';
import app from './global';

import router from './router';
import store, { key } from './store';
import './permission';

app.use(store, key)
  .use(router)
  .use(Vant)
  .mount('#app');
