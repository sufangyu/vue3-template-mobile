<template>
  <section class="demo-title">
    <router-link
      class="icon"
      :to="{ path: '/labs'}"
    >
      <van-icon name="wap-home-o" />
    </router-link>
    {{ title }}
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.demo-title {
  vertical-align: middle;
  font-size: 18px;
  padding: 20px 0 20px 15px;
  text-align: left;
  height: 20px;
  line-height: 20px;
  box-sizing: content-box;

  .icon {
    margin-right: 20px;
    font-size: 20px;
    position: relative;
    vertical-align: middle;
    color: $color-text-base;

    &::after {
      content: "";
      position: absolute;
      top: 1px;
      right: -12px;
      width: 1px;
      height: 15px;
      background-color: #ccc;
    }
  }

}
</style>
