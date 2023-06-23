import { Row } from '@tanstack/react-table';

type Props<T> = {
	row: Row<T>;
};

export function Expander<T>({ row }: Props<T>) {
	return (
		<div className="w-full flex items-center justify-center">
			<button
				type="button"
				onClick={row.getToggleExpandedHandler()}
				{...{
					style: { cursor: 'pointer' },
				}}
			>
				{row.getIsExpanded() ? '✏' : '📝'}
			</button>
		</div>
	);
}
