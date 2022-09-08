<script setup>
import { directus } from '~/use/useDb.js'


function useDefs() {
	const defs = ref()
	const count = ref(0)

	async function load() {
		const {
			data,
			meta: { total_count }
		} = await directus
			.items('definitions')
			.readByQuery({
				meta: 'total_count'
			});

		defs.value = data
		count.value = total_count
	}

	load()

	return {
		defs, count, load
	}
}

const { defs, count, load } = useDefs()
</script>

<template lang='pug'>
.flex.flex-col.gap-4.py-4
	.flex.flex-col.gap-4
		DefCard(
			v-for="def in defs" :key="def.id"
			v-bind="def"
			) 
</template>