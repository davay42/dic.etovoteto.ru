<script setup>
import { directus } from '~/use/useDb';


const props = defineProps({
	uid: { type: String, default: '' }
})

const def = ref()

async function load() {
	const data = await directus
		.items('definitions')
		.readOne(props.uid);
	def.value = data;
	def.value.author = await directus.items('directus_users').readOne(data?.user_created, { fields: ['id', 'first_name', 'last_name', 'avatar'] })
}

load()


</script>

<template lang='pug'>
.flex.flex-col.gap-2(v-if="def") 
	.text-2xl {{def.text}}
	pre.text-xs {{def}}
</template>