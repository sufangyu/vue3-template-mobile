<template>
  <div class="container container-white">
    <white-space size="lg" />
    <img src="@/assets/logo.png" />
    <white-space size="lg" />
    <h1 class="description">
      Vue3 + TS + <a href="https://vant-contrib.gitee.io/vant/v3/" target="_blank">Vant</a>
    </h1>

    <van-grid clickable square>
      <van-grid-item
        icon="cluster-o"
        text="全局状态"
        :to="{ name: 'About' }"
      />
      <van-grid-item
        icon="exchange"
        text="网络请求"
        :to="{ name: 'LabsRequest' }"
      />
      <van-grid-item
        :badge="5"
        icon="apps-o"
        text="实验室"
        :to="{ name: 'Labs' }"
      />
      <van-grid-item
        icon="ellipsis"
        text="其他"
        @click="hansleShowNotify"
      />
    </van-grid>

    <white-space size="lg" />

    <wing-blank>
      <white-space size="lg" />
      <van-button size="small" @click="handleUpdate">
        更新用户信息
      </van-button>
      <white-space size="lg" />
      <p>{{ user }}</p>
    </wing-blank>

    <white-space size="lg" />
    <wing-blank>
      <p class="icon-demo">
        SVG 图标：<icon-svg name="wechat" />
      </p>
    </wing-blank>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { Notify } from 'vant';
import { key } from '@/store';

export default defineComponent({
  name: 'Home',
  setup() {
    const store = useStore(key);
    const { base } = store.state;

    function handleUpdate() {
      store.dispatch('base/updateUser', {
        name: '隔壁老王',
      });
    }

    function hansleShowNotify() {
      Notify({ type: 'primary', message: '功能暂未开放' });
    }

    return {
      user: computed(() => base.user),
      handleUpdate,
      hansleShowNotify,
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
.description {
  text-align: center;
  padding: 20px 0;
  font-size: 24px;
}
.icon-demo {
  font-size: 22px;
  color: #007fff;
}
</style>
