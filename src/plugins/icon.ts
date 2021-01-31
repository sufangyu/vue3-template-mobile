// import all svg to html > body
const requireAll = (requireContext: any) => {
  requireContext.keys().map(requireContext);
};
const req = require.context('../assets/icons-svg', true, /\.svg$/);

requireAll(req);
