import { RefObject } from 'react';
import { Table, ColumnDef, Row } from '@tanstack/react-table';
import { TSelection } from '~/Types/TSelection';

import { managerClassNames } from '~/Utils/ManagerClassNames';
import { useDarkModeZustand } from '~/Store/UseDarkMode';
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
	enableVirtualization?: boolean;
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
	enableVirtualization,
}: Props<T>) {
	const { rows } = table.getRowModel();
	const { darkMode } = useDarkModeZustand();

	return (
		<tbody
			className={managerClassNames({
				'[&>*:nth-child(odd)]:bg-dark-500': darkMode,
				'[&>*:nth-child(odd)]:bg-[#f2f2f2]': !darkMode,
			})}
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
				enableVirtualization={enableVirtualization}
				expandLine={expandLine}
				rowForUpdate={rowForUpdate}
				selection={selection}
			/>

			<RowsWithVirtualization
				tableContainerRef={tableContainerRef}
				enableVirtualization={enableVirtualization}
				rows={rows}
				expandLine={expandLine}
				rowForUpdate={rowForUpdate}
				selection={selection}
			/>
		</tbody>
	);
}
