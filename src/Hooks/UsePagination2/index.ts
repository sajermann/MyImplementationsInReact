import { useState, useEffect } from 'react';
import {
	addBoundaryLeft,
	addBoundaryRight,
	addSiblingLeft,
	addSiblingRight,
} from './Utils';
import { addEllipsis } from './Utils/AddEllipsis';
import { fill } from './Utils/Fill';
import { getQuantityButtons } from './Utils/GetQuantityButtons';
import { demoveDuplicateds } from './Utils/RemoveDuplicateds';

type TProps = {
	totalPages: number;
	siblingPagesRange?: number;
	boundaryPagesRange?: number;
};

type TConfig = {
	first: number[];
	boundaryLeft: number[];
	siblingLeft: number[];
	current: number[];
	siblingRight: number[];
	boundaryRight: number[];
	last: number[];
};

export function usePagination({
	totalPages,
	siblingPagesRange = 1,
	boundaryPagesRange = 1,
}: TProps) {
	const [currentPage, setCurrentPage] = useState(1);
	const [pages, setPages] = useState<string[]>([]);
	const [config, setConfig] = useState<TConfig>({
		first: [1],
		boundaryLeft: [],
		siblingLeft: [],
		current: [currentPage],
		siblingRight: [],
		boundaryRight: [],
		last: [totalPages],
	});

	useEffect(() => {
		let configInternal = { ...config };
		configInternal = {
			...configInternal,
			boundaryLeft: addBoundaryLeft({
				boundaryPagesRange,
				currentPage,
				totalPages,
			}),
			siblingLeft: addSiblingLeft({
				siblingPagesRange,
				currentPage,
				totalPages,
			}),
			current:
				currentPage === 1 || currentPage === totalPages ? [] : [currentPage],
			siblingRight: addSiblingRight({
				siblingPagesRange,
				boundaryPagesRange,
				currentPage,
				totalPages,
			}),
			boundaryRight: addBoundaryRight({
				boundaryPagesRange,
				siblingPagesRange,
				currentPage,
				totalPages,
			}),
		};

		setConfig({ ...configInternal });
	}, [totalPages, currentPage, siblingPagesRange, boundaryPagesRange]);

	useEffect(() => {
		const maxButton = getQuantityButtons({
			siblingPagesRange,
			boundaryPagesRange,
			totalPages,
			currentPage,
		});

		console.log({ maxButton });

		const pagesInternal: string[] = [];
		for (const item of Object.keys(config)) {
			const t = config[item as 'first'];
			for (const subItem of t) {
				pagesInternal.push(String(subItem));
			}
		}

		const nonDuplicateds = demoveDuplicateds(pagesInternal);
		const withEllipsis = addEllipsis(nonDuplicateds);
		const final = fill(withEllipsis, maxButton);

		setPages(final);
	}, [config]);

	function onChange(page: number) {
		if (page < 1 || page > totalPages || Number.isNaN(Number(page))) return;
		setCurrentPage(page);
	}

	return { currentPage, onChange, config, pages };
}
