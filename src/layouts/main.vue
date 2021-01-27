<template>
  <!-- name=fade/fade-transform -->
  <router-view v-slot="{ Component }">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include='[]'>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script>
export default {
  name: 'LayoutMain',
};
</script>
