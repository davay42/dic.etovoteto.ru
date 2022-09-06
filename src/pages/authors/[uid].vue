<script setup>
import { useAuthor } from '~/use/directus';

const props = defineProps({
	uid: { type: String, default: '' }
})

const { user } = useAuthor(props.uid)

</script>

<template lang='pug'>
.flex.flex-wrap.gap-4.items-start
	.flex(style="flex: 1 1 100px" v-if="user?.avatar")
		img.rounded-full(:src="`https://api.etovoteto.ru/assets/${user.avatar}?width=100`")
	.flex.flex-col.gap-2(style="flex: 1 1 200px")
		.text-2xl.font-bold {{user?.first_name}} {{user?.last_name}}
		.text-sm {{user?.location}}
		.text-md {{user?.description}}
		.text-xs.opacity-50 {{user}}
</template>