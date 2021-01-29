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
        <van-collapse-item :title="navigates[0].title">
          <van-cell
            v-for="(item, idx) in navigates[0].list"
            :key="idx"
            :title="item.title"
            :is-link="item.isLink"
            :to="{ name: item.toRouteName }"
          />
        </van-collapse-item>
      </van-collapse>

      <van-collapse
        accordion
        :border="false"
        v-model="activeOthers"
      >
        <van-collapse-item :title="navigates[1].title">
          <van-cell
            v-for="(item, idx) in navigates[1].list"
            :key="idx"
            :title="item.title"
            :is-link="item.isLink"
            :to="{ name: item.toRouteName }"
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
    const NAVIGATES = [
      {
        title: '布局 Layout',
        list: [
          { title: 'WhiteSpace 上下留白', isLink: true, toRouteName: 'LabsWhiteSpace' },
          { title: 'WingBlank 两翼留白', isLink: true, toRouteName: 'LabsWingBlank' },
        ],
      },
      {
        title: '其他 Others',
        list: [
          { title: 'Request 请求', isLink: true, toRouteName: 'LabsRequest' },
          { title: 'Filter 过滤器', isLink: true, toRouteName: 'LabsFilter' },
          { title: 'Precision 小数精准度', isLink: true, toRouteName: 'LabsPrecision' },
        ],
      },
    ];
    return {
      activeLayout: ref(null),
      activeOthers: ref(null),
      navigates: NAVIGATES,
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

  :deep(.van-collapse-item__title) {
    font-size: 16px;
    line-height: 36px;
    align-items: center;
  }

  :deep(.van-collapse-item__content) {
    padding: 0;

    .van-cell {
      &::after {
        right: 0;
      }
    }
  }
}
</style>
