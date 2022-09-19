export const vowels = 'аеёиоуыэюяАЕЁИОУЫЭЮЯ'
export const stressMark = '&#x301;'
export const vowelMask = /^[аеёиоуыэюяАЕЁИОУЫЭЮЯ]+$/
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

