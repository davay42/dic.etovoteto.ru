<script setup>
import { directus } from '~/use/useDb.js'


function useWords() {
	const words = ref()
	const count = ref(0)

	async function load() {
		const {
			data,
			meta: { total_count }
		} = await directus
			.items('words')
			.readByQuery({
				meta: 'total_count'
			});

		words.value = data
		count.value = total_count
	}

	load()

	return {
		words, count, load
	}
}

const { words, count, load } = useWords()

</script>

<template lang='pug'>
.flex.flex-col.gap-4.py-4
	.flex.flex-col.gap-4
		WordCard(
			v-for="word in words" :key="word.id"
			v-bind="word"
			) 
</template>