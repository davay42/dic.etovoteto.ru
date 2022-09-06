<script setup>

</script>

<template lang='pug'>
.flex.flex-col.items-center.font-bold.gap-4
	router-link.text-2xl.card(to="/words/") Слова
	router-link.text-2xl.card(to="/defs/") Определения
	router-link.text-2xl.card(to="/authors/") Авторы
</template>