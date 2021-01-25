<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <van-button @click="handleGetList">GET 请求</van-button>
    </p>
    <p>
      <van-button @click="handlePost">POST 请求</van-button>
    </p>
    <p>
      <router-link :to="{ name: 'About' }">关于我们</router-link>
    </p>
    <img :src="img" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getList, createNews } from '@/api/test';
import img from '@/assets/test.jpg';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
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
      handleGetList,
      handlePost,
      img,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  color: #42b983;

  @include active;
}

img {
  width: 100px;
}

div {
  @at-root a {
    color: #000;
  }
}
</style>
