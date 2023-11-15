import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import { ComponentBlock } from '~/Components/ComponentBlock';
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { Datepicker } from '~/Components/Datepicker';
import { useState } from 'react';
import { Button } from '~/Components/Button';
import { CodeBlock } from '~/Components/CodeBlock';
import { addDays, subDays } from 'date-fns';
import { ContainerInput } from '~/Components/ContainerInput';
import { Label } from '~/Components/Label';

export function DatepickerPage() {
	const [firstPicker, setFirstPicker] = useState(new Date().toISOString());
	const { translate } = useTranslation();

	return (
		<Main data-content="content-main">
			<Section title="Datepicker" variant="h1">
				{`${translate('IMPLEMENTS_COMPONENT')} Datepicker ${translate(
					'USING_THE_LIB'
				)} react-datepicker`}
			</Section>

			<Section title={translate('INSTALLATION_OF_LIB')} variant="h2">
				<CodeBlock>npm i react-datepicker;</CodeBlock>
			</Section>

			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2">
					<QuickAccessGithub name="Datepicker" />
				</div>
			</Section>

			<Section title={translate('DATE')} variant="h2">
				<ComponentBlock>
					<ContainerInput>
						<Label htmlFor="Date1">{translate('DATE')}</Label>
						<Datepicker placeholder={translate('DD/MM/YYYY')} id="Date1" />
					</ContainerInput>
				</ComponentBlock>
			</Section>

			<Section title={translate('CONTROLLED')} variant="h2">
				<ComponentBlock>
					<div className="flex flex-col gap-2">
						<div className="flex gap-2">
							<ContainerInput>
								<Label htmlFor="Date2">{translate('DATE')}</Label>
								<Datepicker
									placeholder={translate('DD/MM/YYYY')}
									id="Date2"
									value={firstPicker}
									onChange={e => setFirstPicker(e.target.value)}
								/>
							</ContainerInput>

							<ContainerInput>
								<Label htmlFor="Date3">{translate('DEFAULT_VALUE')}</Label>
								<Datepicker
									customDefaultValue={new Date()}
									placeholder={translate('DD/MM/YYYY')}
									id="Date3"
									onChange={e => setFirstPicker(e.target.value)}
								/>
							</ContainerInput>
						</div>
						<div className="flex items-center justify-center gap-2">
							{firstPicker}
							<Button onClick={() => setFirstPicker('')}>Limpar</Button>
						</div>
					</div>
				</ComponentBlock>
			</Section>

			<Section title={translate('DATE_FORMAT')} variant="h2">
				<ComponentBlock>
					<ContainerInput>
						<Label htmlFor="DateFormat1">{translate('DATE')}</Label>
						<Datepicker
							dateFormat="yyyy-MM-dd"
							placeholder={translate('YYYY-MM-DD')}
							id="DateFormat1"
						/>
					</ContainerInput>
					<ContainerInput>
						<Label htmlFor="DateFormat2">{translate('DATE')}</Label>
						<Datepicker
							dateFormat="MM/yyyy"
							placeholder={translate('MM/YYYY')}
							id="DateFormat2"
							withoutDay
						/>
					</ContainerInput>
				</ComponentBlock>
			</Section>

			<Section title={translate('DISABLED_DATES')} variant="h2">
				<ComponentBlock>
					<ContainerInput>
						<Label htmlFor="Disabled">{translate('DISABLED')}</Label>
						<Datepicker
							placeholder={translate('DD/MM/YYYY')}
							id="Disabled"
							excludeDateIntervals={[
								{ start: subDays(new Date(), 5), end: addDays(new Date(), 5) },
							]}
						/>
					</ContainerInput>
				</ComponentBlock>
			</Section>

			<Section title={translate('CONTAINER_PROPS')} variant="h2">
				<ComponentBlock>
					<ContainerInput
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							border: '1px solid',
							width: 500,
						}}
						className="p-5"
					>
						<Label htmlFor="DateFormat3">{translate('DATE')}</Label>
						<Datepicker
							containerProps={{
								style: {
									width: 160,
								},
								className: 'flex !flex-row items-center',
							}}
							placeholder={translate('DD/MM/YYYY')}
							id="DateFormat3"
						/>
					</ContainerInput>
				</ComponentBlock>
			</Section>
		</Main>
	);
}
