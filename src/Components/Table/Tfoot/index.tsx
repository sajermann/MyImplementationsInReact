import { flexRender, Table } from '@tanstack/react-table';
import { managerClassNames } from '~/Utils/ManagerClassNames';

type Props<T> = {
	table: Table<T>;
	showFooter?: boolean;
};

export function Tfoot<T>({ table, showFooter }: Props<T>) {
	if (!showFooter) return null;
	return (
		<tfoot
			className={managerClassNames({
				'm-0 bottom-0 sticky z-[1] backdrop-blur-md h-14': true,
				'shadow-lg shadow-black/25 dark:shadow-white/25': true,
			})}
		>
			{table.getFooterGroups().map(footerGroup => (
				<tr key={footerGroup.id}>
					{footerGroup.headers.map(header => (
						<th
							key={header.id}
							colSpan={header.colSpan}
							style={{
								textAlign: header.getContext().column.columnDef.meta?.align,
							}}
						>
							{header.isPlaceholder
								? null
								: flexRender(
										header.column.columnDef.footer,
										header.getContext(),
									)}
						</th>
					))}
				</tr>
			))}
		</tfoot>
	);
}
