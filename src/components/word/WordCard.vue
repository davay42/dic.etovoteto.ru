<script setup async>
import { renderWord } from '~/use/useDictionary.js'
import { useWordDefs, useUser } from '~/use/directus.js'

const props = defineProps({
	letters: { type: String, default: '' },
	stress: { type: Number, default: 0 },
	def: { type: Array, default: [] },
	user_created: { type: String, default: '' }
})

const defs = await useWordDefs(props.def)

const { user } = await useUser(props.user_created)

</script>

<template lang='pug'>
.card
	.flex.items-center
		.text-2xl.font-bold(v-html="renderWord(letters, stress)")
		.flex-auto
		router-link.px-2.pb-1.rounded-xl.text-sm.py-0.bg-light-800.dark_bg-dark-800.opacity-20.hover_opacity-90.transition(
			:to="`/users/${user.id}`"
		) {{ user.first_name }} {{ user.last_name }}
	.flex.flex-col.gap-4.py-4
		.card(v-for="def in defs" :key="def") {{ def.text }}

	slot
</template>
