export const vowels = 'аеёиоуыэюяАЕЁИОУЫЭЮЯ'
export const stressMark = '&#x301;'
export const wordMask = /^[а-яёА-ЯЁ]+$/
export const defMask = /^[а-яё А-ЯЁ 1-9"«»!?,.-]+$/

export const parts = {
	noun: {
		name: 'сущ',
		underline: 'solid',
	},
	adj: {
		name: 'прил',
		underline: 'wavy',
	},
	verb: {
		name: 'глаг',
		underline: 'double',
	},
	adv: {
		name: 'нареч',
		underline: 'dotted',
	},
}

export function renderWord(word, stress) {
	if (!word) return
	let str = word.slice(0, stress + 1) + stressMark + word.slice(stress + 1)
	return str[0].toUpperCase() + str.slice(1)
}

