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
import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from '~/Hooks/UseTranslation';
import { calendar } from '~/Utils/Calendar';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { Button } from '../Button';

type Props = {
	year: number;
	month: number;
	disabledDates?: Date[];
	selectedDates: Date[];
	disabledDatesBefore?: Date;
	disabledDatesAfter?: Date;
	setSelectedDates: Dispatch<SetStateAction<Date[]>>;
	onPrevClick: () => void;
	onNextClick: () => void;
};

export function Calendar({
	year,
	month,
	disabledDates,
	onPrevClick,
	onNextClick,
	selectedDates,
	setSelectedDates,
	disabledDatesBefore,
	disabledDatesAfter,
}: Props) {
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
								{
									'bg-primary-500': calendar.allDatesIsSelectedsByDayOfWeek({
										dayOfWeek: i,
										startDate,
										weeks,
										disabledDates,
										selectedDates,
									}),
								},
							])}
						>
							<button
								type="button"
								className="font-bold p-4"
								onClick={() =>
									calendar.handleToggleWeekly({
										dayOfWeek: i,
										setSelectedDates,
										startDate,
										weeks,
										disabledDates,
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
											startDate,
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
	);
}
