<template>
  <section>
    <demo-name />
    <wing-blank>
      <p>格式化时间：{{ formatTime(new Date()) }}</p>
      <p>手机：{{ formatPhone(15912345678) }}</p>
      <p>手机：{{ formatPhoneHide(15912345678) }}</p>
      <p>银行卡：{{ formatBank(123123123123132) }}</p>
      <p>千分位：{{ toThousands(5000039) }}</p>
      <p>千分位：{{ toThousands('5000039.00') }}</p>
      <p>小数位：{{ formatFloat(3.141590) }}</p>
      <p>中文数字：{{ convertCurrency(1100.1) }}</p>
    </wing-blank>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  formatTime, formatPhone, formatPhoneHide, formatBank,
  toThousands, formatFloat, convertCurrency,
} from '@/utils';
import DemoName from './components/demo-name.vue';

export default defineComponent({
  components: {
    DemoName,
  },
  setup() {
    return {
      formatTime,
      formatPhone,
      formatPhoneHide,
      formatBank,
      toThousands,
      formatFloat,
      convertCurrency,
    };
  },
});
</script>

<style lang="scss" scoped>
p {
  padding: 8px 0;
}
</style>
