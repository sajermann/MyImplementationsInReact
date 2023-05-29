import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import Section from '~/Components/Section';
import { ComponentBlock } from '~/Components/ComponentBlock';
import { CodeBlock } from '~/Components/CodeBlock';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';

import { Calendar } from '~/Components/Calendar';
import { useState } from 'react';
import { addMonths } from 'date-fns';

export function CalendarPage() {
	const { translate } = useTranslation();
	const [dateToStartCalendar, setDateToStartCalendar] = useState(
		new Date(2023, 4)
	);
	const [selectedDates, setSelectedDates] = useState<Date[]>([]);

	return (
		<Main data-content="content-main">
			<Section heading="Calendar">
				{`${translate('IMPLEMENTS_COMPONENT')} Calendar  ${translate(
					'WITHOUT_USING_LIB'
				)}`}
			</Section>

			<Section subHeading={translate('CODES')}>
				<div className="flex gap-2">
					<QuickAccessGithub name="Calendar" />
				</div>
			</Section>

			<Section title="Calendar" variant="h2">
				<ComponentBlock>
					<div className="flex flex-col items-center justify-center">
						<Calendar
							selectedDates={selectedDates}
							setSelectedDates={setSelectedDates}
							onPrevClick={() =>
								setDateToStartCalendar(prev => addMonths(prev, -1))
							}
							onNextClick={() =>
								setDateToStartCalendar(prev => addMonths(prev, 1))
							}
							year={dateToStartCalendar.getFullYear()}
							month={dateToStartCalendar.getMonth() + 1}
							disabledDates={[new Date(2023, 4, 31), new Date(2023, 4, 24)]}
						/>
						{selectedDates.length > 0 && (
							<div className="w-[220px] flex flex-col items-center">
								<h2>{translate('SELECTEDS')}</h2>
								{JSON.stringify(selectedDates, null, 2)}
							</div>
						)}
					</div>
				</ComponentBlock>
			</Section>
		</Main>
	);
}
