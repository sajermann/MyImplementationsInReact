import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import { ComponentBlock } from '~/Components/ComponentBlock';
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { useEffect, useMemo, useState } from 'react';
import { Select } from '~/Components/Select';
import { TVehicle } from '~/Types/TVehicle';
import { delay } from '@sajermann/utils/Delay';
import { makeData } from '~/Utils/MakeData';

export function SelectPage() {
	const { translate, currentLanguage } = useTranslation();
	const [valueControlled, setValueControlled] = useState('train');
	const [asyncValue, setAsyncValue] = useState('');
	const [asyncOptions, setAsyncOptions] = useState<TVehicle[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const OPTION = useMemo<TVehicle[]>(
		() => [
			{ id: '1', value: 'car', label: translate('CAR') },
			{ id: '2', value: 'bus', label: translate('BUS') },
			{ id: '3', value: 'train', label: translate('TRAIN') },
			{ id: '4', value: 'airplane', label: translate('AIRPLANE') },
		],
		[currentLanguage]
	);

	async function loadData() {
		setIsLoading(true);
		await delay(2000);
		const result = makeData.vehicles(20);
		setAsyncOptions(result);
		setIsLoading(false);
	}

	useEffect(() => {
		loadData();
	}, [asyncValue]);

	return (
		<Main data-content="content-main">
			<Section heading="Select">
				{`${translate('IMPLEMENTS_COMPONENT')} Select ${translate(
					'USING_THE_LIB'
				)} react-select`}
			</Section>

			<Section subHeading={translate('CODES')}>
				<div className="flex gap-2">
					<QuickAccessGithub name="Select" />
				</div>
			</Section>

			<Section subHeading={translate('SINGLE')}>
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
					<div className="flex w-full gap-2">
						<Select
							id="vehicle"
							label={translate('VEHICLES')}
							isClearable
							options={OPTION}
							placeholder={translate('CHOOSE_VEHICLE')}
							onChange={e => setValueControlled(e.target.value)}
							menuPosition="fixed"
							value={valueControlled}
						/>
						<Select
							id="vehicle"
							label={translate('VEHICLES')}
							isClearable
							options={OPTION}
							placeholder={translate('CHOOSE_VEHICLE')}
							onChange={e => setValueControlled(e.target.value)}
							menuPosition="fixed"
							value={valueControlled}
						/>
					</div>
				</ComponentBlock>
			</Section>

			<Section subHeading={translate('SEARCHABLE')}>
				<ComponentBlock>
					<div className="flex w-full gap-2">
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
					</div>
				</ComponentBlock>
			</Section>

			<Section subHeading={translate('CLEARABLE')}>
				<ComponentBlock>
					<div className="flex w-full gap-2">
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
					</div>
				</ComponentBlock>
			</Section>

			<Section subHeading={translate('ASYNC')}>
				<ComponentBlock>
					<div className="flex w-full gap-2">
						<Select
							isLoading={isLoading}
							label={translate('NOT_CLEARABLE')}
							options={asyncOptions}
							value={asyncValue}
							placeholder={translate('CHOOSE_VEHICLE')}
							menuPosition="fixed"
						/>
					</div>
				</ComponentBlock>
			</Section>
		</Main>
	);
}
