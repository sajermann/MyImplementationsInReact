type TPropsAddBoundaryLeft = {
	currentPage: number;
	boundaryPagesRange: number;
	totalPages: number;
};

export function addBoundaryLeft({
	currentPage,
	boundaryPagesRange,
	totalPages,
}: TPropsAddBoundaryLeft): number[] {
	const boundariesToReturn: number[] = [];
	const numberToVoid = [1, currentPage, totalPages];
	if (currentPage === 1) return [];

	if (currentPage > boundaryPagesRange) {
		for (
			let i = 2;
			boundariesToReturn.length < boundaryPagesRange && i < currentPage;
			i += 1
		) {
			console.log(i, numberToVoid.includes(i));
			if (!numberToVoid.includes(i)) {
				boundariesToReturn.push(i);
			}
		}
	}
	// console.log('Returning', boundariesToReturn);
	return boundariesToReturn;
}
