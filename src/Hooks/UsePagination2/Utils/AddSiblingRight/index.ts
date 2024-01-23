import { TPaginationBase } from '../../Model';

export function addSiblingRight({
	currentPage,
	siblingPagesRange,
	totalPages,
	boundaryPagesRange,
}: TPaginationBase): number[] {
	const siblingsToReturn: number[] = [];

	if (currentPage === totalPages) {
		// console.log('Caiu aqui', { currentPage, totalPages });
		return [];
	}

	if (currentPage + siblingPagesRange >= totalPages) {
		// console.log('Caiu aqui', { currentPage, siblingPagesRange, totalPages });
		return [];
	}

	if (
		totalPages - currentPage >
		totalPages - currentPage + siblingPagesRange + boundaryPagesRange
	) {
		// console.log('Caiu aqui', {
		// 	totalPages,
		// 	currentPage,
		// 	siblingPagesRange,
		// 	boundaryPagesRange,
		// });
		return [];
	}

	if (totalPages - (currentPage + siblingPagesRange) < siblingPagesRange) {
		console.log('Caiu aqui 35', { currentPage, siblingPagesRange });
		return [];
	}

	// console.log('Caiu aqui 39', { currentPage, siblingPagesRange });
	// if (currentPage > siblingPagesRange) {
	for (let i = currentPage + 1; i <= currentPage + siblingPagesRange; i += 1) {
		siblingsToReturn.push(i);
	}
	// }

	return siblingsToReturn;
}
