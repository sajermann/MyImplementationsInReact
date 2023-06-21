import { RefObject } from 'react';
import { Table, ColumnDef, Row } from '@tanstack/react-table';
import { TSelection } from '~/Types/TSelection';

import { NoData } from '../NoData';
import { IsLoading } from '../IsLoading';
import { RowsWithoutVirtualization } from '../RowsWithoutVirtualization';
import { RowsWithVirtualization } from '../RowsWithVirtualization';

type Props<T> = {
	table: Table<T>;
	tableContainerRef: RefObject<HTMLDivElement>;
	data: T[];
	isLoading?: boolean;
	columns: ColumnDef<T>[];
	selection?: Omit<TSelection<T>, 'disableCheckbox'>;
	expandLine?: {
		render: (data: Row<T>) => React.ReactNode;
	};
	rowForUpdate?: { row: number; data: T } | null;
	disabledVirtualization?: boolean;
};

export function Tbody<T>({
	table,
	tableContainerRef,
	data,
	isLoading,
	columns,
	selection,
	expandLine,
	rowForUpdate,
	disabledVirtualization,
}: Props<T>) {
	const { rows } = table.getRowModel();

	return (
		<tbody
			style={{
				opacity: isLoading ? 0.5 : 1,
			}}
		>
			<NoData
				columns={columns}
				data={data}
				isLoading={isLoading}
				expandLine={expandLine}
				selection={selection}
			/>
			<IsLoading
				columns={columns}
				data={data}
				isLoading={isLoading}
				expandLine={expandLine}
				selection={selection}
			/>
			<RowsWithoutVirtualization
				table={table}
				disabledVirtualization={disabledVirtualization}
				expandLine={expandLine}
				selection={selection}
			/>

			<RowsWithVirtualization
				tableContainerRef={tableContainerRef}
				disabledVirtualization={disabledVirtualization}
				rows={rows}
				expandLine={expandLine}
				rowForUpdate={rowForUpdate}
				selection={selection}
			/>
		</tbody>
	);
}
