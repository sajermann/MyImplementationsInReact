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
	const [pageNumbers, setPageNumbers] = useState<(number | string)[]>([]);

	useEffect(() => {
		const totalNumbers = siblingPagesRange * 2 + boundaryPagesRange * 2 + 3;
		const totalBlocks = totalNumbers + 2;

		if (totalPages > totalBlocks) {
			const pages = [];

			const leftBound = currentPage - siblingPagesRange;
			const rightBound = currentPage + siblingPagesRange;

			const startPage = 1;
			const endPage = totalPages;

			let isStartEllipsisAdded = false;
			let isEndEllipsisAdded = false;

			for (let i = 1; i <= totalPages; i += 1) {
				if (
					i === startPage ||
					i === endPage ||
					(i >= leftBound && i <= rightBound)
				) {
					pages.push(i);
				} else if (i < leftBound && !isStartEllipsisAdded) {
					pages.push('...');
					isStartEllipsisAdded = true;
				} else if (i > rightBound && !isEndEllipsisAdded) {
					pages.push('...');
					isEndEllipsisAdded = true;
				}
			}

			setPageNumbers(pages);
		} else {
			setPageNumbers([...Array(totalPages).keys()].map(i => i + 1));
		}
	}, [totalPages, currentPage, siblingPagesRange, boundaryPagesRange]);

	function onChange(page: number) {
		setCurrentPage(page);
	}

	return { currentPage, onChange, pageNumbers };
}
