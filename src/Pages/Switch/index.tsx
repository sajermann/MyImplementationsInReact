import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import Section from '~/Components/Section';
import { ComponentBlock } from '~/Components/ComponentBlock';
import { CodeBlock } from '~/Components/CodeBlock';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { Switch } from '~/Components/Switch';
import { useState } from 'react';
import { Icons } from '~/Components/Icons';
import { ContainerInput } from '~/Components/ContainerInput';
import { Label } from '~/Components/Label';

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
						<ContainerInput className="flex-row items-center">
							<Label htmlFor="left">{translate('LEFT')}</Label>
							<Switch
								id="left"
								checked={checked}
								onChangge={e => setChecked(e)}
							/>
						</ContainerInput>

						<ContainerInput className="items-center">
							<Label htmlFor="top">{translate('TOP')}</Label>
							<Switch
								id="top"
								checked={checked}
								onChangge={e => setChecked(e)}
							/>
						</ContainerInput>

						<ContainerInput className="flex-col-reverse items-center">
							<Label htmlFor="bottom">{translate('BOTTOM')}</Label>
							<Switch
								id="bottom"
								checked={checked}
								onChangge={e => setChecked(e)}
							/>
						</ContainerInput>

						<ContainerInput className="flex-row-reverse items-center">
							<Label htmlFor="right">{translate('RIGHT')}</Label>
							<Switch
								id="right"
								checked={checked}
								onChangge={e => setChecked(e)}
							/>
						</ContainerInput>
					</div>
				</ComponentBlock>
			</Section>

			<Section title={translate('ICONS')} variant="h2">
				<ComponentBlock>
					<div className="flex gap-2">
						<ContainerInput className="flex-row items-center">
							<Label htmlFor="left">
								{translate(checked ? 'LIGHT' : 'DARK')}
							</Label>
							<Switch
								id="left"
								checked={checked}
								onChangge={e => setChecked(e)}
								checkedIcon={<Icons nameIcon="sun" />}
								uncheckedIcon={<Icons nameIcon="moon" />}
							/>
						</ContainerInput>

						<ContainerInput className="items-center">
							<Label htmlFor="top">
								{translate(checked ? 'LIGHT' : 'DARK')}
							</Label>
							<Switch
								id="top"
								checked={checked}
								onChangge={e => setChecked(e)}
								checkedHandleIcon={<Icons nameIcon="sun" color="#fff" />}
								onHandleColor="#A0C40E"
								uncheckedHandleIcon={<Icons nameIcon="moon" color="#fff" />}
								offHandleColor="#DF2E38"
							/>
						</ContainerInput>

						<ContainerInput className="flex-col-reverse items-center">
							<Label htmlFor="bottom">
								{translate(checked ? 'ACTIVE' : 'INACTIVE')}
							</Label>
							<Switch
								id="bottom"
								checked={checked}
								onChangge={e => setChecked(e)}
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
						</ContainerInput>

						<ContainerInput className="flex-row-reverse items-center">
							<Label htmlFor="right">
								{translate(checked ? 'ACTIVE' : 'INACTIVE')}
							</Label>
							<Switch
								id="right"
								checked={checked}
								onChangge={e => setChecked(e)}
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
						</ContainerInput>
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
