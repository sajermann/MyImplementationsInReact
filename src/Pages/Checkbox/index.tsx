import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import Section from '~/Components/Section';
import { ComponentBlock } from '~/Components/ComponentBlock';
import { CodeBlock } from '~/Components/CodeBlock';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { Checkbox } from '~/Components/Checkbox';

export function CheckboxPage() {
	const { translate } = useTranslation();

	return (
		<Main data-content="content-main">
			<Section heading="Checkbox">
				{`${translate('IMPLEMENTS_COMPONENT')} Checkbox ${translate(
					'USING_THE_LIB'
				)} @radix-ui/react-checkbox`}
			</Section>
			<Section subHeading={translate('INSTALLATION_OF_LIB')}>
				<CodeBlock>npm i @radix-ui/react-checkbox;</CodeBlock>
			</Section>

			<Section subHeading={translate('CODES')}>
				<div className="flex gap-2">
					<QuickAccessGithub name="Checkbox" />
				</div>
			</Section>

			<Section subHeading="Checkbox">
				<ComponentBlock>
					<div className="flex gap-2">
						<Checkbox
							label="Checkbox"
							id="checkbox2"
							containerProps={{
								className:
									'flex !flex-row-reverse items-center justify-center gap-2',
							}}
							labelProps={{ className: 'mb-0' }}
						/>

						<Checkbox
							label="Checkbox"
							id="checkbox3"
							containerProps={{
								className: 'flex !flex-col-reverse',
							}}
							labelProps={{ className: 'mb-0' }}
						/>
						<Checkbox label="Checkbox" id="checkbox" />
						<Checkbox
							label="Checkbox"
							id="checkbox1"
							containerProps={{
								className: 'flex !flex-row items-center justify-center gap-2',
							}}
							labelProps={{ className: 'mb-0' }}
						/>
					</div>
				</ComponentBlock>
			</Section>
		</Main>
	);
}
