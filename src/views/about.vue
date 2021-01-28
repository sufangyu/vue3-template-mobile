<template>
  <div class="container">
    <van-nav-bar
      title="关于我们"
      left-text="返回"
      right-text="更多"
      left-arrow
      @click-left="handleClickLeft"
      @click-right="handleClickRight"
    >
      <template #right>
        <van-icon name="ellipsis" size="20" />
      </template>
    </van-nav-bar>
    <white-space size="lg" />
    <h1>This is an about page</h1>
    <white-space size="lg" />
    <p>{{ user }}</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { Toast } from 'vant';
import { key } from '@/store';
import whiteSpace from '@/components/white-space/white-space.vue';

export default defineComponent({
  components: { whiteSpace },
  setup() {
    const { state } = useStore(key);
    const currentRouter = useRouter();

    function handleClickLeft() {
      currentRouter.go(-1);
    }

    function handleClickRight() {
      Toast({ message: '更多操作', position: 'bottom' });
    }

    return {
      user: computed(() => state.base.user),
      handleClickLeft,
      handleClickRight,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  text-align: center;

  h1 {
    margin-bottom: 20px;
  }
}
</style>
