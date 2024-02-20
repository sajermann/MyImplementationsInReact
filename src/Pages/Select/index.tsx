import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import { ComponentBlock } from '~/Components/ComponentBlock';
import { Section } from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { useMemo, useRef, useState } from 'react';
import { Select } from '~/Components/Select';
import { TVehicle } from '~/Types/TVehicle';
import { delay } from '@sajermann/utils/Delay';
import { makeData } from '~/Utils/MakeData';
import { CodeBlock } from '~/Components/CodeBlock';
import { ContainerInput } from '~/Components/ContainerInput';
import { Label } from '~/Components/Label';
import { Button } from '~/Components/Button';
import { ErrorsInput } from '~/Components/ErrorsInput';
import { Checkbox } from '~/Components/Checkbox';

export function SelectPage() {
	const { translate, currentLanguage } = useTranslation();
	const OPTIONS = useMemo<TVehicle[]>(
		() => [
			{ id: '1', value: 'car', label: translate('CAR'), price: 0 },
			{ id: '2', value: 'bus', label: translate('BUS'), price: 0 },
			{ id: '3', value: 'train', label: translate('TRAIN'), price: 0 },
			{ id: '4', value: 'airplane', label: translate('AIRPLANE'), price: 0 },
		],
		[currentLanguage]
	);
	const [isLoading, setIsLoading] = useState(false);
	const [valueControlledSingle, setValueControlledSingle] =
		useState<TVehicle | null>(OPTIONS[1]);
	const [asyncValueSingle, setAsyncValueSingle] = useState<TVehicle | null>(
		null
	);
	const [asyncOptionsSingle, setAsyncOptionsSingle] = useState<TVehicle[]>([]);
	const [valueControlledMulti, setValueControlledMulti] = useState<TVehicle[]>(
		[]
	);
	const [asyncOptionsMulti, setAsyncOptionsMulti] = useState<TVehicle[]>([]);
	const [asyncValueMulti, setAsyncValueMulti] = useState<TVehicle[]>([]);
	const [errorMode, setErrorMode] = useState(false);
	const ref = useRef<HTMLSelectElement>(null);

	async function loadDataSingle(textFilter: string) {
		setIsLoading(true);
		await delay(2000);
		setIsLoading(false);
		const result = makeData.vehicles(1000);
		const resultFiltred = result.filter(item =>
			item.label.toLowerCase().includes(textFilter.toLowerCase())
		);
		setAsyncOptionsSingle(resultFiltred);
	}

	async function loadDataMult(textFilter: string) {
		setIsLoading(true);
		await delay(2000);
		setIsLoading(false);

		const oldSelecteds: TVehicle[] = [];

		for (const selected of asyncValueMulti) {
			const result = asyncOptionsMulti.find(item => item === selected);
			if (result) {
				oldSelecteds.push(result);
			}
		}

		const result = makeData.vehicles(1000);
		const resultFiltred = result.filter(item =>
			item.label.toLowerCase().includes(textFilter.toLowerCase())
		);
		setAsyncOptionsMulti([...oldSelecteds, ...resultFiltred]);
	}

	function filter(textFilter: string, isMulti?: true) {
		if (textFilter === '') return;
		if (isMulti) {
			loadDataMult(textFilter);
			return;
		}
		loadDataSingle(textFilter);
	}

	return (
		<Main data-content="content-main">
			<Section title="Select" variant="h1">
				{`${translate('IMPLEMENTS_COMPONENT')} Select ${translate(
					'USING_THE_LIB'
				)} react-select`}
			</Section>

			<Section title={translate('INSTALLATION_OF_LIB')} variant="h2">
				<CodeBlock>npm i react-select;</CodeBlock>
			</Section>

			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2 bg-dark-400">
					<QuickAccessGithub name="Select" />
				</div>
			</Section>

			<Section title={translate('SINGLE_SELECTION')} variant="h2">
				<ComponentBlock>
					<ContainerInput>
						<Label htmlFor="vehicle">{translate('VEHICLES')}</Label>
						<Select
							placeholder={translate('CHOOSE_VEHICLE')}
							id="vehicle"
							isClearable
							options={OPTIONS}
							onChange={console.log}
							menuPosition="fixed"
						/>
					</ContainerInput>
				</ComponentBlock>
			</Section>

			<Section title={translate('CONTROLLED')} variant="h2">
				<ComponentBlock>
					<ContainerInput>
						<Label htmlFor="controlled1">{translate('CONTROLLED')}</Label>
						<Select
							id="controlled1"
							isClearable
							options={OPTIONS}
							placeholder={translate('CHOOSE_VEHICLE')}
							onChange={setValueControlledSingle}
							menuPosition="fixed"
							value={valueControlledSingle}
						/>
					</ContainerInput>

					<ContainerInput>
						<Label htmlFor="controlled2">{translate('CONTROLLED')}</Label>
						<Select
							id="controlled2"
							isClearable
							options={OPTIONS}
							placeholder={translate('CHOOSE_VEHICLE')}
							onChange={setValueControlledSingle}
							menuPosition="fixed"
							value={valueControlledSingle}
						/>
					</ContainerInput>
				</ComponentBlock>
			</Section>

			<Section title={translate('SEARCHABLE')} variant="h2">
				<ComponentBlock>
					<ContainerInput>
						<Label htmlFor="searchable1">{translate('NOT_SEARCHABLE')}</Label>
						<Select
							id="searchable1"
							options={OPTIONS}
							placeholder={translate('CHOOSE_VEHICLE')}
							menuPosition="fixed"
							isSearchable={false}
						/>
					</ContainerInput>

					<ContainerInput>
						<Label htmlFor="searchable2">{translate('SEARCHABLE')}</Label>
						<Select
							id="searchable2"
							options={OPTIONS}
							placeholder={translate('CHOOSE_VEHICLE')}
							menuPosition="fixed"
						/>
					</ContainerInput>
				</ComponentBlock>
			</Section>

			<Section title={translate('CLEARABLE')} variant="h2">
				<ComponentBlock>
					<ContainerInput>
						<Label htmlFor="clearable1">{translate('NOT_CLEARABLE')}</Label>
						<Select
							id="clearable1"
							options={OPTIONS}
							placeholder={translate('CHOOSE_VEHICLE')}
							menuPosition="fixed"
						/>
					</ContainerInput>

					<ContainerInput>
						<Label htmlFor="clearable2">{translate('CLEARABLE')}</Label>
						<Select
							id="clearable2"
							isClearable
							options={OPTIONS}
							placeholder={translate('CHOOSE_VEHICLE')}
							onChange={console.log}
							menuPosition="fixed"
						/>
					</ContainerInput>
				</ComponentBlock>
			</Section>

			<Section title={translate('ASYNC')} variant="h2">
				<ComponentBlock>
					<ContainerInput>
						<Label htmlFor="async1">{translate('DEBOUNCE_ONE_SECOND')}</Label>
						<Select
							id="async1"
							isClearable
							async={{
								callback: filter,
								debounce: 1000,
							}}
							isLoading={isLoading}
							options={asyncOptionsSingle}
							value={asyncValueSingle}
							onChange={setAsyncValueSingle}
							placeholder={translate('TYPE_AND_WAIT')}
							menuPosition="fixed"
							menuPortalTarget={document.body}
						/>
					</ContainerInput>

					<ContainerInput>
						<Label htmlFor="async2">{translate('MIN_LENGTH')}</Label>
						<Select
							id="async2"
							isClearable
							async={{
								callback: filter,
								debounce: 1000,
								minLength: 3,
							}}
							isLoading={isLoading}
							options={asyncOptionsSingle}
							value={asyncValueSingle}
							onChange={setAsyncValueSingle}
							placeholder={translate('MIN_THREE_CHARACTER')}
							menuPosition="fixed"
							menuPortalTarget={document.body}
						/>
					</ContainerInput>
				</ComponentBlock>
			</Section>

			<Section title={translate('ERRORS')} variant="h2">
				<ComponentBlock className="flex-row !items-start">
					<ContainerInput className="flex-1">
						<Label htmlFor="errorMode" isError={errorMode}>
							{translate('ERROR_MODE')}
						</Label>
						<Select
							isLoading={isLoading}
							id="errorMode"
							isClearable
							options={asyncOptionsMulti}
							placeholder={translate('ERROR_MODE')}
							menuPosition="fixed"
							iserror={errorMode}
						/>
						<ErrorsInput errors={errorMode ? ['Required'] : undefined} />
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

			<Section title="Focus" variant="h2">
				<ComponentBlock className="flex-row !items-end">
					<ContainerInput className="flex-1">
						<Label htmlFor="focus">{translate('Ref - Focus')}</Label>
						<Select
							innerRef={ref}
							isLoading={isLoading}
							id="focus"
							isClearable
							options={asyncOptionsMulti}
							placeholder="Focus"
							menuPosition="fixed"
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

			<Section
				title="Multi Select"
				// subHeading={translate('CONTROLLED')}
				variant="h1"
			>
				<ComponentBlock>
					<ContainerInput>
						<Label htmlFor="multi1">{translate('VEHICLES')}</Label>
						<Select
							id="multi1"
							isClearable
							options={OPTIONS}
							placeholder={translate('CHOOSE_VEHICLE')}
							menuPosition="fixed"
							isMulti
							value={valueControlledMulti}
							onChange={e => {
								setValueControlledMulti(e as TVehicle[]);
							}}
						/>
					</ContainerInput>
				</ComponentBlock>
			</Section>

			<Section title={translate('ASYNC')} variant="h2">
				<ComponentBlock>
					<ContainerInput>
						<Label htmlFor="async3">{translate('DEBOUNCE_ONE_SECOND')}</Label>
						<Select
							isLoading={isLoading}
							id="async3"
							isClearable
							options={asyncOptionsMulti}
							placeholder={translate('TYPE_AND_WAIT')}
							menuPosition="fixed"
							isMulti
							value={asyncValueMulti}
							onChange={e => setAsyncValueMulti(e as TVehicle[])}
							async={{
								callback: e => filter(e, true),
								debounce: 1000,
							}}
						/>
					</ContainerInput>

					<ContainerInput>
						<Label htmlFor="async4">{translate('MIN_LENGTH')}</Label>
						<Select
							isLoading={isLoading}
							id="async4"
							isClearable
							options={asyncOptionsMulti}
							placeholder={translate('MIN_THREE_CHARACTER')}
							menuPosition="fixed"
							isMulti
							value={asyncValueMulti}
							onChange={e => setAsyncValueMulti(e as TVehicle[])}
							async={{
								callback: e => filter(e, true),
								debounce: 1000,
								minLength: 3,
							}}
						/>
					</ContainerInput>
				</ComponentBlock>
			</Section>
		</Main>
	);
}
