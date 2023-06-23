import { Row } from '@tanstack/react-table';
import { TSelection } from '~/Types/TSelection';

type Props<T> = {
	selection?: Omit<TSelection<T>, 'disableCheckbox'>;
	row?: Row<T>;
};
export function onClickRow<T>({ selection, row }: Props<T>) {
	if (!selection || !row) {
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
}
