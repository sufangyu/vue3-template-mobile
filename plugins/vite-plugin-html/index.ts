import type { Plugin, HtmlTagDescriptor } from 'vite';
import { Options } from './types';

const htmlPlugin = (options?: Options): Plugin => ({
  name: 'vite:inject-html',
  apply: 'build',
  transformIndexHtml: {
    enforce: 'pre',
    transform(html: string) {
      const { title, cdn: { css, js } } = options;
      const tags: HtmlTagDescriptor[] = [];

      (css || []).forEach((url: string) => {
        const styleTag: HtmlTagDescriptor = {
          tag: 'link',
          attrs: { as: 'style', rel: 'stylesheet', href: url },
          injectTo: 'head',
        };
        tags.push(styleTag);
      });
      (js || []).forEach((url: string) => {
        const scriptTag: HtmlTagDescriptor = {
          tag: 'script',
          attrs: { crossorigin: 'crossorigin', src: url },
          injectTo: 'body',
        };
        tags.push(scriptTag);
      });
      const htmlTransform = title && html.replace(/<title>(.*?)<\/title>/, `<title>${title}</title>`);

      return {
        html: htmlTransform,
        tags,
      };
    },
  },
});

export default htmlPlugin;
