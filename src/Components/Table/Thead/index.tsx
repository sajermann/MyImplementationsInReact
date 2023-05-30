/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Table, flexRender } from '@tanstack/react-table';
import { useDarkModeZustand } from '~/Store/UseDarkMode';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import styles from './index.module.css';

type Props<T> = {
	table: Table<T>;
};

export function Thead<T>({ table }: Props<T>) {
	const { darkMode } = useDarkModeZustand();

	return (
		<thead
			className={managerClassNames({
				[styles.thead]: true,
				'!bg-dark-700': darkMode,
			})}
		>
			{table.getHeaderGroups().map(headerGroup => (
				<tr key={headerGroup.id}>
					{headerGroup.headers.map(header => (
						<th
							className={styles.th}
							key={header.id}
							colSpan={header.colSpan}
							style={{
								width: header.getSize(),
								// @ts-expect-error align exists
								textAlign: header.getContext().column.columnDef.align,
							}}
						>
							{header.isPlaceholder ? null : (
								<>
									<div className="flex justify-center items-center gap-1">
										<div
											{...{
												className: header.column.getCanSort()
													? 'cursor-pointer select-none'
													: '',
												onClick: header.column.getToggleSortingHandler(),
											}}
										>
											{flexRender(
												header.column.columnDef.header,
												header.getContext()
											)}
											{{
												asc: ' 🔼',
												desc: ' 🔽',
											}[header.column.getIsSorted() as string] ?? null}
										</div>
										{/* @ts-expect-error onResizing exists */}
										{header.getContext().column.columnDef.onResizing &&
											header
												.getContext()
												// @ts-expect-error onResizing exists
												.column.columnDef.onResizing(
													header.column.getSize(),
													header.id
												)}

										{/* Filter */}
										{header.column.getCanFilter() &&
										// @ts-expect-error filterElement exists
										header.getContext().column.columnDef.filterElement
											? header
													.getContext()
													// @ts-expect-error filterElement exists
													.column.columnDef.filterElement(
														header.getContext().column,
														table
													)
											: null}
									</div>
									{/* SizingMode */}
									{header.column.getCanResize() && (
										<div
											{...{
												onMouseDown: header.getResizeHandler(),
												onTouchStart: header.getResizeHandler(),
												className: `${styles.resizer} ${
													header.column.getIsResizing() ? styles.isResizing : ''
												}`,
											}}
										/>
									)}
								</>
							)}
						</th>
					))}
				</tr>
			))}
		</thead>
	);
}
