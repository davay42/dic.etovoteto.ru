<script setup>
import { directus } from '~/use/useDb.js'

const authors = ref()
const count = ref(0)

async function load() {
	const {
		data,
		meta: { total_count }
	} = await directus
		.items('directus_users')
		.readByQuery({
			meta: 'total_count'
		});

	authors.value = data
	count.value = total_count
}

load()

</script>

<template lang='pug'>
.flex.flex-col.gap-4.py-4
	.flex.flex-col.gap-4
		router-link(v-for="author in authors" :key="author.id" :to="`/authors/${author.id}`")
			AuthorCard(v-bind="author") 
</template>