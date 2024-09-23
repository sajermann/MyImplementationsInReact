import { flexRender, Row, Table } from '@tanstack/react-table';
import { Fragment } from 'react';
import { TSelection } from '~/Types/TSelection';
import { ExpandLine } from '../ExpandLine';
import { Td } from '../Td';
import { Tr } from '../Tr';

type Props<T> = {
	table: Table<T>;
	selection?: Omit<TSelection<T>, 'disableCheckbox'>;
	rowForUpdate?: { row: number; data: T } | null;
	expandLine?: {
		render: (data: Row<T>) => React.ReactNode;
	};
	enableVirtualization?: boolean;
};
export function RowsWithoutVirtualization<T>({
	table,
	rowForUpdate,
	expandLine,
	selection,
	enableVirtualization,
}: Props<T>) {
	if (enableVirtualization) return null;
	return (
		<>
			{table.getRowModel().rows.map(row => (
				<Fragment key={row.id}>
					<Tr row={row} selection={selection} expandLine={expandLine}>
						{row.getVisibleCells().map(cell => (
							<Td
								key={cell.id}
								{...{
									style: {
										textAlign: cell.column.columnDef.meta?.align,
									},
								}}
								title={cell.getContext().getValue() as string}
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
			))}
		</>
	);
}
