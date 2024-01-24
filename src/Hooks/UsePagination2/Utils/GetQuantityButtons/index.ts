import { TPaginationBase } from '../../Model';

export function getQuantityButtons({
	boundaryPagesRange,
	siblingPagesRange,
	totalPages,
}: TPaginationBase): number {
	const quantity =
		1 + // First
		1 + // Ellipsis Left
		boundaryPagesRange * 2 + // * 2 = Boundary Left and Right
		1 + // Current Page
		siblingPagesRange * 2 + // * 2 = Sibling Left and Right
		1 + // Ellipsis Right
		1; // Last Page

	if (quantity < totalPages) {
		return quantity;
	}
	return totalPages;
}
