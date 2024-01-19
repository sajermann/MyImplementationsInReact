import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { createUltimatePagination } from 'react-ultimate-pagination';
import { Button } from '../Button';
import { Icons } from '../Icons';

type Props = {
	page: number;
	total: number;
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
			PAGE: e => <Button {...e} disabled={disabled} />,
			ELLIPSIS: () => <Button value="..." />,
			FIRST_PAGE_LINK: () => null,
			PREVIOUS_PAGE_LINK: () => (
				<Button
					onClick={() => onPageChange(page - 1)}
					disabled={(page || 1) === 1 || disabled}
				>
					<Icons nameIcon="arrowSingleLeft" />
				</Button>
			),
			NEXT_PAGE_LINK: () => (
				<Button
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
		/>
	);
}
