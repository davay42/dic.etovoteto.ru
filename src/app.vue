<script setup>


</script>

<template lang="pug">
.flex.flex-col.items-center
  head-panel
  .max-w-100.flex.flex-col.pt-8
    router-view(v-slot="{ Component }")
      transition(name="fade" mode="out-in")
        keep-alive
          component#content(:is="Component")
</template>

<style lang="postcss">
header {
  @apply p-0;
}

.card {
  @apply rounded-xl py-4 px-6 shadow-xl bg-light-200 dark-bg-dark-200;
}
</style>


