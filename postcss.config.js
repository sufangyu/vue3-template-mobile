/* eslint-disable @typescript-eslint/no-var-requires, global-require */
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-px2rem')({
      rootValue: 37.5,
      remUnit: 50,
    }),
  ],
};
