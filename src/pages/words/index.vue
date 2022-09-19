<script setup>
import { directus } from '~/use/useDb.js'
import Fuse from 'fuse.js'
import { useRouter } from 'vue-router';
import { useAuth } from '~/use/useAuth';
import { vowelMask, vowels } from '~/use/useDictionary';
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
	let stressOk = vowels.includes(search.value[stress.value])
	if (!stressOk) return
	directus.items('words').createOne({
		letters: search.value,
		stress: stress.value
	}).then((entry) => {
		load()
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
	.flex.flex-col.gap-2(v-if="search && auth.ed") Укажите ударение
		.flex.flex-wrap.gap-2
			.p-1.rounded.uppercase.select-none(v-for="(letter,l) in search.split('')" :key="letter" :class="{vowel: vowelMask.test(letter) }" @click="stress = l; addWord()") {{letter}}

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
	.flex.flex-col.p-4(v-if="search && !auth.ed && results.length==0")
		.text-lg Слов не нашлось. Добавьте новое!
	router-link.p-2.rounded-xl.bg-light-600.shadow-xl.font-bold.p-4(v-if="search && !auth.ed" to="/author/") Представьтесь
</template>

<style scoped>
.vowel {
	--at-apply: cursor-pointer shadow-lg bg-light-600 font-bold;
}
</style>