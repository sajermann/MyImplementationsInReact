/* eslint-disable jsx-a11y/control-has-associated-label */
import { flexRender, Row } from '@tanstack/react-table';
import { Fragment, RefObject } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { TSelection } from '~/Types/TSelection';
import { ExpandLine } from '../ExpandLine';
import { Td } from '../Td';
import { Tr } from '../Tr';

type Props<T> = {
	selection?: Omit<TSelection<T>, 'disableCheckbox'>;
	rows: Row<T>[];
	enableVirtualization?: boolean;
	rowForUpdate?: { row: number; data: T } | null;
	expandLine?: {
		render: (data: Row<T>) => React.ReactNode;
	};
	tableContainerRef: RefObject<HTMLDivElement>;
};
export function RowsWithVirtualization<T>({
	selection,
	rows,
	enableVirtualization,
	rowForUpdate,
	expandLine,
	tableContainerRef,
}: Props<T>) {
	const { getVirtualItems, getTotalSize } = useVirtualizer({
		count: rows.length,
		getScrollElement: () => tableContainerRef.current,
		estimateSize: () => 68,
		overscan: 10,
	});

	if (!enableVirtualization) return null;
	const paddingTop =
		getVirtualItems().length > 0 ? getVirtualItems()?.[0]?.start || 0 : 0;
	const paddingBottom =
		getVirtualItems().length > 0
			? getTotalSize() -
					(getVirtualItems()?.[getVirtualItems().length - 1]?.end || 0) || 0
			: 0;

	return (
		<>
			{paddingTop > 0 && (
				<tr>
					<td style={{ height: `${paddingTop}px` }} />
				</tr>
			)}
			{getVirtualItems().map(virtualRow => {
				const row = rows[virtualRow.index];
				return (
					<Fragment key={row.id}>
						<Tr row={row} selection={selection} expandLine={expandLine}>
							{row.getVisibleCells().map(cell => (
								<Td
									{...{
										style: {
											textAlign: cell.column.columnDef.meta?.align,
										},
									}}
									title={cell.getContext().getValue() as string}
									key={cell.id}
								>
									{rowForUpdate?.row === cell.row.index &&
									cell.column.columnDef.meta?.cellEdit
										? cell.column.columnDef.meta?.cellEdit(cell.row)
										: flexRender(cell.column.columnDef.cell, cell.getContext())}
								</Td>
							))}
						</Tr>

						<ExpandLine row={row} expandLine={expandLine} />
					</Fragment>
				);
			})}
			{paddingBottom > 0 && (
				<tr>
					<td style={{ height: `${paddingBottom}px` }} />
				</tr>
			)}
		</>
	);
}
