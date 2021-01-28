const path = require('path');
const { merge } = require('webpack-merge');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const BundleAnalyzer = require('webpack-bundle-analyzer');
const cdn = require('./config/cdn');
const externals = require('./config/externals');


// 是否是生产环境
const IS_PROD = process.env.NODE_ENV === 'production';
const resolve = (dir) => path.join(__dirname, './', dir);


const addStyleResource = (rule) => {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        resolve('src/styles/var.scss'),
      ],
    });
};


module.exports = {
  lintOnSave: 'error',
  publicPath: IS_PROD ? '/' : '/',
  css: {
    extract: !!IS_PROD,
    loaderOptions: {
      sass: {
        // fix: SassError: Undefined mixin.
        prependData: '@import "@/styles/mixins/index.scss";',
      },
    },
  },
  configureWebpack: (config) => {
    if (IS_PROD) {
      config.externals = externals;

      config.plugins.push(
        // gzip
        new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: new RegExp(`\\.(${['js', 'css'].join('|')})$`),
          threshold: 10240,
          minRatio: 0.8,
        }),
      );
    }
  },

  chainWebpack: (config) => {
    // 全局注入 scss 变量
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) => {
      addStyleResource(config.module.rule('scss').oneOf(type));
    });

    // 图片处理. TODO: not working
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => merge(options, {
        limit: 1024 * 1,
      }));

    // build 打包使用 CDN
    if (IS_PROD) {
      config.plugin('html')
        .tap((args) => {
          args[0].cdn = cdn;
          return args;
        });

      // analyse
      if (process.env.ANALYSE) {
        config
          .plugin('webpack-bundle-analyzer')
          .use(BundleAnalyzer.BundleAnalyzerPlugin);
      }
    }
  },

  devServer: {
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
