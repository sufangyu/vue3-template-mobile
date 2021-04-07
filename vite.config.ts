import { UserConfigExport, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import viteSvgIcons from 'vite-plugin-svg-icons';
import { viteMockServe } from 'vite-plugin-mock';
import externalGlobals from 'rollup-plugin-external-globals';
import vitePluginHtml from './plugins/vite-plugin-html';
import { cdn, externals } from './config';

// https://vitejs.dev/config/
// https://github.com/vitejs/awesome-vite
export default ({ command }: ConfigEnv): UserConfigExport => ({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/var.scss";',
      },
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    viteSvgIcons({
      iconDirs: [resolve(process.cwd(), './src/assets/icons-svg')],
      symbolId: 'icon-[name]',
    }),
    vitePluginHtml({
      cdn,
    }),
    viteMockServe({
      // default
      mockPath: 'mock',
      localEnabled: command === 'serve',
    }),
  ],
  // 构建时配置
  build: {
    target: 'es2015',
    rollupOptions: {
      plugins: [
        externalGlobals(externals),
      ],
    },
  },
});
