import { BaseStateType } from '@/store/modules/base';

// vuex state 的模块的类型
type VuexModuleType = {
  base: BaseStateType;
}

// 所有的 StateType
export type StateType = VuexModuleType;
