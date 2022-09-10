<script setup async>

const props = defineProps({
	id: { type: String, default: '' },
	avatar: { type: String, default: '' },
	first_name: { type: String, default: '' },
	last_name: { type: String, default: '' },
	location: { type: String, default: '' },
	description: { type: String, default: '' }
})


</script>

<template lang='pug'>
.card.flex.flex-wrap.gap-4.items-start
	.flex(style="flex: 1 1 100px" v-if="avatar")
		img.rounded-full(:src="`https://api.etovoteto.ru/assets/${avatar}?width=100`")
	.flex.flex-col.gap-2(style="flex: 1 1 200px")
		.text-2xl.font-bold {{first_name}} {{last_name}}
		.flex(v-if="location")
			.i-la-map-marker
			.text-sm {{location}}
		.text-md {{description}}
	slot
</template>
