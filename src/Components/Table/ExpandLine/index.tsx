import { Row } from '@tanstack/react-table';

type Props<T> = {
	styles: CSSModuleClasses;
	row: Row<T>;
	expandLine?: {
		render: (data: Row<T>) => React.ReactNode;
	};
};
export function ExpandLine<T>({ row, styles, expandLine }: Props<T>) {
	if (!row.getIsExpanded()) return null;
	return (
		<tr className={styles.isExpandedChild}>
			{/* 2nd row is a custom 1 cell row */}
			<td colSpan={row.getVisibleCells().length}>{expandLine?.render(row)}</td>
		</tr>
	);
}
