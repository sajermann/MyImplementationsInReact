import { Fragment, RefObject } from 'react';
import {
	Table,
	flexRender,
	ColumnDef,
	OnChangeFn,
	RowSelectionState,
	Row,
} from '@tanstack/react-table';
import { useVirtualizer as useVirtual } from '@tanstack/react-virtual';

import { useDarkModeZustand } from '~/Store/UseDarkMode';
import { useTranslation } from '~/Hooks/UseTranslation';
import { LoadingBar } from '~/Components/LoadingBar';
import { log } from '~/Utils/Log';
import { Td } from '../Td';

import styles from './index.module.css';

type Props<T> = {
	table: Table<T>;
	tableContainerRef: RefObject<HTMLDivElement>;
	data: T[];
	isLoading?: boolean;
	columns: ColumnDef<T>[];
	selection?: {
		type: 'multi' | 'single';
		rowSelection: { [index: number]: boolean };
		setRowSelection: OnChangeFn<RowSelectionState>;
		disableSelectionRow?: (data: Row<T>) => boolean;
	};
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
	const { translate } = useTranslation();
	const { darkMode } = useDarkModeZustand();
	const { rows } = table.getRowModel();

	const rowVirtualizer = useVirtual({
		getScrollElement: () => tableContainerRef.current,
		count: rows.length,
		estimateSize: () => 50,
	});
	const { getVirtualItems, getTotalSize } = rowVirtualizer;

	const paddingTop =
		getVirtualItems().length > 0 ? getVirtualItems()?.[0]?.start || 0 : 0;
	const paddingBottom =
		getVirtualItems().length > 0
			? getTotalSize() -
			  (getVirtualItems()?.[getVirtualItems().length - 1]?.end || 0) +
			  13
			: 0 + 13;

	function countColSpan() {
		let count = Object.keys(columns).length;
		if (selection) {
			count += 1;
		}
		if (expandLine) {
			count += 1;
		}
		return count;
	}

	function verifyClassesRow(row: Row<T>, index: number) {
		const classesTemp = [styles.tr];

		if (index % 2 > 0) {
			classesTemp.push(!darkMode ? styles.even : '!bg-dark-500');
		}
		if (selection) {
			try {
				if (row.getIsSelected()) {
					classesTemp.push(styles.isSelected);
				}
			} catch (e) {
				log.error('Catch selection verifyIsSelected', e);
			}
		}
		if (expandLine) {
			try {
				if (row.getIsExpanded()) {
					classesTemp.push(styles.isExpanded);
				}
			} catch (e) {
				log.error('Catch expandLine verifyIsSelected', e);
			}
		}

		return classesTemp.join(' ');
	}

	function buildExpandLine(row: Row<T>) {
		if (!row.getIsExpanded()) return null;
		return (
			<tr className={styles.isExpandedChild}>
				{/* 2nd row is a custom 1 cell row */}
				<td colSpan={row.getVisibleCells().length}>
					{expandLine?.render(row)}
				</td>
			</tr>
		);
	}

	function buildNoData() {
		if ((getVirtualItems().length === 0 || data.length === 0) && !isLoading) {
			return (
				<tr className={styles.tr}>
					<Td
						{...{
							colSpan: countColSpan(),
							style: { textAlign: 'center' },
						}}
					>
						{translate('NO_DATA')}
					</Td>
				</tr>
			);
		}
		return null;
	}

	function buildLoading() {
		if (isLoading) {
			return (
				<>
					<tr style={{ height: '100%' }} className={styles.tr}>
						<td
							colSpan={countColSpan()}
							className={styles.td}
							style={{ textAlign: 'center', padding: 0 }}
						>
							<LoadingBar />
						</td>
					</tr>
					{data.length === 0 && (
						<tr className={styles.tr}>
							<Td
								{...{
									colSpan: countColSpan(),
									style: { textAlign: 'center' },
								}}
							>
								{translate('LOADING...')}
							</Td>
						</tr>
					)}
				</>
			);
		}
		return null;
	}

	function buildRowsNoVirtualization() {
		return table.getRowModel().rows.map(row => (
			<Fragment key={row.id}>
				<tr
					className={verifyClassesRow(row, row.index)}
					onClick={() => {
						if (!selection) {
							return;
						}
						if (selection?.disableSelectionRow) {
							const result = selection.disableSelectionRow(row);
							if (!result) {
								row.toggleSelected();
							}
						} else {
							row.toggleSelected();
						}
					}}
				>
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
				</tr>

				{buildExpandLine(row)}
			</Fragment>
		));
	}

	return (
		<tbody style={{ opacity: isLoading ? 0.5 : 1 }} className={styles.tbody}>
			{buildNoData()}
			{buildLoading()}
			{disabledVirtualization ? (
				buildRowsNoVirtualization()
			) : (
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
								<tr
									key={row.id}
									className={verifyClassesRow(row, virtualRow.index)}
									onClick={() => {
										if (!selection) {
											return;
										}
										if (selection?.disableSelectionRow) {
											const result = selection.disableSelectionRow(row);
											if (!result) {
												row.toggleSelected();
											}
										} else {
											row.toggleSelected();
										}
									}}
								>
									{row.getVisibleCells().map(cell => (
										<Td
											{...{
												className: styles.td,
												style: {
													// @ts-expect-error align exists
													textAlign: cell.column.columnDef.align,
													borderRight: cell.column.getIsResizing()
														? '0.1px solid'
														: 'none',
												},
											}}
											title={cell.getContext().getValue() as string}
											key={cell.id}
										>
											{rowForUpdate?.row === cell.row.index &&
											// @ts-expect-error align cellEdit
											cell.column.columnDef.cellEdit
												? // @ts-expect-error align cellEdit
												  cell.column.columnDef.cellEdit(cell.row)
												: flexRender(
														cell.column.columnDef.cell,
														cell.getContext()
												  )}
										</Td>
									))}
								</tr>

								{buildExpandLine(row)}
							</Fragment>
						);
					})}
					{paddingBottom > 0 && (
						<tr>
							<td style={{ height: `${paddingBottom}px` }} />
						</tr>
					)}
				</>
			)}
		</tbody>
	);
}
