<template>
  <section>
    <demo-name />

    <wing-blank>
      <place-holder />
    </wing-blank>
    <white-space></white-space>

    <wing-blank size="md">
      <place-holder />
    </wing-blank>
    <white-space></white-space>

    <wing-blank size="sm">
      <place-holder />
    </wing-blank>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import DemoName from './components/demo-name.vue';
import PlaceHolder from './components/place-holder.vue';

export default defineComponent({
  components: {
    DemoName, PlaceHolder,
  },
});
</script>
