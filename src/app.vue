<script setup>


</script>

<template lang="pug">
.flex.flex-col.items-center
  head-panel
  .max-w-100.flex.flex-col.pt-4
    router-view(v-slot="{ Component }")
      transition(name="fade" mode="out-in")
        keep-alive
          component#content.p-4(:is="Component" :key="$route.path")
</template>

<style lang="postcss">
header {
  @apply p-0;
}

.card {
  @apply rounded-xl py-4 px-6 shadow-xl bg-light-200 dark-bg-dark-200;
}
</style>


