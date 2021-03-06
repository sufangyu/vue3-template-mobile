import { Toast } from 'vant';
import { VanToast } from 'vant/types/toast.d';
import { debounce } from 'lodash-es';

let needLoadingRequestCount = 0;
let loadingInstance: VanToast | null = null;


/**
 * 显示全局 loading
 * @param message {string} 提示内容
 */
export function showFullScreenLoading(message: string = '加载中...') {
  if (needLoadingRequestCount === 0) {
    loadingInstance = Toast.loading({
      message,
      duration: 0,
      overlay: true,
      forbidClick: true,
    });
  }

  needLoadingRequestCount += 1;
}


// loading 防抖
const debounceEndLoading = (() => debounce(() => {
  if (loadingInstance) {
    loadingInstance.clear();
  }
  loadingInstance = null;
}, 100))();


/**
 * 隐藏全局 loading
 */
export function hideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) {
    return;
  }

  needLoadingRequestCount -= 1;
  if (needLoadingRequestCount === 0) {
    debounceEndLoading();
  }
}
