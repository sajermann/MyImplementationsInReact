import { useState } from 'react';
import { getPaginationModel } from 'ultimate-pagination';

type TProps = {
	defaultCurrentPage?: number;
	totalPages: number;
	siblingPagesRange?: number;
	boundaryPagesRange?: number;
};

export function usePaginationModel({
	totalPages,
	defaultCurrentPage,
	siblingPagesRange,
	boundaryPagesRange,
}: TProps) {
	const [currentPage, setCurrentPage] = useState(defaultCurrentPage ?? 1);
	const paginationModel = getPaginationModel({
		// Required
		currentPage,
		totalPages,

		// Optional
		boundaryPagesRange,
		siblingPagesRange,
		hideEllipsis: false,
		hidePreviousAndNextPageLinks: false,
		hideFirstAndLastPageLinks: false,
	});

	function onChange(page: number) {
		if (page < 1 || page > totalPages || Number.isNaN(Number(page))) return;
		setCurrentPage(page);
	}

	return { currentPage, onChange, paginationModel };
}
