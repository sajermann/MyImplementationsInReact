import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import Section from '~/Components/Section';
import { ComponentBlock } from '~/Components/ComponentBlock';
import { CodeBlock } from '~/Components/CodeBlock';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { Switch } from '~/Components/Switch';
import { useState } from 'react';
import { Icons } from '~/Components/Icons';

export function SwitchPage() {
	const { translate } = useTranslation();
	const [checked, setChecked] = useState(false);

	return (
		<Main data-content="content-main">
			<Section title="Switch" variant="h1">
				{`${translate('IMPLEMENTS_COMPONENT')} Switch ${translate(
					'USING_THE_LIB'
				)} react-switch`}
			</Section>
			<Section title={translate('INSTALLATION_OF_LIB')} variant="h2">
				<CodeBlock>npm i react-switch;</CodeBlock>
			</Section>

			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2">
					<QuickAccessGithub name="Switch" />
				</div>
			</Section>

			<Section title="Normal" variant="h2">
				<ComponentBlock>
					<div className="flex gap-2">
						<Switch
							label={translate('LEFT')}
							id="left"
							checked={checked}
							onChangge={e => setChecked(e)}
							containerProps={{
								className: 'flex !flex-row',
							}}
						/>
						<Switch
							label={translate('TOP')}
							id="top"
							checked={checked}
							onChangge={e => setChecked(e)}
						/>

						<Switch
							label={translate('BOTTOM')}
							id="bottom"
							checked={checked}
							onChangge={e => setChecked(e)}
							containerProps={{
								className: 'flex-col-reverse',
							}}
						/>

						<Switch
							label={translate('RIGHT')}
							id="right"
							checked={checked}
							onChangge={e => setChecked(e)}
							containerProps={{
								className: 'flex !flex-row-reverse',
							}}
						/>
					</div>
				</ComponentBlock>
			</Section>

			<Section title={translate('ICONS')} variant="h2">
				<ComponentBlock>
					<div className="flex gap-2">
						<Switch
							label={translate(checked ? 'LIGHT' : 'DARK')}
							id="left"
							checked={checked}
							onChangge={e => setChecked(e)}
							containerProps={{
								className: 'flex !flex-row',
							}}
							checkedIcon={<Icons nameIcon="sun" />}
							uncheckedIcon={<Icons nameIcon="moon" />}
						/>

						<Switch
							label={translate(checked ? 'LIGHT' : 'DARK')}
							id="left"
							checked={checked}
							onChangge={e => setChecked(e)}
							checkedHandleIcon={<Icons nameIcon="sun" color="#fff" />}
							onHandleColor="#A0C40E"
							uncheckedHandleIcon={<Icons nameIcon="moon" color="#fff" />}
							offHandleColor="#DF2E38"
						/>

						<Switch
							label={translate(checked ? 'ACTIVE' : 'INACTIVE')}
							id="left"
							checked={checked}
							onChangge={e => setChecked(e)}
							containerProps={{
								className: 'flex-col-reverse',
							}}
							checkedIcon={
								<div className="flex items-center justify-center w-full h-full">
									<Icons nameIcon="checked" className="w-5" color="#fff" />
								</div>
							}
							uncheckedIcon={
								<div className="flex items-center justify-center w-full h-full">
									<Icons nameIcon="close" className="w-4" color="#fff" />
								</div>
							}
						/>

						<Switch
							label={translate(checked ? 'ACTIVE' : 'INACTIVE')}
							id="left"
							checked={checked}
							onChangge={e => setChecked(e)}
							containerProps={{
								className: 'flex !flex-row-reverse',
							}}
							checkedHandleIcon={
								<div className="flex items-center justify-center w-full h-full">
									<Icons nameIcon="checked" className="w-4" color="#fff" />
								</div>
							}
							onHandleColor="#A0C40E"
							uncheckedHandleIcon={
								<div className="flex items-center justify-center w-full h-full">
									<Icons nameIcon="close" className="w-4" color="#fff" />
								</div>
							}
							offHandleColor="#DF2E38"
						/>
					</div>
				</ComponentBlock>
			</Section>

			<Section title={translate('COLORS')} variant="h2">
				<ComponentBlock>
					<div className="flex gap-2">
						<Switch
							checked={checked}
							onChangge={e => setChecked(e)}
							onColor="#3711f2"
							offColor="#b50e9c"
						/>

						<Switch
							checked={checked}
							onChangge={e => setChecked(e)}
							onColor="#0f0e0e"
							offColor="#0bbf38"
							onHandleColor="#0bbf38"
							offHandleColor="#0f0e0e"
						/>
					</div>
				</ComponentBlock>
			</Section>
		</Main>
	);
}
