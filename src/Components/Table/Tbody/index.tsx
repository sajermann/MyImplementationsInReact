import { RefObject } from 'react';
import { Table, ColumnDef, Row } from '@tanstack/react-table';
import { useVirtualizer as useVirtual } from '@tanstack/react-virtual';
import { TSelection } from '~/Types/TSelection';

import { NoData } from '../NoData';
import { IsLoading } from '../IsLoading';
import { BuildRowsNoVirtualization } from '../BuildRowsNoVirtualization';
import { BuildRowsVirtualization } from '../BuildRowsVirtualization';
import styles from './index.module.css';

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
	const rowVirtualizer = useVirtual({
		getScrollElement: () => tableContainerRef.current,
		count: rows.length,
		estimateSize: () => 50,
	});
	const { getVirtualItems, getTotalSize } = rowVirtualizer;

	return (
		<tbody style={{ opacity: isLoading ? 0.5 : 1 }} className={styles.tbody}>
			<NoData
				columns={columns}
				data={data}
				getVirtualItems={getVirtualItems}
				isLoading={isLoading}
				styles={styles}
				expandLine={expandLine}
				selection={selection}
			/>
			<IsLoading
				columns={columns}
				data={data}
				isLoading={isLoading}
				styles={styles}
				expandLine={expandLine}
				selection={selection}
			/>
			<BuildRowsNoVirtualization
				styles={styles}
				table={table}
				disabledVirtualization={disabledVirtualization}
				expandLine={expandLine}
				selection={selection}
			/>

			<BuildRowsVirtualization
				getTotalSize={getTotalSize}
				styles={styles}
				disabledVirtualization={disabledVirtualization}
				getVirtualItems={getVirtualItems}
				rows={rows}
				expandLine={expandLine}
				rowForUpdate={rowForUpdate}
				selection={selection}
			/>
		</tbody>
	);
}
