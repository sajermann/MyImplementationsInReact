import { useState } from 'react';
import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import Section from '~/Components/Section';
import { ComponentBlock } from '~/Components/ComponentBlock';
import { CodeBlock } from '~/Components/CodeBlock';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { Checkbox } from '~/Components/Checkbox';
import { Icons } from '~/Components/Icons';
import { managerClassNames } from '~/Utils/ManagerClassNames';

export function CheckboxPage() {
	const { translate } = useTranslation();
	const [checked, setChecked] = useState(false);

	return (
		<Main data-content="content-main">
			<Section title="Checkbox" variant="h1">
				{`${translate('IMPLEMENTS_COMPONENT')} Checkbox ${translate(
					'USING_THE_LIB'
				)} @radix-ui/react-checkbox`}
			</Section>
			<Section title={translate('INSTALLATION_OF_LIB')} variant="h2">
				<CodeBlock>npm i @radix-ui/react-checkbox;</CodeBlock>
			</Section>

			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2">
					<QuickAccessGithub name="Checkbox" />
				</div>
			</Section>

			<Section title="Normal" variant="h2">
				<ComponentBlock>
					<div className="flex gap-2">
						<Checkbox
							label="Checkbox"
							id="checkbox"
							containerProps={{
								className: '!flex-row',
							}}
						/>

						<Checkbox label="Checkbox" id="checkbox1" />
						<Checkbox
							label="Checkbox"
							id="checkbox2"
							containerProps={{
								className: '!flex-col-reverse',
							}}
						/>
						<Checkbox
							label="Checkbox"
							id="checkbox3"
							containerProps={{
								className: '!flex-row-reverse',
							}}
						/>
					</div>
				</ComponentBlock>
			</Section>

			<Section title={translate('ICONS')} variant="h2">
				<ComponentBlock>
					<div className="flex gap-2">
						<Checkbox
							label="Checked"
							id="checkbox4"
							containerProps={{
								className: '!flex-row',
							}}
							checkedIcon={<Icons nameIcon="checkCircle" />}
						/>
						<Checkbox
							label="Indeterminate"
							defaultChecked="indeterminate"
							id="checkbox5"
							containerProps={{
								className: '!flex-row-reverse',
							}}
							indeterminateIcon={<Icons nameIcon="question" />}
						/>
					</div>
				</ComponentBlock>
			</Section>

			<Section title={translate('COLORS')} variant="h2">
				<ComponentBlock>
					<div className="flex gap-2">
						<Checkbox
							label={translate('COMBINES')}
							checked={checked}
							onCheckedChange={e => setChecked(Boolean(e.target.value))}
							id="checkbox6"
							className={managerClassNames([
								{ '!bg-red-900': checked },
								{ '!bg-pink-500': !checked },
							])}
							containerProps={{
								className: '!flex-row',
							}}
							checkedIcon={
								<Icons nameIcon="checked" className="text-yellow-500" />
							}
						/>
						<Checkbox
							label={translate('FIXED')}
							id="checkbox7"
							className="!bg-green-500"
							containerProps={{
								className: '!flex-row-reverse',
							}}
						/>
					</div>
				</ComponentBlock>
			</Section>
		</Main>
	);
}
