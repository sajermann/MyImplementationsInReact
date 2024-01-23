import { TPaginationBase } from '../../Model';

export function getQuantityButtons({
	boundaryPagesRange,
	siblingPagesRange,
	totalPages,
}: TPaginationBase): number {
	const quantity = 1 + boundaryPagesRange * 2 + siblingPagesRange * 2 + 1 + 1;

	if (quantity < totalPages) {
		return quantity;
	}
	return totalPages;
}
