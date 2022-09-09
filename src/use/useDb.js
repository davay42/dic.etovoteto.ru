import { Directus } from '@directus/sdk';

export const directus = new Directus('https://api.etovoteto.ru');

export function useWordDefs(defs) {
	const definitions = reactive([]);

	async function load() {
		if (!defs) return
		for (let id of defs) {

			let link = await directus
				.items('links')
				.readOne(id)

			let def = await directus
				.items('definitions')
				.readOne(link.def)

			definitions.push(def)
		}
	}

	load()

	return definitions
}

export function countItems(type = 'words', field = 'letters') {
	const count = ref(0)

	async function load() {
		const { data } = await directus.items(type).readByQuery({ aggregate: { count: field } })
		count.value = data?.[0]?.count?.[field]
	}
	load()

	return {
		load, count
	}
}



export function useWord(id) {
	const word = ref()

	async function load() {
		const data = await directus
			.items('words')
			.readOne(id);
		word.value = data
	}

	load()
	return { word, load }
}


export function useAuthor(id) {
	const user = ref()
	async function load() {
		user.value = await directus.items('directus_users').readOne(id)
	}
	load()
	return {
		user, load
	}
}

export const messages = {
	justNow: 'только что',
	past: n => n.match(/\d/) ? `${n} назад` : n,
	future: n => n.match(/\d/) ? `через ${n}` : n,
	month: (n, past) => n === 1
		? past
			? 'месяц назад'
			: 'в сл. месяце'
		: `${n} мес.${n > 1 ? '' : ''}`,
	year: (n, past) => n === 1
		? past
			? 'в прошлом году'
			: 'в сл. году'
		: `${n} г.${n > 1 ? '' : ''}`,
	day: (n, past) => n === 1
		? past
			? 'вчера'
			: 'завтра'
		: `${n} дн.${n > 1 ? '' : ''}`,
	week: (n, past) => n === 1
		? past
			? 'на прошлой неделе'
			: 'на сл. неделе'
		: `${n} нед.${n > 1 ? '' : ''}`,
	hour: n => `${n} ч.${n > 1 ? '' : ''}`,
	minute: n => `${n} мин.${n > 1 ? '' : ''}`,
	second: n => `${n} сек.${n > 1 ? '' : ''}`,
}

