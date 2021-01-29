/**
 * 加载 JS 脚本
 *
 * @export
 * @param {string} url 地址
 * @param {Function} cb 回调函数
 */
export function loadScript(url: string, cb: () => void) {
  const script: any = document.createElement('script');
  script.type = 'text/javascript';

  if (script.readyState) {
    script.onreadystatechange = () => {
      if (['loaded', 'complete'].includes(script.readyState)) {
        script.onreadystatechange = null;
        if (cb) {
          cb();
        }
      }
    };
  } else {
    // Others: Firefox, Safari, Chrome, and Opera
    script.onload = () => {
      if (cb) {
        cb();
      }
    };
  }
  script.src = url;
  document.body.appendChild(script);
}
