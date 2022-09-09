<script setup>
import { useAuthor } from '~/use/useDb';

const props = defineProps({
	uid: { type: String, default: '' }
})

const { user } = useAuthor(props.uid)

</script>

<template lang='pug'>
.flex.flex-wrap.gap-4.items-start
	AuthorCard(v-bind="user")
</template>