import { InjectionKey } from 'vue';
import {
  createStore, createLogger,
  Store, useStore as baseUseStore,
} from 'vuex';
import { StateType } from '@/types/store';


const modulesFiles = require.context('./modules', true, /^.*?((?<!\.d\.ts)(?<!\.d))$/);
// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
// eslint-disable-next-line no-shadow
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  let moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
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
