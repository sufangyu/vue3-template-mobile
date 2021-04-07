import { InjectionKey } from 'vue';
import {
  createStore, createLogger,
  Store, useStore as baseUseStore,
} from 'vuex';
import { StateType } from '@/types/store';


const modulesFiles = import.meta.globEager('./modules/*.ts');

// you do not need `import base from './modules/base'`
// it will auto require all vuex module from modules file
// eslint-disable-next-line no-shadow
const modules = Object.keys(modulesFiles).reduce((modules, modulePath) => {
  // set 'modules/base.ts' => 'base'
  let moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  moduleName = moduleName.replace(/^modules\//, '');
  let splitNameList = moduleName.split('-');
  if (splitNameList.length > 1) {
    splitNameList = splitNameList.map((item, index) => {
      if (index) {
        return item.charAt(0).toUpperCase() + item.slice(1);
      }
      return item;
    });
    moduleName = splitNameList.join('');
  }
  const value = modulesFiles[modulePath];
  modules[moduleName] = value.default;
  return modules;
}, {} as any);

export const key: InjectionKey<Store<StateType>> = Symbol('InjectionKey');

const store: Store<StateType> = createStore({
  modules,
  strict: process.env.NODE_ENV === 'development',
  plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : [],
});

export function useStore() {
  return baseUseStore(key);
}
export default store;
