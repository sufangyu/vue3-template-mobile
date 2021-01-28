<template>
  <div
    class="wingblank"
    :class="sizeClass"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
/** 两翼留白的间距 */
import { computed, defineComponent, PropType } from 'vue';
import { Size } from './types';

export default defineComponent({
  name: 'WingBlank',
  props: {
    /** 可选sm, md, lg */
    size: {
      type: String as PropType<Size>,
      default: 'lg',
      validator: (value: Size) => ['sm', 'md', 'lg'].indexOf(value) !== -1,
    },
  },
  setup(props) {
    return {
      sizeClass: computed(() => `wingblank-${props.size}`),
    };
  },
});
</script>

<style lang="scss" scoped>
.wingblank {
  &.wingblank-sm {
    margin-left: 5px;
    margin-right: 5px;
  }
  &.wingblank-md {
    margin-left: 8px;
    margin-right: 8px;
  }
  &.wingblank-lg {
    margin-left: 15px;
    margin-right: 15px;
  }
}
</style>

