import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import { ComponentBlock } from '~/Components/ComponentBlock';
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { Datepicker } from '~/Components/Datepicker';
import { useRef, useState } from 'react';
import { Button } from '~/Components/Button';
import { CodeBlock } from '~/Components/CodeBlock';
import { addDays, subDays } from 'date-fns';
import { ContainerInput } from '~/Components/ContainerInput';
import { Label } from '~/Components/Label';
import { ErrorsInput } from '~/Components/ErrorsInput';
import { Checkbox } from '~/Components/Checkbox';

export function DatepickerPage() {
	const [firstPicker, setFirstPicker] = useState(new Date().toISOString());
	const [errorMode, setErrorMode] = useState(false);
	const { translate } = useTranslation();
	const ref = useRef<HTMLInputElement>(null);

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
					<ContainerInput className="w-48">
						<Label htmlFor="Date1">{translate('DATE')}</Label>
						<Datepicker placeholder={translate('DD/MM/YYYY')} id="Date1" />
					</ContainerInput>
				</ComponentBlock>
			</Section>

			<Section title={translate('CONTROLLED')} variant="h2">
				<ComponentBlock>
					<div className="flex flex-col gap-2">
						<div className="flex gap-2">
							<ContainerInput className="w-48">
								<Label htmlFor="Date2">{translate('DATE')}</Label>
								<Datepicker
									placeholder={translate('DD/MM/YYYY')}
									id="Date2"
									value={firstPicker}
									onChange={e => setFirstPicker(e.target.value)}
								/>
							</ContainerInput>

							<ContainerInput className="w-48">
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
					<ContainerInput className="w-48">
						<Label htmlFor="DateFormat1">{translate('DATE')}</Label>
						<Datepicker
							dateFormat="yyyy-MM-dd"
							placeholder={translate('YYYY-MM-DD')}
							id="DateFormat1"
						/>
					</ContainerInput>
					<ContainerInput className="w-48">
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
					<ContainerInput className="w-48">
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
						className="p-5 w-48"
					>
						<Label htmlFor="DateFormat3">{translate('DATE')}</Label>
						<Datepicker
							placeholder={translate('DD/MM/YYYY')}
							id="DateFormat3"
						/>
					</ContainerInput>
				</ComponentBlock>
			</Section>

			<Section subHeading={translate('ERRORS')}>
				<ComponentBlock className="flex-row !items-start">
					<ContainerInput className="w-48">
						<Label htmlFor="errorMode" isError={errorMode}>
							{translate('ERROR_MODE')}
						</Label>
						<Datepicker
							placeholder={translate('DD/MM/YYYY')}
							id="errorMode"
							iserror={errorMode}
						/>
						<ErrorsInput
							errors={errorMode ? ['Required', 'Invalid Date'] : undefined}
						/>
					</ContainerInput>
					<ContainerInput className="w-max items-center">
						<Label htmlFor="error_mode_checkbox">
							{translate('ERROR_MODE')}
						</Label>
						<Checkbox
							id="error_mode_checkbox"
							checked={errorMode}
							onCheckedChange={e => setErrorMode(e.target.value as boolean)}
						/>
					</ContainerInput>
				</ComponentBlock>
			</Section>

			<Section subHeading={`Focus - ${translate('UNDER_CONSTRUCTION')}`}>
				<ComponentBlock className="flex-row !items-end">
					<ContainerInput className="w-48">
						<Label htmlFor="focus">Ref - Focus</Label>
						<Datepicker
							ref={ref}
							placeholder={translate('DD/MM/YYYY')}
							id="focus"
						/>
					</ContainerInput>
					<Button
						type="button"
						style={{ width: 173 }}
						onClick={() => ref.current?.focus()}
					>
						Focus
					</Button>
				</ComponentBlock>
			</Section>
		</Main>
	);
}

// Arrumar o focus
