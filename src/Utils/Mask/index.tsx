function currency(
	value: number,
	language: string,
	maximumSignificantDigits?: number
): string {
	const currencyStyle = {
		'pt-BR': 'BRL',
		en: 'USD',
	};

	return new Intl.NumberFormat(language, {
		style: 'currency',
		currency: currencyStyle[language as 'pt-BR' | 'en'],
		maximumSignificantDigits,
	}).format(value);
}

export const mask = { currency };
