import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';
import { StateType } from '@/types';

declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<StateType>
  }
}
