import { DetailedHTMLProps, HTMLAttributes } from 'react';
import {
	createUltimatePagination,
	PaginationComponentProps,
} from 'react-ultimate-pagination';
import { Button } from '../Button';
import { Icons } from '../Icons';

type Props = {
	page: number;
	total: number;
	siblingPagesRange?: number;
	boundaryPagesRange?: number;
	onPageChange: (data: number) => void;
	disabled?: boolean;
	hide?: boolean;
};

export function Pagination({
	page,
	total,
	onPageChange,
	disabled,
	hide,
	siblingPagesRange,
	boundaryPagesRange,
}: Props) {
	const PaginatedPage = createUltimatePagination({
		WrapperComponent: ({
			...rest
		}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
			<div
				className="w-full flex items-center justify-center gap-4"
				{...rest}
			/>
		),
		itemTypeToComponent: {
			PAGE: ({ value, ...rest }: PaginationComponentProps) => (
				<Button className="w-20" {...rest} disabled={disabled}>
					{value}
				</Button>
			),
			ELLIPSIS: () => (
				<Button className="w-20 hover:cursor-default hover:opacity-100">
					...
				</Button>
			),
			FIRST_PAGE_LINK: () => null,
			PREVIOUS_PAGE_LINK: () => (
				<Button
					className="w-20"
					onClick={() => onPageChange(page - 1)}
					disabled={(page || 1) === 1 || disabled}
				>
					<Icons nameIcon="arrowSingleLeft" />
				</Button>
			),
			NEXT_PAGE_LINK: () => (
				<Button
					className="w-20"
					onClick={() => onPageChange(page + 1)}
					disabled={(page || 1) === total || disabled}
				>
					<Icons nameIcon="arrowSingleRight" />
				</Button>
			),
			LAST_PAGE_LINK: () => null,
		},
	});

	if (hide) return null;
	return (
		<PaginatedPage
			totalPages={total || 1}
			currentPage={page || 1}
			onChange={onPageChange}
			siblingPagesRange={siblingPagesRange}
			boundaryPagesRange={boundaryPagesRange}
		/>
	);
}
