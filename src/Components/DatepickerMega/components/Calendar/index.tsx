/* eslint-disable import/no-duplicates */
import { useDatePicker, useMonths } from '@rehookify/datepicker';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { memo, useState } from 'react';

import { Button } from '~/Components/Button';
import { useTranslation } from '~/Hooks/UseTranslation';

import { TDisabled, TSelectOptions } from '~/Types/TCalendarPick';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { useDatepickerMega } from '../../hooks';
import { getDayClassName, onChangeDatepicker } from '../../utils';
import SelectorMonthYear from '../SelectorMonthYear';
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

	const [isOpenSelectorMonthYear, setIsOpenSelectorMonthYear] = useState(false);

	const { month, year, days } = calendars[0];

	const getIndexMonth = () => {
		const result = months
			.map((item, index) => {
				if (item.active) {
					return index;
				}
				return null;
			})
			.find(item => typeof item === 'number');
		return result || 0;
	};
	console.log({ formattedDates, years });

	const changeToMonth = (monthIndex: number) => {
		const currentMonthIndex = getIndexMonth();
		const result = monthIndex - currentMonthIndex;
		console.log(`changeToMonthh`, { result, monthIndex, currentMonthIndex });
		if (result < 0) {
			subtractOffset({
				months: Number(String(result).split('-')[1]),
			})?.onClick?.({} as React.MouseEvent<HTMLElement, MouseEvent>);
		} else {
			addOffset({
				months: result,
			})?.onClick?.({} as React.MouseEvent<HTMLElement, MouseEvent>);
		}
	};

	return (
		<section
			className={managerClassNames('flex flex-col gap-2 min-w-48 border')}
			style={{
				width: rootRef.current?.getBoundingClientRect().width
					? rootRef.current.getBoundingClientRect().width - 10
					: undefined,
			}}
		>
			<header className="flex items-center border">
				<Button
					iconButton="rounded"
					variant="option"
					colorStyle="mono"
					{...subtractOffset({ months: 1 })}
				>
					<ChevronLeft />
				</Button>
				<button
					type="button"
					onClick={() => setIsOpenSelectorMonthYear(prev => !prev)}
					className="text-center text-sm flex-1"
				>
					{month} {year}
				</button>
				<Button
					iconButton="rounded"
					variant="option"
					colorStyle="mono"
					{...addOffset({ months: 1 })}
				>
					<ChevronRight />
				</Button>
			</header>
			<main className="w-full h-48 border">
				<div
					className={managerClassNames(
						'flex relative transition-opacity duration-500 border w-full',
						{
							'opacity-0': !isOpenSelectorMonthYear,
						},
					)}
				>
					<SelectorMonthYear
						months={months}
						onMonthChange={changeToMonth}
						currentMonthIndex={getIndexMonth()}
					/>
					<SelectorMonthYear
						months={months}
						onMonthChange={changeToMonth}
						show={isOpenSelectorMonthYear}
						currentMonthIndex={getIndexMonth()}
					/>
				</div>
				{/* <div
					className={managerClassNames(
						'absolute transition-opacity duration-500  border',
						{
							'opacity-0': isOpenSelectorMonthYear,
						},
					)}
				>
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
				</div> */}
			</main>
		</section>
	);
});
export default Calendar;
