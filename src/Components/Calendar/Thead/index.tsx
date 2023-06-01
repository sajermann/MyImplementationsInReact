import { addDays, format, startOfWeek } from 'date-fns';
import { memo } from 'react';
import { Button } from '~/Components/Button';
import { TDisabled, TSelectOptions } from '~/Types/TCalendarPick';
import { calendar } from '~/Utils/CalendarPicker';
import { managerClassNames } from '~/Utils/ManagerClassNames';

function getHeaders() {
	const headers = Array.from({ length: 7 }, (_, index) => {
		const day = addDays(startOfWeek(new Date()), index);
		const dayName = format(day, 'EEEE');
		return dayName.slice(0, 3).toUpperCase();
	});

	return headers;
}

type Props = {
	onPrevClick: () => void;
	onNextClick: () => void;
	selectOptions: TSelectOptions;
	startDate: Date;
	disabled?: TDisabled;
	weeks: Array<Date[]>;
};
export const Thead = memo(
	({
		onPrevClick,
		onNextClick,
		selectOptions,
		startDate,
		disabled,
		weeks,
	}: Props) => (
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
				{getHeaders().map((weekDay, i) => (
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
								{ 'font-bold transition-all duration-500': true },
								{ 'p-1 md:p-4 ': true },
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
	)
);
