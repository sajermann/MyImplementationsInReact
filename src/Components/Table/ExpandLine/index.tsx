import { Row } from '@tanstack/react-table';
import { Tr } from '../Tr';
import styles from './index.module.css';

type Props<T> = {
	row: Row<T>;
	expandLine?: {
		render: (data: Row<T>) => React.ReactNode;
	};
};
export function ExpandLine<T>({ row, expandLine }: Props<T>) {
	if (!row.getIsExpanded()) return null;
	return (
		<Tr className={styles.isExpandedChild} row={row}>
			{/* 2nd row is a custom 1 cell row */}
			<td colSpan={row.getVisibleCells().length}>{expandLine?.render(row)}</td>
		</Tr>
	);
}
