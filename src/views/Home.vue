<template>
  <div class="home">
    <img src="@/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <van-button @click="handleUpdate">更新用户信息</van-button>
    <p>{{ info }}</p>
    <p>{{ user }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import HelloWorld from '@/components/hello-world.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    const store = useStore(key);
    const { base } = store.state;

    function handleUpdate() {
      store.dispatch('base/updateUser', {
        name: '隔壁老王',
      });
    }

    return {
      info: computed(() => base.info),
      user: computed(() => base.user),
      handleUpdate,
    };
  },
});
</script>

<style lang="scss" scoped>
img {
  display: block;
  width: 120px;
  margin: 0 auto;
}
</style>
