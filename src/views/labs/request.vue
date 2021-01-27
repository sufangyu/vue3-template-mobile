<template>
  <section>
    <demo-name name="Request 请求"></demo-name>
  </section>
</template>

<script>
import { defineComponent, getCurrentInstance } from 'vue';
import DemoName from './components/demo-name.vue';

export default defineComponent({
  components: {
    DemoName,
  },
  setup() {
    const currentPage = getCurrentInstance();
    console.log(currentPage);

    return {
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
