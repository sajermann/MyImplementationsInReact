import { TPaginationBase } from '../../Model';

export function addBoundaryRight({
	currentPage,
	boundaryPagesRange,
	siblingPagesRange,
	totalPages,
}: TPaginationBase): number[] {
	const boundariesToReturn: number[] = [];
	if (currentPage === totalPages) {
		// console.log('Caiu aqui', { currentPage, totalPages });
		return [];
	}

	if (currentPage + siblingPagesRange > totalPages) {
		// console.log('Caiu aqui', { currentPage, siblingPagesRange, totalPages });
		return [];
	}
	// console.log('Caiu aqui', { totalPages, boundaryPagesRange });
	for (let i = totalPages - boundaryPagesRange; i < totalPages; i += 1) {
		if (i !== currentPage) {
			boundariesToReturn.push(i);
		}
	}

	return boundariesToReturn;
}
