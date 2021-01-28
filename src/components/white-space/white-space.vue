<template>
  <div
    class="whitespace"
    :class="sizeClass"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
/** 上下留白的间距 */
import { computed, defineComponent, PropType } from 'vue';
import { Size } from './types';

export default defineComponent({
  name: 'WhiteSpace',
  props: {
    /** 可选xs, sm, md, lg, xl */
    size: {
      type: String as PropType<Size>,
      default: 'md',
      validator: (value: Size) => ['xs', 'sm', 'md', 'lg', 'xl'].indexOf(value) !== -1,
    },
  },
  setup(props) {
    return {
      sizeClass: computed(() => `whitespace-${props.size}`),
    };
  },
});
</script>

<style lang="scss" scoped>
.whitespace {
  &.whitespace-xs {
    height: 3px;
  }

  &.whitespace-sm {
    height: 6px;
  }

  &.whitespace-md {
    height: 9px;
  }

  &.whitespace-lg {
    height: 15px;
  }

  &.whitespace-xl {
    height: 21px;
  }
}
</style>

