function fillLeft(dataToFill: string[], quantityButtons: number): string[] {
	const final: string[] = [];
	const quantoFalta = quantityButtons - dataToFill.length; // 1 Ellipsis
	// console.log({ dataToFill, quantoFalta });
	console.log('fillLeft', { dataToFill, quantityButtons, quantoFalta });

	for (const [index, item] of dataToFill.entries()) {
		// console.log(Number(dataToFill[index - 1]));
		if (item === '...') {
			for (
				let i = Number(dataToFill[index - 1]) + 1;
				i <= quantoFalta + Number(dataToFill[index - 1]);
				i += 1
			) {
				console.log('Add', i);
				final.push(String(i));
			}
			// console.log({ item });
			final.push(String(item));
		} else {
			// console.log({ item });
			final.push(item);
		}
	}
	// console.log({ final });
	return final;
}

function fillRight(dataToFill: string[], quantityButtons: number): string[] {
	const final: string[] = [];
	const quantoFalta = quantityButtons - dataToFill.length; // 1 Ellipsis
	console.log('fillRight', { dataToFill, quantoFalta }, dataToFill.length);
	for (const [index, item] of dataToFill.entries()) {
		if (item === '...') {
			console.log(Number(dataToFill[index + 1]) - quantoFalta - 1);
			final.push(String(item));
			for (
				let i = Number(dataToFill[index + 1]) - quantoFalta;
				i <= Number(dataToFill[index + 1]) - 1;
				i += 1
			) {
				// console.log('Add', i);
				final.push(String(i));
			}
			// console.log({ item });
			//
		} else {
			// console.log({ item });
			final.push(item);
		}
	}
	// console.log({ final });
	return final;
}

function isBegin({
	currentPage,
	totalPages,
}: {
	currentPage: number;
	totalPages: number;
}) {
	const resultBeging = currentPage - 1;
	const resultFinal = totalPages - currentPage;

	return resultBeging < resultFinal;
}

type TProps = {
	dataToFill: string[];
	quantityButtons: number;
	currentPage: number;
	totalPages: number;
};

export function fill({
	dataToFill,
	quantityButtons,
	currentPage,
	totalPages,
}: TProps): string[] {
	// console.log({ quantityButtons }, dataToFill.length);
	const quantityEllipsis = dataToFill.filter(item => item === '...').length;
	console.log({ dataToFill });
	if (quantityEllipsis === 2) return dataToFill;
	const resultIsBegin = isBegin({ currentPage, totalPages });
	if (resultIsBegin) return fillLeft(dataToFill, quantityButtons);
	return fillRight(dataToFill, quantityButtons);

	// const final: string[] = [];
	// const quantoFalta = quantityButtons - dataToFill.length + quantityEllipsis;

	// for (const [index, item] of dataToFill.entries()) {
	// 	console.log(Number(dataToFill[index - 1]));
	// 	if (item === '...') {
	// 		for (
	// 			let i = Number(dataToFill[index - 1]) + 1;
	// 			i <= quantoFalta + Number(dataToFill[index - 1]) + 1;
	// 			i += 1
	// 		) {
	// 			console.log('Add', i);
	// 			final.push(String(i));
	// 		}
	// 		console.log({ item });
	// 		final.push(String(item));
	// 	} else {
	// 		console.log({ item });
	// 		final.push(item);
	// 	}
	// }
	// console.log({ final });
	// return final;
}
