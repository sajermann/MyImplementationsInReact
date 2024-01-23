export function fill(dataToFill: string[], quantityButtons: number): string[] {
	if (quantityButtons < dataToFill.length) return dataToFill;
	const final: string[] = [];
	const quantoFalta =
		quantityButtons -
		dataToFill.length +
		dataToFill.filter(item => item === '...').length;

	console.log({ dataToFill, quantoFalta });

	for (const [index, item] of dataToFill.entries()) {
		console.log(Number(dataToFill[index - 1]));
		if (item === '...') {
			for (
				let i = Number(dataToFill[index - 1]) + 1;
				i <= quantoFalta + Number(dataToFill[index - 1]) + 1;
				i += 1
			) {
				console.log('Add', i);
				final.push(String(i));
			}
			console.log({ item });
			final.push(String(item));
		} else {
			console.log({ item });
			final.push(item);
		}
	}
	console.log({ final });
	return final;
}
