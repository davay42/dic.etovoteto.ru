<script setup>
import { directus } from '~/use/useDb.js'
import Fuse from 'fuse.js'
import { useRouter } from 'vue-router';
import { useAuth } from '~/use/useAuth';
const router = useRouter()

const words = ref()
const count = ref(0)

const search = ref('')
const stress = ref(0)

const { auth } = useAuth()

const fuse = new Fuse(words.value, { keys: ['letters'] })

const results = computed(() => {
	return search.value && fuse.search(search.value)
})

async function load() {
	const {
		data,
		meta: { total_count }
	} = await directus
		.items('words')
		.readByQuery({
			sort: '-date_created',
			meta: 'total_count'
		});

	words.value = data
	fuse.setCollection(data)
	count.value = total_count

}

load()

function addWord() {
	directus.items('words').createOne({
		letters: search.value,
		stress: stress.value
	}).then((entry) => {
		console.log(entry)
		search.value = ''
		router.push(`/words/${entry.id}`)
	}).catch(e => {
		console.warn(e)
	})
}

</script>

<template lang='pug'>
.flex.flex-col.gap-4.py-4
	input.p-4.text-xl(v-model="search" placeholder="Начните вводить слово")
	.p-4(v-if="!search") Всего слов в словаре: {{count}}
	.p-4(v-if="search && auth.ed") Укажите ударение
		input(v-model="stress" type="number")
		button(@click="addWord()") Добавить


	.flex.flex-col.gap-4()
		transition-group(name="fade")
			template(v-if="results")
				WordCard(
					v-for="word in results" 
					:key="word.item.id"
					v-bind="word.item"
					)
			template(v-if="!search")
				WordCard(
					v-for="word in words" 
					:key="word.id"
					v-bind="word"
					)
	.flex.flex-col.p-4(v-if="search && results.length==0")
		.text-lg Слов не нашлось. Добавьте новое!
</template>