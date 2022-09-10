<script setup async>
import { renderWord, messages } from '~/use/useDictionary.js'
import { useWordDefs, useAuthor, } from '~/use/useDb.js'
import { useTimeAgo } from '@vueuse/core'

const props = defineProps({
	id: { type: Number, default: 0 },
	letters: { type: String, default: '' },
	stress: { type: Number, default: 0 },
	defs: { type: Array, default: [] },
	user_created: { type: String, default: '' },
	date_created: { type: String, default: '' }
})

const { user } = useAuthor(props.user_created)

const timeAgo = useTimeAgo(props.date_created, {
	messages
})

</script>

<template lang='pug'>
router-link.card.relative(:to="`/words/${id}`")
	.flex.items-center.gap-2.mb-2
		.text-2xl.font-bold(v-html="renderWord(letters, stress)" )
		.flex-auto
		.pb-1.px-2.bg-light-900.rounded-lg(v-if="defs.length>0") {{defs.length}}
	.absolute.bottom-2.right-2.text-xs.opacity-30 {{ user?.first_name }} {{ user?.last_name }}  {{ timeAgo }}
	slot
</template>
