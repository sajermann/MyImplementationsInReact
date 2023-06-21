import { flexRender, Row, Table } from '@tanstack/react-table';
import { Fragment } from 'react';
import { TSelection } from '~/Types/TSelection';
import { ExpandLine } from '../ExpandLine';
import { Td } from '../Td';
import { Tr } from '../Tr';

type Props<T> = {
	table: Table<T>;
	selection?: Omit<TSelection<T>, 'disableCheckbox'>;
	expandLine?: {
		render: (data: Row<T>) => React.ReactNode;
	};
	disabledVirtualization?: boolean;
};
export function RowsWithoutVirtualization<T>({
	table,
	expandLine,
	selection,
	disabledVirtualization,
}: Props<T>) {
	if (!disabledVirtualization) return null;
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
										// @ts-expect-error align exists
										textAlign: cell.column.columnDef.align,
										borderRight: cell.column.getIsResizing()
											? '0.1px solid'
											: 'none',
									},
								}}
								title={cell.getContext().getValue() as string}
							>
								{flexRender(cell.column.columnDef.cell, cell.getContext())}
							</Td>
						))}
					</Tr>
					<ExpandLine row={row} expandLine={expandLine} />
				</Fragment>
			))}
		</>
	);
}
