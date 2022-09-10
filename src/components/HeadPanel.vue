<script setup>

</script>

<template lang='pug'>
header
	router-link.text-4xl(to="/") ЭТОВОТЭТО
	.p-2.flex.gap-4
		router-link.link(to="/words/" v-tooltip.bottom="'Слова'")
			.text-3xl.i-la-comment-dots
		router-link.link(to="/defs/" v-tooltip.bottom="'Определения'")
			.text-3xl.i-la-comment
		router-link.link(to="/authors/" v-tooltip.bottom="'Авторы'")
			.text-3xl.i-la-users
		router-link.link(to="/author/" v-tooltip.bottom="'Автор'")
			.text-3xl.i-la-user
	button.absolute.top-2.right-2(v-tooltip.bottom="'Словарь'")
		.text-3xl.i-la-book
</template>

<style lang="postcss" scoped>
header {
	@apply w-full h-40 bg-light-800 flex flex-col items-center justify-end shadow-lg gap-2 relative;
}

.link {
	@apply flex items-center gap-1;
}
</style>