import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import { ComponentBlock } from '~/Components/ComponentBlock';
import { Section } from '~/Components/Section';
import { useState } from 'react';
import { ContainerInput } from '~/Components/ContainerInput';
import { Label } from '~/Components/Label';
import * as DatepickerMega from '~/Components/DatepickerMega';
import { TDate } from '~/Components/DatepickerMega/types';
import { JsonViewer } from '~/Components/JsonViewer';
import { CalendarIcon } from 'lucide-react';

export function DatepickerPage() {
	const [lastEventOnChangeRoot, setLastEventOnChangeRoot] =
		useState<TDate | null>(null);
	const { translate } = useTranslation();
	const [date, setDate] = useState<TDate>({
		date: null,
		day: null,
		month: null,
		hour: null,
		minute: null,
		year: null,
		iso: null,
		clockType: null,
	});

	return (
		<Main data-content="content-main">
			<Section title={translate('UNCONTROLLED')} variant="h2">
				<Section title={translate('EVENT_ONCHANGE_ROOT')} variant="h3">
					<ComponentBlock className="flex flex-col !items-start">
						<ContainerInput>
							<Label htmlFor="date">{translate('DATE')}</Label>
							<DatepickerMega.Root
								disabledDates={[new Date(2024, 11, 26)]}
								onChange={setLastEventOnChangeRoot}
							>
								<DatepickerMega.Day id="date" />
								<DatepickerMega.Divider />
								<DatepickerMega.Month />
								<DatepickerMega.Divider />
								<DatepickerMega.Year />
								<DatepickerMega.Divider> - </DatepickerMega.Divider>
								<DatepickerMega.Hour />
								<DatepickerMega.Divider> : </DatepickerMega.Divider>
								<DatepickerMega.Minute />
								<DatepickerMega.PickerTrigger>
									<CalendarIcon />
								</DatepickerMega.PickerTrigger>
								<DatepickerMega.SingleDayPicker />
							</DatepickerMega.Root>
						</ContainerInput>
						<div className="w-full">
							<h1>{translate('LAST_EVENT_ONCHANGE_IS_NOT_STATE')}</h1>
							<JsonViewer value={lastEventOnChangeRoot || {}} />
						</div>
					</ComponentBlock>
				</Section>

				{/* <Section title={translate('DEFAULT_VALUES')} variant="h3">
					<ComponentBlock className="flex flex-col !items-start">
						<ContainerInput>
							<Label>{translate('DATE')}</Label>
							<DatepickerMega.Root>
								<DatepickerMega.Day defaultValue={new Date().getDate()} />
								<DatepickerMega.Divider />
								<DatepickerMega.Month
									defaultValue={new Date().getMonth() + 1}
								/>
								<DatepickerMega.Divider />
								<DatepickerMega.Year defaultValue={new Date().getFullYear()} />
								<DatepickerMega.Divider> - </DatepickerMega.Divider>
								<DatepickerMega.Hour defaultValue={new Date().getHours()} />
								<DatepickerMega.Divider> : </DatepickerMega.Divider>
								<DatepickerMega.Minute defaultValue={new Date().getMinutes()} />
								<DatepickerMega.PickerTrigger>
									<CalendarIcon />
								</DatepickerMega.PickerTrigger>
								<DatepickerMega.SingleDayPicker />
							</DatepickerMega.Root>
						</ContainerInput>
						<h3 className="text-sm italic font-bold">
							* {translate('CALENDAR_CHANGES_INPUT_VALUE_BY_INPUT_REFERENCES')}
						</h3>
					</ComponentBlock>
				</Section> */}
			</Section>
			{/* <Section title={translate('CONTROLLED')} variant="h2">
				<ComponentBlock className="flex flex-col !items-start">
					<div className="flex items-baseline gap-2">
						<ContainerInput>
							<Label>{translate('DATE')}</Label>
							<DatepickerMega.Root
								onChange={setDate}
								disabledDates={[new Date(2024, 11, 20)]}
							>
								<DatepickerMega.Day value={String(date.day || '')} />
								<DatepickerMega.Divider />
								<DatepickerMega.Month value={String(date.month || '')} />
								<DatepickerMega.Divider />
								<DatepickerMega.Year value={String(date.year || '')} />
								<DatepickerMega.PickerTrigger>
									<CalendarIcon />
								</DatepickerMega.PickerTrigger>
								<DatepickerMega.SingleDayPicker />
							</DatepickerMega.Root>
						</ContainerInput>

						<div className="flex ">
							<label htmlFor="native" className="flex flex-col">
								Native Input
								<input
									onChange={e => {
										const { value } = e.target;
										if (!value) {
											setDate({
												date: null,
												day: null,
												month: null,
												hour: null,
												minute: null,
												year: null,
												iso: null,
												clockType: null,
											});
											return;
										}
										const [year, month, day] = value.split('-').map(Number);
										const dateComplete = new Date(year, month - 1, day);

										setDate(prev => ({
											...prev,
											date: dateComplete,
											day: dateComplete.getDate(),
											month: dateComplete.getMonth() + 1,
											year: dateComplete.getFullYear(),
											iso: dateComplete.toISOString(),
										}));
									}}
									type="date"
									className="border bg-transparent ring-0 outline-none rounded h-11"
									id="native"
									value={date.iso?.substring(0, 10)}
								/>
							</label>
						</div>
					</div>
					<div className="w-full">
						<h1>{translate('THIS_IS_STATE')}</h1>
						<JsonViewer value={date} />
					</div>
					<h3 className="text-sm italic font-bold">
						* {translate('MEGA_DATE_PICKER_CAUTION')}
					</h3>
				</ComponentBlock>
			</Section> */}
			<Section title={translate('COMPOSITION_PATTERN')} variant="h2">
				<ComponentBlock className="flex !items-start !justify-start">
					<div className="flex gap-2 flex-wrap">
						{/* <ContainerInput className="w-max">
							<Label htmlFor="year-composition">
								{translate('YYYY-MM-DD')}
							</Label>
							<DatepickerMega.Root>
								<DatepickerMega.Year id="year-composition" />
								<DatepickerMega.Divider>-</DatepickerMega.Divider>
								<DatepickerMega.Month />
								<DatepickerMega.Divider>-</DatepickerMega.Divider>
								<DatepickerMega.Day />
								<DatepickerMega.PickerTrigger>
									<CalendarIcon />
								</DatepickerMega.PickerTrigger>
								<DatepickerMega.SingleDayPicker />
							</DatepickerMega.Root>
						</ContainerInput>
						<ContainerInput className="w-max">
							<Label>{translate('MONTH_AND_YEAR')}</Label>
							<DatepickerMega.Root onChange={console.log}>
								<DatepickerMega.Month />
								<DatepickerMega.Divider />
								<DatepickerMega.Year />
								<DatepickerMega.PickerTrigger>
									<CalendarIcon />
								</DatepickerMega.PickerTrigger>
								<DatepickerMega.SingleMonthPicker />
							</DatepickerMega.Root>
						</ContainerInput>
						<ContainerInput className="w-max">
							<Label>{translate('YEAR')}</Label>
							<DatepickerMega.Root onChange={console.log}>
								<DatepickerMega.Year />
								<DatepickerMega.PickerTrigger>
									<CalendarIcon />
								</DatepickerMega.PickerTrigger>
								<DatepickerMega.SingleYearPicker />
							</DatepickerMega.Root>
						</ContainerInput> */}

						{/* <ContainerInput className="w-max">
							<Label>{translate('DATE_TIME')}</Label>
							<DatepickerMega.Root>
								<DatepickerMega.Day />
								<DatepickerMega.Divider>-</DatepickerMega.Divider>
								<DatepickerMega.Month />
								<DatepickerMega.Divider>-</DatepickerMega.Divider>
								<DatepickerMega.Year />
								<DatepickerMega.Divider> - </DatepickerMega.Divider>
								<DatepickerMega.Hour />
								<DatepickerMega.Divider> : </DatepickerMega.Divider>
								<DatepickerMega.Minute />
								<DatepickerMega.PickerTrigger>
									<CalendarIcon />
								</DatepickerMega.PickerTrigger>
								<DatepickerMega.SingleDayPicker />
							</DatepickerMega.Root>
						</ContainerInput> */}
					</div>
				</ComponentBlock>
			</Section>
			{/* <Section title={translate('DISABLED_DATES')} variant="h2">
				<ComponentBlock className="flex !items-start !justify-start">
					<div className="flex gap-2 flex-wrap items-end">
						<ContainerInput className="w-max">
							<Label>{translate('YESTERDAY_AND_TOMORROW')}</Label>
							<DatepickerMega.Root
								disabledDates={[
									addDays(new Date(), -1),
									addDays(new Date(), +1),
								]}
							>
								<DatepickerMega.Day />
								<DatepickerMega.Divider />
								<DatepickerMega.Month />
								<DatepickerMega.Divider />
								<DatepickerMega.Year />
								<DatepickerMega.PickerTrigger>
									<CalendarIcon />
								</DatepickerMega.PickerTrigger>
								<DatepickerMega.SingleDayPicker />
							</DatepickerMega.Root>
						</ContainerInput>
						<ContainerInput className="w-max">
							<Label>{translate('SATURDAYS_AND_SUNDAYS')}</Label>
							<DatepickerMega.Root disabledWeeks={[0, 6]}>
								<DatepickerMega.Day />
								<DatepickerMega.Divider />
								<DatepickerMega.Month />
								<DatepickerMega.Divider />
								<DatepickerMega.Year />
								<DatepickerMega.PickerTrigger>
									<CalendarIcon />
								</DatepickerMega.PickerTrigger>
								<DatepickerMega.SingleDayPicker />
							</DatepickerMega.Root>
						</ContainerInput>
						<ContainerInput className="w-max">
							<Label>{translate('MIN_DATE')}</Label>
							<DatepickerMega.Root minDate={addDays(new Date(), -7)}>
								<DatepickerMega.Day />
								<DatepickerMega.Divider />
								<DatepickerMega.Month />
								<DatepickerMega.Divider />
								<DatepickerMega.Year />
								<DatepickerMega.PickerTrigger>
									<CalendarIcon />
								</DatepickerMega.PickerTrigger>
								<DatepickerMega.SingleDayPicker />
							</DatepickerMega.Root>
						</ContainerInput>
						<ContainerInput className="w-max">
							<Label>{translate('MAX_DATE')}</Label>
							<DatepickerMega.Root maxDate={addDays(new Date(), 7)}>
								<DatepickerMega.Day />
								<DatepickerMega.Divider />
								<DatepickerMega.Month />
								<DatepickerMega.Divider />
								<DatepickerMega.Year />
								<DatepickerMega.PickerTrigger>
									<CalendarIcon />
								</DatepickerMega.PickerTrigger>
								<DatepickerMega.SingleDayPicker />
							</DatepickerMega.Root>
						</ContainerInput>
					</div>
				</ComponentBlock>
			</Section>
			<Section title={translate('READ_ONLY')} variant="h2">
				<ComponentBlock className="flex !items-start !justify-start">
					<ContainerInput className="w-max">
						<Label>{translate('DATE')}</Label>
						<DatepickerMega.Root>
							<DatepickerMega.Day readOnly />
							<DatepickerMega.Divider />
							<DatepickerMega.Month readOnly />
							<DatepickerMega.Divider />
							<DatepickerMega.Year readOnly />
							<DatepickerMega.PickerTrigger>
								<CalendarIcon />
							</DatepickerMega.PickerTrigger>
							<DatepickerMega.SingleDayPicker />
						</DatepickerMega.Root>
					</ContainerInput>
				</ComponentBlock>
			</Section>
			<Section title={translate('TRIGGER')} variant="h2">
				<ComponentBlock className="flex !items-start !justify-start">
					<ContainerInput className="w-max">
						<Label>Input</Label>
						<DatepickerMega.Root>
							<DatepickerMega.PickerTrigger className="cursor-pointer">
								<DatepickerMega.Day readOnly className="cursor-pointer" />
								<DatepickerMega.Divider />
								<DatepickerMega.Month readOnly className="cursor-pointer" />
								<DatepickerMega.Divider />
								<DatepickerMega.Year readOnly className="cursor-pointer" />
							</DatepickerMega.PickerTrigger>
							<DatepickerMega.SingleDayPicker />
						</DatepickerMega.Root>
					</ContainerInput>
					<ContainerInput className="w-max">
						<Label>{translate('BY_ICON')}</Label>
						<DatepickerMega.Root>
							<DatepickerMega.Day />
							<DatepickerMega.Divider />
							<DatepickerMega.Month />
							<DatepickerMega.Divider />
							<DatepickerMega.Year />
							<DatepickerMega.PickerTrigger>
								<CalendarIcon />
							</DatepickerMega.PickerTrigger>
							<DatepickerMega.SingleDayPicker />
						</DatepickerMega.Root>
					</ContainerInput>
				</ComponentBlock>
			</Section>
			<Section title={translate('TIMER')} variant="h2">
				<ComponentBlock className="flex !items-start !justify-start">
					<div className="flex gap-2 flex-wrap">
						<ContainerInput className="w-max">
							<Label>{translate('24_HOURS')}</Label>
							<DatepickerMega.Root>
								<DatepickerMega.Hour />
								<DatepickerMega.Divider> : </DatepickerMega.Divider>
								<DatepickerMega.Minute />
								<DatepickerMega.PickerTrigger>
									<CalendarIcon />
								</DatepickerMega.PickerTrigger>
							</DatepickerMega.Root>
						</ContainerInput>
						<ContainerInput className="w-max">
							<Label htmlFor="year-composition">{translate('AM_PM')}</Label>
							<DatepickerMega.Root>
								<DatepickerMega.Hour />
								<DatepickerMega.Divider> : </DatepickerMega.Divider>
								<DatepickerMega.Minute />
								<DatepickerMega.AmPmToggle />
								<DatepickerMega.PickerTrigger>
									<CalendarIcon />
								</DatepickerMega.PickerTrigger>
							</DatepickerMega.Root>
						</ContainerInput>
					</div>
				</ComponentBlock>
			</Section> */}
			<p>Todos: </p>
			<p>Criar Picker pra hora </p>
			<p>Datas bloqueadas não podem ser selecionadas no input </p>
			<p>Range de datas (talvez) </p>
			<p>Hook Forms </p>
			{/* <Section title={translate('DATE')} variant="h2">
				<ComponentBlock>
					<ContainerInput className="w-48">
						<Label>{translate('DATE')}</Label>
						<Datepicker placeholder={translate('DD/MM/YYYY')} id="Date1" />
					</ContainerInput>
				</ComponentBlock>
			</Section> */}
			{/* <Section title="Datepicker" variant="h1">
				{`${translate('IMPLEMENTS_COMPONENT')} Datepicker ${translate(
					'USING_THE_LIB'
				)} react-datepicker`}
			</Section>

			<Section title={translate('INSTALLATION_OF_LIB')} variant="h2">
				<CodeBlock>npm i react-datepicker;</CodeBlock>
			</Section>

			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2 bg-dark-400">
					<QuickAccessGithub name="Datepicker" />
				</div>
			</Section>

			<Section title={translate('DATE')} variant="h2">
				<ComponentBlock>
					<ContainerInput className="w-48">
						<Label>{translate('DATE')}</Label>
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

			<Section title={translate('ERRORS')} variant="h2">
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

			<Section
				title={`Focus - ${translate('UNDER_CONSTRUCTION')}`}
				variant="h2"
			>
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
			</Section> */}
		</Main>
	);
}

// Arrumar o focus
