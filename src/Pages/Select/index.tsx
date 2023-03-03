import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import { ComponentBlock } from '~/Components/ComponentBlock';
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { useMemo, useState } from 'react';
import { Select } from '~/Components/Select';
import { TVehicle } from '~/Types/TVehicle';
import { delay } from '@sajermann/utils/Delay';
import { makeData } from '~/Utils/MakeData';
import { CodeBlock } from '~/Components/CodeBlock';

export function SelectPage() {
	const { translate, currentLanguage } = useTranslation();
	const [isLoading, setIsLoading] = useState(false);
	const [valueControlledSingle, setValueControlledSingle] = useState('train');
	const [asyncValueSingle, setAsyncValueSingle] = useState('');
	const [asyncOptionsSingle, setAsyncOptionsSingle] = useState<TVehicle[]>([]);
	const [valueControlledMulti, setValueControlledMulti] = useState<string[]>(
		[]
	);
	const [asyncOptionsMulti, setAsyncOptionsMulti] = useState<TVehicle[]>([]);
	const [asyncValueMulti, setAsyncValueMulti] = useState<string[]>([]);

	const OPTION = useMemo<TVehicle[]>(
		() => [
			{ id: '1', value: 'car', label: translate('CAR'), price: 0 },
			{ id: '2', value: 'bus', label: translate('BUS'), price: 0 },
			{ id: '3', value: 'train', label: translate('TRAIN'), price: 0 },
			{ id: '4', value: 'airplane', label: translate('AIRPLANE'), price: 0 },
		],
		[currentLanguage]
	);

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
			const result = asyncOptionsMulti.find(item => item.value === selected);
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
			<Section heading="Select">
				{`${translate('IMPLEMENTS_COMPONENT')} Select ${translate(
					'USING_THE_LIB'
				)} react-select`}
			</Section>

			<Section subHeading={translate('INSTALLATION_OF_LIB')}>
				<CodeBlock>npm i react-select;</CodeBlock>
			</Section>

			<Section subHeading={translate('CODES')}>
				<div className="flex gap-2">
					<QuickAccessGithub name="Select" />
				</div>
			</Section>

			<Section subHeading={translate('SINGLE_SELECTION')}>
				<ComponentBlock>
					<Select
						id="vehicle"
						label={translate('VEHICLES')}
						isClearable
						options={OPTION}
						placeholder={translate('CHOOSE_VEHICLE')}
						onChange={console.log}
						menuPosition="fixed"
					/>
				</ComponentBlock>
			</Section>

			<Section subHeading={translate('CONTROLLED')}>
				<ComponentBlock>
					<Select
						id="vehicle"
						label={translate('VEHICLES')}
						isClearable
						options={OPTION}
						placeholder={translate('CHOOSE_VEHICLE')}
						onChange={e => setValueControlledSingle(e.target.value)}
						menuPosition="fixed"
						value={valueControlledSingle}
					/>
					<Select
						id="vehicle"
						label={translate('VEHICLES')}
						isClearable
						options={OPTION}
						placeholder={translate('CHOOSE_VEHICLE')}
						onChange={e => setValueControlledSingle(e.target.value)}
						menuPosition="fixed"
						value={valueControlledSingle}
					/>
				</ComponentBlock>
			</Section>

			<Section subHeading={translate('SEARCHABLE')}>
				<ComponentBlock>
					<Select
						label={translate('NOT_SEARCHABLE')}
						options={OPTION}
						placeholder={translate('CHOOSE_VEHICLE')}
						menuPosition="fixed"
						isSearchable={false}
					/>
					<Select
						label={translate('SEARCHABLE')}
						options={OPTION}
						placeholder={translate('CHOOSE_VEHICLE')}
						menuPosition="fixed"
					/>
				</ComponentBlock>
			</Section>

			<Section subHeading={translate('CLEARABLE')}>
				<ComponentBlock>
					<Select
						label={translate('NOT_CLEARABLE')}
						options={OPTION}
						placeholder={translate('CHOOSE_VEHICLE')}
						menuPosition="fixed"
					/>
					<Select
						id="vehicle"
						label={translate('CLEARABLE')}
						isClearable
						options={OPTION}
						placeholder={translate('CHOOSE_VEHICLE')}
						onChange={console.log}
						menuPosition="fixed"
					/>
				</ComponentBlock>
			</Section>

			<Section subHeading={translate('ASYNC')}>
				<ComponentBlock>
					<Select
						isClearable
						async={{
							callback: filter,
							debounce: 1000,
						}}
						isLoading={isLoading}
						label={translate('DEBOUNCE_ONE_SECOND')}
						options={asyncOptionsSingle}
						value={asyncValueSingle}
						onChange={e => setAsyncValueSingle(e.target.value)}
						placeholder={translate('TYPE_AND_WAIT')}
						menuPosition="fixed"
						menuPortalTarget={document.body}
					/>
					<Select
						isClearable
						async={{
							callback: filter,
							debounce: 0,
							minLength: 3,
						}}
						isLoading={isLoading}
						label={translate('MIN_LENGTH')}
						options={asyncOptionsSingle}
						value={asyncValueSingle}
						onChange={e => setAsyncValueSingle(e.target.value)}
						placeholder={translate('MIN_THREE_CHARACTER')}
						menuPosition="fixed"
						menuPortalTarget={document.body}
					/>
				</ComponentBlock>
			</Section>

			<Section heading="Multi Select" subHeading={translate('CONTROLLED')}>
				<ComponentBlock>
					<Select
						id="vehicle"
						label={translate('VEHICLES')}
						isClearable
						options={OPTION}
						placeholder={translate('CHOOSE_VEHICLE')}
						menuPosition="fixed"
						isMulti={{
							onChange: e => {
								setValueControlledMulti(e.target.value);
							},
							value: valueControlledMulti,
						}}
					/>
				</ComponentBlock>
			</Section>

			<Section subHeading={translate('ASYNC')}>
				<ComponentBlock>
					<Select
						isLoading={isLoading}
						id="vehicle"
						label={translate('DEBOUNCE_ONE_SECOND')}
						isClearable
						options={asyncOptionsMulti}
						placeholder={translate('TYPE_AND_WAIT')}
						menuPosition="fixed"
						isMulti={{
							onChange: e => {
								setAsyncValueMulti(e.target.value);
							},
							value: asyncValueMulti,
						}}
						async={{
							callback: e => filter(e, true),
							debounce: 1000,
						}}
					/>
					<Select
						isLoading={isLoading}
						id="vehicle"
						label={translate('MIN_LENGTH')}
						isClearable
						options={asyncOptionsMulti}
						placeholder={translate('MIN_THREE_CHARACTER')}
						menuPosition="fixed"
						isMulti={{
							onChange: e => {
								setAsyncValueMulti(e.target.value);
							},
							value: asyncValueMulti,
						}}
						async={{
							callback: e => filter(e, true),
							debounce: 0,
							minLength: 3,
						}}
					/>
				</ComponentBlock>
			</Section>
		</Main>
	);
}
