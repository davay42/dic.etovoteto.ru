<script setup>
import { useTimeAgo } from '@vueuse/core';
import { useWord, useWordDefs } from '~/use/useDb';
import { renderWord, messages } from '~/use/useDictionary.js'

const props = defineProps({
	uid: { type: String, default: 2 }
})

const { word } = useWord(props.uid)

const defs = computed(() => useWordDefs(word.value?.defs))

const timeAgo = useTimeAgo(computed(() => word.value?.date_created), { messages })

</script>

<template lang='pug'>
.flex.flex-col.gap-4 
	.text-4xl.font-bold(v-html="renderWord(word?.letters, word?.stress)")
	AuthorBadge(v-if="word?.user_created" :uid="word?.user_created") {{timeAgo}}
	.flex.flex-col.gap-4 
		DefCard(v-for="def in defs" :key="def.id" v-bind="def")
</template>