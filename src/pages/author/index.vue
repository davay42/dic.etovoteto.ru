<script setup>
import { useAuth } from '~/use/useAuth';
import { directus } from '../../use/useDb';

const { credentials, auth, enter } = useAuth()

async function create() {
	console.log('here')

	const user = await directus.users.createOne({ ...credentials, role: 'ead97bef-799e-4d1b-a0b4-35bbf2d08379' })
	console.log(user)
}
</script>

<template lang='pug'>
.flex.flex-col
	.flex.flex-col.gap-4(v-if="!auth.ed")
		input.p-2.rounded(v-model="credentials.email" type="email")
		input.p-2.rounded(v-model="credentials.password" type="password")
		button.p-2.shadow-lg.rounded-xl(@click="enter()") Войти
		button.p-2.shadow-lg.rounded-xl(@click="create()") Зарегистрироваться
	AuthorPage(v-bind="auth.me" v-if="auth.me") 
</template>