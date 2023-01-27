import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import { ComponentBlock } from '~/Components/ComponentBlock';
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { Datepicker } from '~/Components/Datepicker';

export function DatepickerPage() {
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

			<Section subHeading={translate('OPEN_FROM')}>
				<ComponentBlock>
					<Datepicker
						label="Data"
						placeholder="dd/mm/aaaa"
						id="Data"
						// value={option.value}
						onChange={console.log}
						// containerProps={option.containerProps}
						// withoutDay={option.withoutDay}
						// disabled={isLoading}
					/>
				</ComponentBlock>
			</Section>
		</Main>
	);
}
