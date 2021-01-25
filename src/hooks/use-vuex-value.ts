// https://juejin.cn/post/6920118166224666632#heading-1

import { useStore } from 'vuex';

const useCurry = (moduleNames: string[]) => {
  const store = useStore();
  let { state } = store;
  moduleNames.forEach((moduleName: string) => {
    state = state[moduleName];
  });

  return state;
};

const useVuexValue = (moduleName: string, storeKeys: string[]) => {
  const values: any = [];
  const moduleNames = moduleName.split('/');
  const state = useCurry(moduleNames);

  storeKeys.forEach((storeKey) => {
    const value = state[storeKey];
    values.push(value ?? null);
  });
  return values;
};

export default useVuexValue;
