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