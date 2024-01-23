export function addEllipsis(dataToInsert: string[]): string[] {
	const formatted: string[] = [];
	for (const [index, value] of dataToInsert.entries()) {
		if (index === 0 || index + 1 === dataToInsert.length) {
			formatted.push(value);
			// eslint-disable-next-line no-continue
			continue;
		}
		if (Number(value) + 1 === Number(dataToInsert[index + 1])) {
			formatted.push(value);
		} else {
			formatted.push(value);
			formatted.push('...');
		}
	}

	return formatted;
}
