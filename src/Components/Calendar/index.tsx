/* eslint-disable import/no-duplicates */
/* eslint-disable react/no-array-index-key */
import {
	format,
	startOfMonth,
	endOfMonth,
	eachDayOfInterval,
	startOfWeek,
	endOfWeek,
	addDays,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import setDefaultOptions from 'date-fns/setDefaultOptions';
import { useState } from 'react';
import { useTranslation } from '~/Hooks/UseTranslation';
import {
	TDisabled,
	TSelectionByRange,
	TSelectOptions,
} from '~/Types/TCalendarPick';
import { calendar } from '~/Utils/CalendarPicker';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { Button } from '../Button';

type Props = {
	year: number;
	month: number;
	disabled?: TDisabled;
	onPrevClick: () => void;
	onNextClick: () => void;
	selectOptions: TSelectOptions;
};

export function Calendar({
	year,
	month,
	disabled,
	onPrevClick,
	onNextClick,
	selectOptions,
}: Props) {
	const [selectionByRange, setSelectionByRange] = useState<TSelectionByRange>({
		start: null,
		end: null,
	});
	const [semiSelecteds, setSemiSelecteds] = useState<Date[]>([]);

	const { currentLanguage } = useTranslation();
	setDefaultOptions({ locale: currentLanguage === 'pt-BR' ? ptBR : undefined });
	const startDate = startOfMonth(new Date(year, month - 1));
	const endDate = endOfMonth(startDate);
	const startWeek = startOfWeek(startDate, { weekStartsOn: 0 });
	const endWeek = endOfWeek(endDate, { weekStartsOn: 0 });
	const days = eachDayOfInterval({ start: startWeek, end: endWeek });
	const headers = Array.from({ length: 7 }, (_, index) => {
		const day = addDays(startOfWeek(new Date()), index);
		const dayName = format(day, 'EEEE');
		return dayName.slice(0, 3).toUpperCase();
	});

	const allDays = days;
	const weeks: Array<Date[]> = [];
	for (let i = 0; i < allDays.length; i += 7) {
		weeks.push(allDays.slice(i, i + 7));
	}

	return (
		<div>
			{JSON.stringify(selectionByRange, null, 2)}
			<table>
				<thead>
					<tr>
						<th className="flex items-center justify-center p-1">
							<Button className="rounded-full !w-10" onClick={onPrevClick}>
								{'<'}
							</Button>
						</th>
						<th colSpan={5} className="items-center justify-center p-1">
							{format(startDate, 'MMMM yyyy').toUpperCase()}
						</th>
						<th className="flex items-center justify-center p-1">
							<Button className="rounded-full !w-10" onClick={onNextClick}>
								{'>'}
							</Button>
						</th>
					</tr>
					<tr>
						{headers.map((weekDay, i) => (
							<th
								key={weekDay}
								className={managerClassNames([
									{ border: true },
									{ 'cursor-pointer': selectOptions.multi },
									{ 'cursor-auto': selectOptions.single },
									{
										'bg-primary-500': calendar.allDatesIsSelectedsByDayOfWeek({
											dayOfWeek: i,
											startDate,
											weeks,
											disabled,
											selectOptions,
										}),
									},
								])}
							>
								<button
									type="button"
									className={managerClassNames([
										{ 'font-bold p-4 transition-all duration-500': true },
										{ 'hover:text-primary-500': selectOptions.multi },
										{ 'cursor-pointer': selectOptions.multi },
										{ 'cursor-auto': selectOptions.single },
									])}
									onClick={() =>
										calendar.handleToggleHeader({
											dayOfWeek: i,
											startDate,
											weeks,
											disabled,
											selectOptions,
										})
									}
								>
									{weekDay}
								</button>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{weeks.map((week, index) => (
						<tr key={index}>
							{week.map((date, dayIndex) => (
								<td
									key={dayIndex}
									className={calendar.getClassNames({
										date,
										startDate,
										endDate,
										selectOptions,
										disabled,
										semiSelecteds,
									})}
								>
									<button
										type="button"
										className="w-full p-2 hover:bg-primary-700 transitions-all duration-500"
										onMouseEnter={() =>
											calendar.handleHoverRangeSelection({
												date,
												selectionByRange,
												setSemiSelecteds,
											})
										}
										// onClick={() =>
										// 	calendar.handleToggleSelection({
										// 		date,
										// 		startDate,
										// 		selectOptions,
										// 		disabled,
										// 	})
										// }
										onClick={() => {
											if (selectOptions.multi?.enableRangeSelection) {
												setSelectionByRange(prev =>
													calendar.fixSelectionByRange({
														date,
														onSemiSelectedsChange: setSemiSelecteds,
														selectionByRange: prev,
														selectOptions,
													})
												);
												return;
											}
											calendar.handleToggleSelection({
												date,
												startDate,
												selectOptions,
												disabled,
											});
										}}
									>
										{date ? format(date, 'd') : ''}
									</button>
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			{console.log({ semiSelecteds })}
		</div>
	);
}
