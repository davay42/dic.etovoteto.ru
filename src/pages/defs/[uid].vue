<script setup>
import { useTimeAgo } from '@vueuse/core';
import { directus } from '~/use/useDb';
import { messages } from '../../use/useDictionary';



const props = defineProps({
	uid: { type: String, default: '' }
})

const def = ref()
const words = reactive([]);


async function load() {
	const data = await directus
		.items('definitions')
		.readOne(props.uid);
	def.value = data;

	for (let id of def.value.words) {

		let link = await directus
			.items('links')
			.readOne(id)

		let word = await directus
			.items('words')
			.readOne(link.word)

		words.push(word)
	}

}

load()

const timeAgo = useTimeAgo(computed(() => def.value?.date_created), { messages })

</script>

<template lang='pug'>
.flex.flex-col.gap-2(v-if="def") 
	.text-2xl {{def.text}}
	AuthorBadge(v-if="def?.user_created" :uid="def?.user_created") {{timeAgo}}
	.flex.flex-col.gap-2 
		WordCard(v-for="word in words" :key="word.id" v-bind="word")
</template>