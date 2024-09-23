import { Table, flexRender } from '@tanstack/react-table';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { Filter } from './Filter';
import { Resizing } from './Resizing';
import { SortIcon } from './SortIcon';

type Props<T> = {
	table: Table<T>;
	sorting?: {
		disabled?: boolean;
	};
};

export function Thead<T>({ table, sorting }: Props<T>) {
	return (
		<thead
			className={managerClassNames({
				'm-0 top-0 sticky z-[1] backdrop-blur-md h-14': true,
				'shadow-lg shadow-black/25 dark:shadow-white/25': true,
			})}
		>
			{table.getHeaderGroups().map(headerGroup => (
				<tr key={headerGroup.id}>
					{headerGroup.headers.map(header => (
						<th
							className="p-4 text-left"
							key={header.id}
							colSpan={header.colSpan}
							style={{
								width: header.getSize(),
							}}
						>
							{header.isPlaceholder ? null : (
								<>
									<div
										className={managerClassNames({
											'flex items-center gap-1': true,
											'justify-center':
												header.getContext().column.columnDef.meta?.align ===
												'center',
											'justify-end':
												header.getContext().column.columnDef.meta?.align ===
												'right',
										})}
									>
										<button
											type="button"
											className={managerClassNames({
												'flex items-center gap-2': true,
												'cursor-pointer select-none':
													header.column.getCanSort() && !sorting,
												'cursor-default outline-0 tab select-none':
													!header.column.getCanSort() || sorting?.disabled,
											})}
											tabIndex={header.column.getCanSort() ? undefined : -1}
											onClick={header.column.getToggleSortingHandler()}
										>
											{flexRender(
												header.column.columnDef.header,
												header.getContext(),
											)}
											<SortIcon header={header} />
										</button>
										<Filter header={header} table={table} />
									</div>
									<Resizing header={header} />
								</>
							)}
						</th>
					))}
				</tr>
			))}
		</thead>
	);
}
