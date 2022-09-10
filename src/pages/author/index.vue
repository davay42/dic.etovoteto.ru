<script setup>
import { useAuth } from '~/use/useAuth';

const { credentials, auth, enter } = useAuth()
</script>

<template lang='pug'>
.flex.flex-col
	.flex.flex-col.gap-4(v-if="!auth.ed")
		input.p-2.rounded(v-model="credentials.email" type="email")
		input.p-2.rounded(v-model="credentials.password" type="password")
		button.p-2.shadow-lg.rounded-xl(@click="enter()") Войти
	AuthorPage(v-bind="auth.me" v-if="auth.me") 
</template>