import { Store } from 'vuex';

interface BaseStateType {
  info: string;
  user: { name: string; age: number; }
}

const base = {
  namespaced: true,
  state: {
    info: 'info from home state model',
    /** 用户信息 */
    user: {
      name: '张三疯',
      age: 18,
    },
  },
  getters: {
    user(State: { user: any; }) {
      return State.user;
    },
  },
  actions: {
    updateUser({ commit }: Store<BaseStateType>, user: any) {
      commit('UPDATE_USER', user);
    },
  },
  mutations: {
    UPDATE_USER(state: BaseStateType, user: any) {
      state.user = Object.assign({}, state.user, user);
    },
  },
};


export { BaseStateType };
export default base;
