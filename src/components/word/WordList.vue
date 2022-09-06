<script setup async>
import { useWords } from '~/use/directus.js'


const { words, count } = await useWords()


</script>

<template lang='pug'>
.flex.flex-col.gap-4.py-4
	.flex.flex-col.gap-4
		WordCard(
			v-for="word in words" :key="word.id"
			v-bind="word"
			) 
</template>

