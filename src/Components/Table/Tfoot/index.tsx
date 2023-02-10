import { flexRender, Table } from '@tanstack/react-table';

type Props = {
	table: Table<any>;
};

export function Tfoot({ table }: Props) {
	return (
		<tfoot>
			{table.getFooterGroups().map(footerGroup => (
				<tr key={footerGroup.id}>
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
