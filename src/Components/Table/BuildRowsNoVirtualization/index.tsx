import { flexRender, Row, Table } from '@tanstack/react-table';
import { Fragment } from 'react';
import { useDarkModeZustand } from '~/Store/UseDarkMode';
import { TSelection } from '~/Types/TSelection';
import { tableUtils } from '~/Utils/Table';
import { ExpandLine } from '../ExpandLine';
import { Td } from '../Td';

type Props<T> = {
	table: Table<T>;
	selection?: Omit<TSelection<T>, 'disableCheckbox'>;
	styles: CSSModuleClasses;
	expandLine?: {
		render: (data: Row<T>) => React.ReactNode;
	};
	disabledVirtualization?: boolean;
};
export function BuildRowsNoVirtualization<T>({
	table,
	styles,

	expandLine,
	selection,
	disabledVirtualization,
}: Props<T>) {
	const { darkMode } = useDarkModeZustand();
	if (!disabledVirtualization) return null;
	return (
		<>
			{table.getRowModel().rows.map(row => (
				<Fragment key={row.id}>
					<tr
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
					<ExpandLine row={row} styles={styles} expandLine={expandLine} />
				</Fragment>
			))}
		</>
	);
}
