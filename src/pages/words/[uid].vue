<script setup>
import { useWord } from '~/use/directus';
import { renderWord } from '~/use/useDictionary.js'

const props = defineProps({
	uid: { type: String, default: 2 }
})

const { word } = useWord(props.uid)

</script>

<template lang='pug'>
.flex.flex-col.gap-4 
	.text-4xl.font-bold(v-html="renderWord(word?.letters, word?.stress)")
	UserBadge(v-if="word?.user_created" :uid="word?.user_created")
	.p-0 {{word}}
</template>