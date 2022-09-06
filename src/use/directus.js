import { Directus } from '@directus/sdk';

export const directus = new Directus('https://api.etovoteto.ru');

export async function useWordDefs(defs) {
	const definitions = [];
	for (let id of defs) {
		let link = await directus
			.items('words_definitions')
			.readOne(id)
		let def = await directus
			.items('definitions')
			.readOne(link.definitions_id)
		definitions.push(def)
	}
	return definitions
}

export async function useWords() {
	const {
		data: words,
		meta: { "total_count": count }
	} = await directus
		.items('words')
		.readByQuery({ meta: 'total_count' });

	return {
		words, count
	}
}

export async function useUser(id) {

	const user = await directus.items('directus_users').readOne(id)
	return {
		user
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

