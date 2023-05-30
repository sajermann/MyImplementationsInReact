import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';

import { ComponentBlock } from '~/Components/ComponentBlock';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';

import { Calendar } from '~/Components/Calendar';
import { useState } from 'react';
import { addMonths } from 'date-fns';
import { Section } from '~/Components/SectionNew';

export function CalendarPickerPage() {
	const { translate } = useTranslation();
	const [dateToStartCalendar, setDateToStartCalendar] = useState(new Date());
	const [selectedDatesNormal, setSelectedDatesNormal] = useState<Date[]>([]);
	const [selectedDatesRange, setSelectedDatesRange] = useState<Date[]>([]);
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);

	const [selectedDateForDisabled, setSelectedDateForDisabled] =
		useState<Date | null>(null);

	return (
		<Main data-content="content-main">
			<Section title={translate('CALENDAR_PICKER')} variant="h1">
				{`${translate('IMPLEMENTS_COMPONENT')} Calendar Picker ${translate(
					'WITHOUT_USING_LIB'
				)}`}
			</Section>

			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2">
					<QuickAccessGithub name="CalendarPicker" />
				</div>
			</Section>

			<Section title={translate('SINGLE_SELECTION')} variant="h2">
				<ComponentBlock>
					<div className="flex flex-col items-center justify-center">
						<Calendar
							selectOptions={{
								single: {
									selectedDate,
									onSelectedDate: setSelectedDate,
								},
							}}
							onPrevClick={() => addMonths(dateToStartCalendar, -1)}
							onNextClick={() => addMonths(dateToStartCalendar, 1)}
							year={dateToStartCalendar.getFullYear()}
							month={dateToStartCalendar.getMonth() + 1}
						/>
						{selectedDate && (
							<div className="w-[220px] flex flex-col items-center">
								<h2>{translate('SELECTED')}</h2>
								{JSON.stringify(selectedDate, null, 2)}
							</div>
						)}
					</div>
				</ComponentBlock>
			</Section>

			<Section title={translate('MULTI_SELECTION')} variant="h2">
				<Section title={translate('NORMAL')} variant="h3">
					<ComponentBlock>
						<div className="flex flex-col items-center justify-center">
							<Calendar
								selectOptions={{
									multi: {
										selectedDates: selectedDatesNormal,
										onSelectedDates: setSelectedDatesNormal,
									},
								}}
								onPrevClick={() =>
									setDateToStartCalendar(prev => addMonths(prev, -1))
								}
								onNextClick={() =>
									setDateToStartCalendar(prev => addMonths(prev, 1))
								}
								year={dateToStartCalendar.getFullYear()}
								month={dateToStartCalendar.getMonth() + 1}
							/>
							{selectedDatesNormal.length > 0 && (
								<div className="w-[220px] flex flex-col items-center">
									<h2>{translate('SELECTEDS')}</h2>
									{JSON.stringify(selectedDatesNormal, null, 2)}
								</div>
							)}
						</div>
					</ComponentBlock>
				</Section>

				<Section title={translate('RANGE_UNSTABLE')} variant="h3">
					<ComponentBlock>
						<div className="flex flex-col items-center justify-center">
							<Calendar
								selectOptions={{
									multi: {
										selectedDates: selectedDatesRange,
										onSelectedDates: setSelectedDatesRange,
										enableRangeSelection: true,
									},
								}}
								onPrevClick={() =>
									setDateToStartCalendar(prev => addMonths(prev, -1))
								}
								onNextClick={() =>
									setDateToStartCalendar(prev => addMonths(prev, 1))
								}
								year={dateToStartCalendar.getFullYear()}
								month={dateToStartCalendar.getMonth() + 1}
								disabled={{
									dates: [
										new Date(
											dateToStartCalendar.getFullYear(),
											dateToStartCalendar.getMonth(),
											10
										),
										new Date(
											dateToStartCalendar.getFullYear(),
											dateToStartCalendar.getMonth(),
											20
										),
									],
								}}
							/>
							{selectedDatesRange.length > 0 && (
								<div className="w-[220px] flex flex-col items-center">
									<h2>{translate('SELECTEDS')}</h2>
									{JSON.stringify(selectedDatesRange, null, 2)}
								</div>
							)}
						</div>
					</ComponentBlock>
				</Section>
			</Section>

			<Section title={translate('DISABLED_DATES')} variant="h2">
				<ComponentBlock>
					<div className="flex flex-col items-center justify-center">
						<Calendar
							selectOptions={{
								single: {
									selectedDate: selectedDateForDisabled,
									onSelectedDate: setSelectedDateForDisabled,
								},
							}}
							onPrevClick={() =>
								setDateToStartCalendar(prev => addMonths(prev, -1))
							}
							onNextClick={() =>
								setDateToStartCalendar(prev => addMonths(prev, 1))
							}
							year={dateToStartCalendar.getFullYear()}
							month={dateToStartCalendar.getMonth() + 1}
							disabled={{
								datesBefore: new Date(
									dateToStartCalendar.getFullYear(),
									dateToStartCalendar.getMonth(),
									5
								),
								datesAfter: new Date(
									dateToStartCalendar.getFullYear(),
									dateToStartCalendar.getMonth(),
									25
								),
								dates: [
									new Date(
										dateToStartCalendar.getFullYear(),
										dateToStartCalendar.getMonth(),
										10
									),
									new Date(
										dateToStartCalendar.getFullYear(),
										dateToStartCalendar.getMonth(),
										20
									),
								],
							}}
						/>
						{selectedDateForDisabled && (
							<div className="w-[220px] flex flex-col items-center">
								<h2>{translate('SELECTED')}</h2>
								{JSON.stringify(selectedDateForDisabled, null, 2)}
							</div>
						)}
					</div>
				</ComponentBlock>
			</Section>
		</Main>
	);
}
