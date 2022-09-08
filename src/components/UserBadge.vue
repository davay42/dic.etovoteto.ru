<script setup>
import { useAuthor } from '~/use/useDb';

const props = defineProps({
	uid: { type: String, default: '' }
})

const { user } = useAuthor(props.uid)
</script>

<template lang='pug'>
router-link.px-2.pb-1.rounded-xl.text-sm.py-0.bg-light-800.dark_bg-dark-800.opacity-20.hover-opacity-90.transition(
	:to="`/authors/${user?.id}`"
) {{ user?.first_name }} {{ user?.last_name }}
</template>