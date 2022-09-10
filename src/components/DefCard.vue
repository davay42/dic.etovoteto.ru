<script setup async>
import { renderWord, messages } from '~/use/useDictionary.js'
import { useWordDefs, useAuthor } from '~/use/useDb.js'
import { useTimeAgo } from '@vueuse/core'

const props = defineProps({
	id: { type: Number, default: 0 },
	text: { type: String, default: '' },
	words: { type: Array, default: [] },
	user_created: { type: String, default: '' },
	date_created: { type: String, default: '' }
})

const { user } = useAuthor(props.user_created)

const timeAgo = useTimeAgo(props.date_created, {
	messages
})

</script>

<template lang='pug'>
.card.relative 
	.flex.items-center.mb-2
		router-link.text-lg.font-bold(:to="`/defs/${id}`") {{text}}
		.flex-auto
		.px-2.pb-1.bg-light-900.rounded-lg(v-if="words.length >0") {{words.length}}
	.absolute.bottom-2.right-2.text-xs.opacity-30 {{ user?.first_name }} {{ user?.last_name }} {{ timeAgo }}
	slot
</template>
