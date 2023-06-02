import { ColumnDef, Row } from '@tanstack/react-table';
import { TSelection } from '~/Types/TSelection';

type Props<T> = {
	selection?: Omit<TSelection<T>, 'disableCheckbox'>;
	expandLine?: {
		render: (data: Row<T>) => React.ReactNode;
	};
	columns: ColumnDef<T>[];
};

export function countColSpan<T>({ selection, expandLine, columns }: Props<T>) {
	let count = Object.keys(columns).length;
	if (selection) {
		count += 1;
	}
	if (expandLine) {
		count += 1;
	}
	return count;
}
