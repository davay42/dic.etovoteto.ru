<script setup>


</script>

<template lang="pug">
.flex.flex-col
  router-view(v-slot="{ Component }")
    transition(name="fade" mode="out-in")
      keep-alive
        component#content(:is="Component")
</template>

<style lang="postcss">
</style>


