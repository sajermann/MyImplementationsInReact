import { useState, useEffect } from 'react';

type TProps = {
	totalPages: number;
	siblingPagesRange?: number;
	boundaryPagesRange?: number;
};

export function usePagination({
	totalPages,
	siblingPagesRange = 1,
	boundaryPagesRange = 1,
}: TProps) {
	const [currentPage, setCurrentPage] = useState(1);
	const [pageNumbers, setPageNumbers] = useState<number[]>([]);

	useEffect(() => {
		const totalNumbers = siblingPagesRange * 2 + boundaryPagesRange * 2 + 3;
		const totalBlocks = totalNumbers + 2;

		if (totalPages > totalBlocks) {
			const pages = [];

			const leftBound = currentPage - siblingPagesRange;
			const rightBound = currentPage + siblingPagesRange;
			const beforeLastPage = totalPages - 1;

			const startPage = 1;
			const endPage = totalPages;

			for (let i = 1; i <= totalPages; i++) {
				if (
					i === startPage ||
					i === endPage ||
					(i >= leftBound && i <= rightBound)
				) {
					pages.push(i);
				}
			}

			setPageNumbers(pages);
		} else {
			setPageNumbers([...Array(totalPages).keys()].map(i => i + 1));
		}
	}, [totalPages, currentPage, siblingPagesRange, boundaryPagesRange]);

	function onChange(page) {
		setCurrentPage(page);
	}

	return { currentPage, onChange, pageNumbers };
}
