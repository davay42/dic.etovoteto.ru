<script setup>
import { directus } from '~/use/useDb';
import DefCard from '../../components/DefCard.vue';


const props = defineProps({
	uid: { type: String, default: '' }
})

const def = ref()

async function load() {
	const data = await directus
		.items('definitions')
		.readOne(props.uid);
	def.value = data
}

load()
</script>

<template lang='pug'>
.p-2 
	DefCard(v-bind="def" v-if="def")
</template>