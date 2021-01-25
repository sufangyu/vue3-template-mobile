module.exports = {
  plugins: [
    require('postcss-px2rem')({
      rootValue: 37.5,
      remUnit: 50,
    }),
  ],
};
