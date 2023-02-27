import { flexRender, Table } from '@tanstack/react-table';

type Props<T> = {
	table: Table<T>;
	showFooter?: boolean;
};

export function Tfoot<T>({ table, showFooter }: Props<T>) {
	if (!showFooter) return null;
	return (
		<tfoot
			style={{
				margin: 0,
				position: 'sticky',
				bottom: 0,
				zIndex: 1,
			}}
			className="bg-white dark:bg-dark-700"
		>
			{table.getFooterGroups().map(footerGroup => (
				<tr
					key={footerGroup.id}
					style={{
						height: '60px',
						boxShadow: '0 -2px #000000',
					}}
				>
					{footerGroup.headers.map(header => (
						<th
							key={header.id}
							colSpan={header.colSpan}
							style={{
								// @ts-expect-error align exists
								textAlign: header.getContext().column.columnDef.align,
							}}
						>
							{header.isPlaceholder
								? null
								: flexRender(
										header.column.columnDef.footer,
										header.getContext()
								  )}
						</th>
					))}
				</tr>
			))}
		</tfoot>
	);
}
