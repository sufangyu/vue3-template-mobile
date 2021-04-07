export interface CDN {
  /** 第三方样式列表 */
  css: string[];
  /** 第三方脚本列表 */
  js: string[];
}

export interface Options {
  cdn?: CDN;
  /** 页面标题 */
  title?: string;
}
