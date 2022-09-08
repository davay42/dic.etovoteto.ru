<script setup>
import { countItems } from '~/use/useDb';

const { count } = countItems()

const { count: countDefs } = countItems('definitions', 'text')

const { count: countAuthors } = countItems('directus_users', 'first_name')

</script>

<template lang='pug'>
.flex.flex-col.items-center.font-bold.gap-4
	router-link.text-2xl.card(to="/words/") Слова {{count}}
	router-link.text-2xl.card(to="/defs/") Определения {{countDefs}}
	router-link.text-2xl.card(to="/authors/") Авторы {{countAuthors}}
</template>