<script setup async>
import { useWords } from '~/use/directus.js'


const { words, count } = await useWords()


</script>

<template lang='pug'>
.p-4 
	.font-bold.text-xl Словарь
	.flex.flex-col.gap-4.py-4
		.text-xl Слова ({{ count }})
		.flex.flex-col.gap-4
			WordCard(
				v-for="word in words" :key="word.id"
				v-bind="word"
				) 
				.text-mono.text-xs {{ word }}
</template>

<style lang="postcss" scoped>
.card {
	@apply rounded-xl p-4 shadow-xl bg-light-200 dark_bg-dark-200;
}
</style>