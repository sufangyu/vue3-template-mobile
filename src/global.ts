import { createApp } from 'vue';
import WingBlank from '@/components/wing-blank';
import WhiteSpace from '@/components/white-space';
import IconSvg from '@/components/icon-svg';
import App from './App.vue';

const app = createApp(App);
const components: any = {
  WingBlank,
  WhiteSpace,
  IconSvg,
};

Object.keys(components).forEach((key: any) => {
  app.component(key, components[key]);
});

export default app;
