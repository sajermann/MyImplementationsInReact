import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import { ComponentBlock } from '~/Components/ComponentBlock';
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { Datepicker } from '~/Components/Datepicker';
import { useState } from 'react';
import { Button } from '~/Components/Button';

export function DatepickerPage() {
	const [firstPicker, setFirstPicker] = useState(new Date().toISOString());
	const { translate } = useTranslation();

	return (
		<Main data-content="content-main">
			<Section heading="Datepicker">
				{`${translate('IMPLEMENTS_COMPONENT')} Datepicker ${translate(
					'WITHOUT_USING_LIB'
				)}`}
			</Section>

			<Section subHeading={translate('CODES')}>
				<div className="flex gap-2">
					<QuickAccessGithub name="Datepicker" />
				</div>
			</Section>

			<Section subHeading={translate('DATE')}>
				<ComponentBlock>
					<Datepicker
						label={translate('DATE')}
						placeholder="dd/mm/aaaa"
						id="Date"
					/>
				</ComponentBlock>
			</Section>

			<Section subHeading={translate('CONTROLLED')}>
				<ComponentBlock>
					<div className="flex flex-col gap-2">
						<div className="flex gap-2">
							<Datepicker
								label={translate('DATE')}
								placeholder="dd/mm/aaaa"
								id="Date"
								value={firstPicker}
								onChange={e => setFirstPicker(e.target.value)}
							/>

							<Datepicker
								customDefaultValue={new Date()}
								label={translate('DEFAULT_VALUE')}
								placeholder="dd/mm/aaaa"
								id="Date"
								value={firstPicker}
								onChange={e => setFirstPicker(e.target.value)}
							/>
						</div>
						<div className="flex items-center justify-center gap-2">
							{firstPicker}
							<Button onClick={() => setFirstPicker('')}>Limpar</Button>
						</div>
					</div>
				</ComponentBlock>
			</Section>
		</Main>
	);
}
