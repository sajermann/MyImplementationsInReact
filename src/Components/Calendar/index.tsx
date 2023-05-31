/* eslint-disable import/no-duplicates */
import {
	format,
	startOfMonth,
	endOfMonth,
	eachDayOfInterval,
	startOfWeek,
	endOfWeek,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import setDefaultOptions from 'date-fns/setDefaultOptions';
import { memo, useState } from 'react';
import { useTranslation } from '~/Hooks/UseTranslation';

import {
	TDisabled,
	TSelectionByRange,
	TSelectOptions,
} from '~/Types/TCalendarPick';
import { calendar } from '~/Utils/CalendarPicker';

import { Thead } from './Thead';

type Props = {
	year: number;
	month: number;
	disabled?: TDisabled;
	onPrevClick: () => void;
	onNextClick: () => void;
	selectOptions: TSelectOptions;
};

export const Calendar = memo(
	({
		year,
		month,
		disabled,
		onPrevClick,
		onNextClick,
		selectOptions,
	}: Props) => {
		const [selectionByRange, setSelectionByRange] = useState<TSelectionByRange>(
			{
				start: null,
				end: null,
			}
		);
		const [semiSelecteds, setSemiSelecteds] = useState<Date[]>([]);
		const { currentLanguage } = useTranslation();
		setDefaultOptions({
			locale: currentLanguage === 'pt-BR' ? ptBR : undefined,
		});
		const { startDate, endDate, weeks } = calendar.generateConfig({
			year,
			month,
		});
		// const startDate = startOfMonth(new Date(year, month - 1));
		// const endDate = endOfMonth(startDate);
		// const startWeek = startOfWeek(startDate, { weekStartsOn: 0 });
		// const endWeek = endOfWeek(endDate, { weekStartsOn: 0 });
		// const days = eachDayOfInterval({ start: startWeek, end: endWeek });

		// const weeks: Array<Date[]> = [];
		// for (let i = 0; i < days.length; i += 7) {
		// 	weeks.push(days.slice(i, i + 7));
		// }

		return (
			<div>
				<table>
					<Thead
						onNextClick={onNextClick}
						onPrevClick={onPrevClick}
						selectOptions={selectOptions}
						startDate={startDate}
						weeks={weeks}
						disabled={disabled}
					/>
					<tbody>
						{weeks.map(week => (
							<tr key={week[0].toISOString()}>
								{week.map(date => (
									<td
										key={date.toISOString()}
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
											onClick={() => {
												if (selectOptions.multi?.enableRangeSelection) {
													setSelectionByRange(prev =>
														calendar.fixSelectionByRange({
															date,
															onSemiSelectedsChange: setSemiSelecteds,
															selectionByRange: prev,
															selectOptions,
															startDate,
															disabled,
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
			</div>
		);
	}
);
