<template>
  <section>
    <demo-name :title="pageTitle"></demo-name>
    <div class="demo-content">
      <van-button type="primary" @click="handleGetList">GET 请求</van-button>
      <van-button type="success" @click="handlePost">POST 请求</van-button>
    </div>
  </section>
</template>

<script>
import { defineComponent, getCurrentInstance } from 'vue';
import { getList, createNews } from '@/api/test';
import DemoName from './components/demo-name.vue';

export default defineComponent({
  components: {
    DemoName,
  },
  setup() {
    const { currentRoute } = getCurrentInstance().ctx.$router;
    const meta = currentRoute?.value?.meta ?? {};

    async function handleGetList() {
      const params = {
        ids: [1, 2, 3, 4],
      };
      try {
        const { data } = await getList(params);
        console.log(data?.list);
      } catch (error) {
        console.log(error);
      }
    }

    async function handlePost() {
      const { data } = await createNews({
        title: '标题',
        content: '内容',
        name: '张三疯',
      });
      console.log(data);
    }

    return {
      pageTitle: meta?.title,
      handleGetList,
      handlePost,
    };
  },
});
</script>

<style lang="scss" scoped>
.demo-content {
  padding: 15px;

  .van-button--small,
  .van-button--normal:not(:last-child) {
    margin-right: 16px;
  }
}
</style>
