import { flexRender, Row } from '@tanstack/react-table';
import { Fragment } from 'react';
import { VirtualItem } from '@tanstack/react-virtual';
import { useDarkModeZustand } from '~/Store/UseDarkMode';
import { TSelection } from '~/Types/TSelection';
import { tableUtils } from '~/Utils/Table';
import { ExpandLine } from '../ExpandLine';
import { Td } from '../Td';

type Props<T> = {
	getTotalSize: () => number;
	styles: CSSModuleClasses;
	getVirtualItems: () => VirtualItem[];
	selection?: Omit<TSelection<T>, 'disableCheckbox'>;
	rows: Row<T>[];
	disabledVirtualization?: boolean;
	rowForUpdate?: { row: number; data: T } | null;
	expandLine?: {
		render: (data: Row<T>) => React.ReactNode;
	};
};
export function BuildRowsVirtualization<T>({
	getTotalSize,
	styles,
	getVirtualItems,
	selection,
	rows,
	disabledVirtualization,
	rowForUpdate,
	expandLine,
}: Props<T>) {
	const { darkMode } = useDarkModeZustand();
	if (disabledVirtualization) return null;

	const paddingTop =
		getVirtualItems().length > 0 ? getVirtualItems()?.[0]?.start || 0 : 0;
	const paddingBottom =
		getVirtualItems().length > 0
			? getTotalSize() -
			  (getVirtualItems()?.[getVirtualItems().length - 1]?.end || 0) +
			  13
			: 0 + 13;

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
						<tr
							key={row.id}
							className={tableUtils.verifyClassesRow({
								darkMode,
								row,
								styles,
								expandLine,
								selection,
							})}
							onClick={() => tableUtils.onClickRow({ row, selection })}
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
										: flexRender(cell.column.columnDef.cell, cell.getContext())}
								</Td>
							))}
						</tr>

						<ExpandLine row={row} styles={styles} expandLine={expandLine} />
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
