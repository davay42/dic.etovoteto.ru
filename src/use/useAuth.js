import { directus } from "./useDb"

export const auth = reactive({
	ed: false,
	invalid: null,
	me: {}
})

export function useAuth() {

	const credentials = reactive({
		email: '',
		password: ''
	})


	async function enter() {
		await directus.auth.login(credentials).then(async (user) => {
			auth.me = await directus.users.me.read();
			auth.token = user.access_token
			auth.till = Date.now() + user.expires
			auth.ed = true
			auth.invalid = false
		}).catch(() => auth.invalid = true)
	}

	async function refresh() {
		await directus.auth
			.refresh()
			.then(() => {
				auth.ed = true;
			})
			.catch(() => console.warn("couldn't refresh"));
	}



	return { auth, credentials, enter, refresh }
}