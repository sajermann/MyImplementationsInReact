type TPropsAddSiblingLeft = {
	currentPage: number;
	siblingPagesRange: number;
	totalPages: number;
};
export function addSiblingLeft({
	currentPage,
	siblingPagesRange,
}: TPropsAddSiblingLeft): number[] {
	const siblingsToReturn: number[] = [];

	if (currentPage === 1) {
		return [];
	}
	if (currentPage - siblingPagesRange <= siblingPagesRange) {
		return [];
	}

	if (currentPage > siblingPagesRange) {
		for (
			let i = currentPage - siblingPagesRange;
			siblingsToReturn.length < siblingPagesRange;
			i += 1
		) {
			siblingsToReturn.push(i);
		}
	}

	return siblingsToReturn;
}
