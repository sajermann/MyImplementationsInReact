import { stringToDate } from '@sajermann/utils/FormatDate';
import { Row } from '@tanstack/react-table';

type Props<T> = {
	row: Row<T>;
	columnId: string;
	valueFilter: {
		from: string;
		to: string;
	};
};
export function filterRangeDate<T>({ row, columnId, valueFilter }: Props<T>) {
	if (valueFilter.from === '' && valueFilter.to === '') {
		return true;
	}

	if (valueFilter.from !== '' && valueFilter.to !== '') {
		if (
			new Date(valueFilter.from) <= stringToDate(row.getValue(columnId)) &&
			new Date(valueFilter.to) >= stringToDate(row.getValue(columnId))
		) {
			return true;
		}
	}
	if (
		valueFilter.from === '' &&
		new Date(valueFilter.to) >= stringToDate(row.getValue(columnId))
	) {
		return true;
	}

	if (
		new Date(valueFilter.from) <= stringToDate(row.getValue(columnId)) &&
		valueFilter.to === ''
	) {
		return true;
	}

	return false;
}
