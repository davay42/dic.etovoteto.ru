<script setup async>
import { renderWord } from '~/use/useDictionary.js'
import { useWordDefs, useAuthor, messages } from '~/use/directus.js'
import { useTimeAgo } from '@vueuse/core'

const props = defineProps({
	id: { type: Number, default: 0 },
	letters: { type: String, default: '' },
	stress: { type: Number, default: 0 },
	defs: { type: Array, default: [] },
	user_created: { type: String, default: '' },
	date_created: { type: String, default: '' }
})

const defs = useWordDefs(props.defs)

const { user } = useAuthor(props.user_created)

const timeAgo = useTimeAgo(props.date_created, {
	messages
})

</script>

<template lang='pug'>
.card.relative 
	.flex.items-center
		router-link.text-2xl.font-bold(v-html="renderWord(letters, stress)" :to="`/words/${id}`")
		.flex-auto
		router-link.px-2.pb-1.rounded-xl.text-sm.py-0.bg-light-800.dark_bg-dark-800.opacity-20.hover-opacity-90.transition(
			:to="`/authors/${user?.id}`"
		) {{ user?.first_name }} {{ user?.last_name }}
	.flex.flex-col.gap-4.py-4
		router-link.card(v-for="def in defs" :key="def" :to="`/defs/${def.id}`") {{ def.text }}
	.absolute.bottom-2.right-2.text-xs.opacity-30 {{ timeAgo }}
	slot
</template>
