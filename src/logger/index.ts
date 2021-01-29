import { loadScript } from '@/utils';

// TODO: 生产环境不执行
loadScript('//cdn.bootcdn.net/ajax/libs/vConsole/3.3.4/vconsole.min.js', () => {
  // eslint-disable-next-line no-new
  new VConsole();
});
