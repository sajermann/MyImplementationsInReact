/* eslint-disable import/no-duplicates */
import { useDatePicker } from '@rehookify/datepicker';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { memo, useState } from 'react';

import { Button } from '~/Components/Button';
import { useTranslation } from '~/Hooks/UseTranslation';

import { TDisabled, TSelectOptions } from '~/Types/TCalendarPick';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { useDatepickerMega } from '../../hooks';
import { getDayClassName, onChangeDatepicker } from '../../utils';
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
	const { translate } = useTranslation();
	const {
		date,
		setDate,
		onChange,
		inputDayRef,
		inputMonthRef,
		inputYearRef,
		setIsOpenCalendar,
		rootRef,
	} = useDatepickerMega();
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
		selectedDates: date?.date ? [date.date] : [],
		onDatesChange: dates => {
			onChangeDatepicker({
				dates,
				setDate,
				onChange,
				dayRef: inputDayRef,
				monthRef: inputMonthRef,
				yearRef: inputYearRef,
			});
			setIsOpenCalendar(false);
		},

		calendar: {
			startDay: 0,
		},
		exclude: {
			date: [new Date(2024, 10, 19)],
		},
	});
	console.log(rootRef.current?.getBoundingClientRect());
	const { month, year, days } = calendars[0];

	return (
		<section
			className={managerClassNames([{ 'flex flex-col gap-2 min-w-48': true }])}
			style={{
				width: rootRef.current?.getBoundingClientRect().width
					? rootRef.current.getBoundingClientRect().width - 10
					: undefined,
			}}
		>
			<header className="flex items-center">
				<Button
					iconButton="rounded"
					variant="option"
					colorStyle="mono"
					{...subtractOffset({ months: 1 })}
				>
					<ChevronLeft />
				</Button>
				<p className="text-center text-sm flex-1">
					{month} {year}
				</p>
				<Button
					iconButton="rounded"
					variant="option"
					colorStyle="mono"
					{...addOffset({ months: 1 })}
				>
					<ChevronRight />
				</Button>
			</header>
			<main className=" items-center h-8 grid grid-cols-7">
				{weekDays.map(d => (
					<div key={d} className="text-xs text-center">
						{d}
					</div>
				))}
			</main>
			<main className=" items-center grid grid-cols-7">
				{days.map(d => (
					<button
						type="button"
						key={d.$date.toString()}
						className={getDayClassName(
							'h-6 flex justify-center items-center hover:bg-slate-300 rounded text-xs',
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
