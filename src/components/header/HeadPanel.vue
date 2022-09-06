<script setup>

</script>

<template lang='pug'>
header
	router-link.text-4xl.pb-2(to="/") ЭТОВОТЭТО
	.p-2.flex.gap-2
		router-link.link(to="/words/")
			.text-3xl.i-la-comment-dots
			.pb-1 Слова
		router-link.link(to="/defs/")
			.text-3xl.i-la-comment
			.pb-1 Определения
		router-link.link(to="/authors/")
			.text-3xl.i-la-users
			.pb-1 Авторы
</template>

<style lang="postcss" scoped>
header {
	@apply w-full h-40 bg-light-800 flex flex-col items-center justify-end shadow-lg;
}

.link {
	@apply flex items-center gap-1;
}
</style>