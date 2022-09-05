<script setup>
const props = defineProps({
	uid: { type: String, default: '' }
})
</script>

<template lang='pug'>
p USER {{ uid }}
</template>