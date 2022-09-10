<script setup>
const props = defineProps({
	"id": String,
	"first_name": String,
	"last_name": String,
	"email": String,
	"password": String,
	"location": String,
	"title": String,
	"description": String,
	"avatar": String,
	"language": String,
	"theme": String,
	"status": String,
	"role": String,
	"token": String,
	"last_access": String,
	"last_page": String,
	"color": String,
})
</script>

<template lang='pug'>
.flex.flex-col.gap-1
	.flex(style="flex: 1 1 100px" v-if="avatar")
		img.rounded-full(:src="`https://api.etovoteto.ru/assets/${avatar}?width=100`")
	.text-2xl.font-bold {{first_name}} {{last_name}}
	.text-xs.font-mono {{email}}
	.text-lg {{location}}
	.text-md {{title}}
	.text-sm {{description}}
	.text-xs.font-mono 
		slot
</template>