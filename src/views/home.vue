<template>
  <div class="home">
    <wing-blank>
      <white-space size="lg" />
      <img src="@/assets/logo.png" />
      <p>
        <router-link :to="{ name: 'About' }">关于我们</router-link>
      </p>

      <white-space size="lg" />
      <van-button @click="handleUpdate">更新用户信息</van-button>
      <p>{{ info }}</p>
      <p>{{ user }}</p>
    </wing-blank>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import wingBlank from '@/components/wing-blank/wing-blank.vue';
import WhiteSpace from '@/components/white-space/white-space.vue';

export default defineComponent({
  components: { wingBlank, WhiteSpace },
  name: 'Home',
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
