import { OnChangeFn, Row, RowSelectionState } from '@tanstack/react-table';

export type TSelection<T> = {
	type: 'multi' | 'single';
	rowSelection: { [index: number]: boolean };
	setRowSelection: OnChangeFn<RowSelectionState>;
	disableSelectionRow?: (data: Row<T>) => boolean;
	disableCheckbox?: boolean;
	singleRadio?: true;
};
