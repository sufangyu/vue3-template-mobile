<template>
  <svg class="icon-svg" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'IconSvg',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return {
      iconName: computed(() => `#icon-${props.name}`),
    };
  },
});
</script>

<style>
.icon-svg {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
