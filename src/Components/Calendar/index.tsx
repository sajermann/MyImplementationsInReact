/* eslint-disable import/no-duplicates */
/* eslint-disable react/no-array-index-key */
import {
	format,
	startOfMonth,
	endOfMonth,
	eachDayOfInterval,
	startOfWeek,
	endOfWeek,
	isSameDay,
	addDays,
	isSameMonth,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import setDefaultOptions from 'date-fns/setDefaultOptions';
import { useState } from 'react';
import { useTranslation } from '~/Hooks/UseTranslation';
import { calendar } from '~/Utils/Calendar';

type Props = { year: number; month: number; disabledDates?: Date[] };

export function Calendar({ year, month, disabledDates }: Props) {
	const { currentLanguage } = useTranslation();
	setDefaultOptions({ locale: currentLanguage === 'pt-BR' ? ptBR : undefined });
	const [selectedDates, setSelectedDates] = useState<Date[]>([]);

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

	function handleToggleWeekly(dayOfWeek: number) {
		const daysToAddOrRemove: Date[] = [];

		for (const item of weeks) {
			// Verify if is same month and if date is not disabled
			if (
				isSameMonth(item[dayOfWeek], startDate) &&
				!calendar.dateIsInArray(item[dayOfWeek], disabledDates || [])
			) {
				daysToAddOrRemove.push(item[dayOfWeek]);
			}
		}

		setSelectedDates(prev => {
			const updatedDates = [...prev];

			// Verify if all dates of week is selecteds
			const allSelected = daysToAddOrRemove.every(day =>
				updatedDates.some(date => isSameDay(date, day))
			);

			if (allSelected) {
				// Is all dates is selecteds then remove all
				updatedDates.length = 0;

				// updatedDates.splice(
				// 	updatedDates.findIndex(date =>
				// 		daysToAddOrRemove.some(day => isSameDay(date, day))
				// 	),
				// 	daysToAddOrRemove.length
				// );
			} else {
				// Caso contrário, adiciona os dias que não estão presentes
				daysToAddOrRemove.forEach(day => {
					if (!updatedDates.some(date => isSameDay(date, day))) {
						updatedDates.push(day);
					}
				});
			}

			return updatedDates;
		});
	}

	return (
		<div>
			<h2>{format(startDate, 'MMMM yyyy')}</h2>
			<div className="flex gap-2">
				<table>
					<thead>
						<tr>
							{headers.map((weekDay, i) => (
								<th key={weekDay} className="p-4">
									<button type="button" onClick={() => handleToggleWeekly(i)}>
										{weekDay}
									</button>
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{weeks.map((week, index) => (
							<tr key={index}>
								{week.map((day, dayIndex) => (
									<td
										key={dayIndex}
										className={calendar.getClassNames({
											day,
											startDate,
											endDate,
											selectedDates,
											disabledDates,
										})}
									>
										<button
											type="button"
											className="w-full p-2 hover:bg-primary-700 transitions-all duration-500"
											onClick={() =>
												calendar.handleToggleSelection({
													date: day,
													selectedDates,
													setSelectedDates,
													disabledDates,
												})
											}
										>
											{day ? format(day, 'd') : ''}
										</button>
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
				<div className="w-[220px]">
					{JSON.stringify(selectedDates, null, 2)}
				</div>
			</div>
		</div>
	);
}
