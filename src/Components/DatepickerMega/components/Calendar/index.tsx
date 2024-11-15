/* eslint-disable import/no-duplicates */
import { useDatePicker } from '@rehookify/datepicker';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { memo, useState } from 'react';
import { Button } from '~/Components/Button';

import { TDisabled, TSelectOptions } from '~/Types/TCalendarPick';
import { getDayClassName } from '../../utils';
// import Button from './button';

type Props = {
	year?: number;
	month?: number;
	disabled?: TDisabled;
	onPrevClick?: () => void;
	onNextClick?: () => void;
	selectOptions?: TSelectOptions;
};

const Calendar = memo((props: Props) => {
	const [selectedDates, setSelectedDates] = useState<Date[]>([]);
	const {
		data: { calendars, weekDays, formattedDates, months, years },
		propGetters: {
			dayButton,
			addOffset,
			subtractOffset,
			monthButton,
			nextYearsButton,
			previousYearsButton,
			yearButton,
		},
	} = useDatePicker({
		selectedDates,
		onDatesChange: setSelectedDates,
		calendar: {
			startDay: 0,
		},
	});
	console.log({ calendars });
	const { month, year, days } = calendars[0];

	console.log({ days });

	return (
		<section className="w-56">
			<header className="grid grid-cols-[2rem_1fr_2rem] items-center mb-2">
				<Button
					iconButton="rounded"
					variant="option"
					colorStyle="mono"
					{...subtractOffset({ months: 1 })}
				>
					<ChevronLeft />
				</Button>
				<p className="text-center text-sm">{month}</p>
				<Button
					iconButton="rounded"
					variant="option"
					colorStyle="mono"
					{...addOffset({ months: 1 })}
				>
					<ChevronRight />
				</Button>
			</header>
			<main className="mb-2 items-center h-8 grid grid-cols-7 gap-y-2">
				{' '}
				// ajuystar o centralizar
				{weekDays.map(d => (
					<p key={d} className="w-6 text-xs text-center">
						{d}
					</p>
				))}
			</main>
			<main className="mb-2 items-center grid grid-cols-7 gap-y-2">
				{days.map(d => (
					<button
						type="button"
						key={d.$date.toString()}
						className={getDayClassName(
							'h-6 flex justify-center items-center hover:bg-slate-300 rounded w-6 text-xs',
							d,
						)}
						{...dayButton(d)}
					>
						{d.day}
					</button>
				))}
			</main>
		</section>
	);
});

export default Calendar;
