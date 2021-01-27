<template>
  <section class="demo-name">
    <router-link :to="{ path: '/labs'}">
      实验室首页
    </router-link>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>

</style>
