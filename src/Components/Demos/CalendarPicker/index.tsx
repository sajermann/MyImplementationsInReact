import { addMonths } from 'date-fns';
import { useState } from 'react';
import { Calendar } from '~/Components/Calendar';

export function CalendarPickerDemo() {
	const [dateToStartCalendar, setDateToStartCalendar] = useState(new Date());
	const [selectedDatesNormal, setSelectedDatesNormal] = useState<Date[]>([]);

	return (
		<div>
			<Calendar
				selectOptions={{
					multi: {
						selectedDates: selectedDatesNormal,
						onSelectedDates: setSelectedDatesNormal,
					},
				}}
				onPrevClick={() => setDateToStartCalendar(prev => addMonths(prev, -1))}
				onNextClick={() => setDateToStartCalendar(prev => addMonths(prev, 1))}
				year={dateToStartCalendar.getFullYear()}
				month={dateToStartCalendar.getMonth() + 1}
			/>
		</div>
	);
}
