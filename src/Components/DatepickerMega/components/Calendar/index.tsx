/* eslint-disable import/no-duplicates */
import { useDatePicker } from '@rehookify/datepicker';
import { memo } from 'react';

import { TDisabled, TSelectOptions } from '~/Types/TCalendarPick';

type Props = {
	year?: number;
	month?: number;
	disabled?: TDisabled;
	onPrevClick?: () => void;
	onNextClick?: () => void;
	selectOptions?: TSelectOptions;
};

const Calendar = memo((props: Props) => {
	const { date, propGetters } = useDatePicker({
		onDatesChange: console.log,
		selectedDates: [],
	});
	console.log({ date, propGetters });

	return <div>Bruno</div>;
});

export default Calendar;
