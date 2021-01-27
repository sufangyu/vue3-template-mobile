<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ user }}</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';

export default defineComponent({
  setup() {
    const { state } = useStore(key);

    return {
      user: computed(() => state.base.user),
    };
  },
});
</script>
