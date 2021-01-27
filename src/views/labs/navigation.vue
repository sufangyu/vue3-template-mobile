<template>
  <section>
    <div class="labs-title">
      <h1>实验室</h1>
      <p>实验性、自定义组件示例</p>
    </div>
    <div class="labs-nav">
      <van-collapse
        accordion
        :border="false"
        v-model="activeLayout"
      >
        <van-collapse-item title="布局 Layout">内容</van-collapse-item>
      </van-collapse>
      <van-collapse
        accordion
        :border="false"
        v-model="activeOthers"
      >
        <van-collapse-item title="其他 Others">
          <van-cell
            title="Request 请求"
            is-link
            :to="{
              name: 'LabsRequest',
            }"
          />
          <van-cell
            title="Filter 过滤器"
            is-link
            :to="{
              name: 'LabsFilter',
            }"
          />
        </van-collapse-item>
      </van-collapse>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      activeLayout: ref(null),
      activeOthers: ref(null),
    };
  },
};
</script>

<style lang="scss" scoped>
.labs-title {
  text-align: center;
  padding: 50px 15px 30px;

  h1 {
    font-size: 24px;
  }
  p {
    opacity: 0.6;
    font-size: 14px;
    margin-top: 8px;
  }
}

.labs-nav {
  margin-left: 15px;
  margin-right: 15px;

  .van-collapse {
    margin-bottom: 15px;
  }

  :deep {
    .van-collapse-item__title {
      font-size: 16px;
      line-height: 36px;
      align-items: center;
    }

    .van-collapse-item__content {
      padding: 0;
      .van-cell {
        &::after {
          right: 0;
        }
      }
    }
  }
}
</style>
