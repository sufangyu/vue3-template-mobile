<template>
  <section>
    <demo-name :title="pageTitle"></demo-name>
    <wing-blank class="demo-content">
      <div>
        <van-button type="primary" @click="handleGetList">GET 请求</van-button>
        <van-button type="success" @click="handlePost">POST 请求</van-button>
      </div>
      <p>列表长度：{{ listLength }}</p>
    </wing-blank>
  </section>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getList, createNews } from '@/api/test';
import DemoName from './components/demo-name.vue';

export default defineComponent({
  components: {
    DemoName,
  },
  setup() {
    const { title = '' } = useRoute().meta ?? {};
    const listLength = ref(0);

    async function handleGetList() {
      const params = {
        ids: [1, 2, 3, 4],
      };
      try {
        const { data } = await getList(params);
        console.log(data?.list);
        listLength.value = data?.list.length;
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
      pageTitle: title,
      handleGetList,
      handlePost,
      listLength,
    };
  },
});
</script>

<style lang="scss" scoped>
.demo-content {
  p {
    padding: 8px 0;
  }

  .van-button--small,
  .van-button--normal:not(:last-child) {
    margin-right: 16px;
  }
}
</style>
