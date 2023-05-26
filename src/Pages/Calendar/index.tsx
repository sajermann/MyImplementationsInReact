import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import Section from '~/Components/Section';
import { ComponentBlock } from '~/Components/ComponentBlock';
import { CodeBlock } from '~/Components/CodeBlock';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';

import { Calendar } from '~/Components/Calendar';
import { useState } from 'react';
import { Button } from '~/Components/Button';

export function CalendarPage() {
	const { translate } = useTranslation();
	const [month, setMonth] = useState(5);

	return (
		<Main data-content="content-main">
			<Section heading="Calendar">
				{`${translate('IMPLEMENTS_COMPONENT')} Calendar`}
			</Section>
			<Section subHeading={translate('INSTALLATION_OF_LIB')}>
				<CodeBlock>npm i nuka-carousel;</CodeBlock>
			</Section>

			<Section subHeading={translate('CODES')}>
				<div className="flex gap-2">
					<QuickAccessGithub name="Calendar" />
				</div>
			</Section>

			<Section subHeading="Calendar">
				<ComponentBlock>
					<div className="flex flex-col items-center justify-center">
						<div className="flex gap-2">
							<Button onClick={() => setMonth(m => m - 1)}>-</Button>
							<Button onClick={() => setMonth(m => m + 1)}>+</Button>
						</div>
						<Calendar
							year={2023}
							month={month}
							disabledDates={[new Date(2023, 4, 31)]}
						/>
					</div>
				</ComponentBlock>
			</Section>
		</Main>
	);
}
