/*
 * CDN 配置
 */
export const cdn = {
  css: [
    '//cdnjs.cloudflare.com/ajax/libs/vant/3.0.11/index.min.css',
    '//cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css',
  ],
  js: [
    '//cdnjs.cloudflare.com/ajax/libs/vue/3.0.11/vue.global.prod.js',
    '//cdnjs.cloudflare.com/ajax/libs/vue-router/4.0.5/vue-router.global.min.js',
    '//cdnjs.cloudflare.com/ajax/libs/vuex/4.0.0/vuex.global.min.js',
    '//cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js',
    '//cdnjs.cloudflare.com/ajax/libs/vant/3.0.11/vant.min.js',
  ],
};


/*
 * 构建时排除的第三方组件、库
 */
export const externals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  vuex: 'Vuex',
  axios: 'axios',
  nprogress: 'NProgress',
  'nprogress/nprogress.css': 'NProgress',
  vant: 'vant',
  'vant/lib/index.css': 'vant',
};
