import { createApp } from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

import WingBblank from './components/wing-blank';

import App from './App.vue';
import router from './router';
import store, { key } from './store';
import './permission';

const app = createApp(App);
app.use(store, key)
  .use(router)
  .use(Vant)
  .mount('#app');

// 全局组件
app.component('wing-blank', WingBblank);
