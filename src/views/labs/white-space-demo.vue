<template>
  <section>
    <demo-name />
    <wing-blank class="demo-content">
      <place-holder />
      <white-space size="xs" />

      <place-holder />
      <white-space size="sm" />

      <place-holder />
      <white-space size="md" />

      <place-holder />
      <white-space size="lg" />

      <place-holder />
      <white-space size="xl" />
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
