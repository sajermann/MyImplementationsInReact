import { Dispatch, SetStateAction, useState } from 'react';

import { Button } from '~/Components/Button';
import { Input } from '~/Components/Input';
import { Modal } from '~/Components/Modal';
import { Select } from '~/Components/Select';
import { useTranslation } from '~/Hooks/UseTranslation';
import { generateGuid } from '@sajermann/utils/Random';
import { TFilterActive } from '~/Types/TFilterActive';
import { Chip } from '~/Components/Chip';

type Props = {
	onChange: Dispatch<SetStateAction<TFilterActive[]>>;
};

export function SuperFilter({ onChange }: Props) {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [optionColumnSelected, setOptionColumnSelected] = useState('id');
	const [optionTypeSelected, setOptionTypeSelected] = useState('equals');
	const [valueSelected, setValueSelected] = useState('');
	const [activeFilters, setActiveFilters] = useState<TFilterActive[]>([]);
	const { translate } = useTranslation();

	const optionsColumns = [
		{ value: 'id', label: translate('ID'), type: 'number' },
		{ value: 'lastName', label: translate('LAST_NAME'), type: 'string' },
		{ value: 'role', label: translate('ROLE'), type: 'string' },
	];

	const commonsOptionsType = [
		{ value: 'equals', label: translate('EQUAL') },
		{ value: 'different', label: translate('DIFFERENT') },
	];

	const obj = {
		string: [
			{ value: 'starts', label: translate('STARTS_WITH') },
			{ value: 'ends', label: translate('ENDS_WITH') },
			{ value: 'contains', label: translate('CONTAINS') },
		],
		number: [
			{ value: 'bigger', label: translate('BIGGER_THAN') },
			{ value: 'smaller', label: translate('SMALLER_THAN') },
		],
	};

	const optionsType = [
		...commonsOptionsType,
		...obj[
			(optionsColumns.find(item => item.value === optionColumnSelected)
				?.type as 'string' | 'number') || 'string'
		],
	];

	function handleAddFilter() {
		setActiveFilters(old => [
			...old,
			{
				id: generateGuid(),
				column: optionColumnSelected,
				type: optionTypeSelected,
				value: valueSelected,
				labelColumn: optionsColumns.find(
					item => item.value === optionColumnSelected
				)?.label,
				labelType: optionsType.find(item => item.value === optionTypeSelected)
					?.label,
			},
		]);

		setValueSelected('');
		setOptionColumnSelected('id');
		setOptionTypeSelected('equals');
	}

	function handleSave() {
		onChange([...activeFilters]);
		setIsOpenModal(false);
	}

	function handleRemoveFilter(id: string) {
		setActiveFilters(old =>
			old.filter(
				item => `${item.labelColumn} ${item.labelType} - ${item.value}` !== id
			)
		);
	}

	return (
		<>
			<Button onClick={() => setIsOpenModal(true)}>
				{translate('SUPER_FILTER')}
			</Button>

			<Modal
				title={translate('CONFIGURE_SUPER_FILTER')}
				contentProps={{
					className: 'w-3/4 h-1/2',
				}}
				isOpen={isOpenModal}
				onClose={() => setIsOpenModal(false)}
			>
				<div className="grid grid-cols-12 gap-4">
					<div className="col-span-12 md:col-span-3">
						<Select
							label={translate('COLUMN')}
							isClearable
							options={optionsColumns}
							value={
								optionsColumns.find(item => item.value === optionColumnSelected)
									?.value
							}
							onChange={e => setOptionColumnSelected(e.target.value)}
							id="select_type"
							placeholder={translate('FILTER_TYPE')}
						/>
					</div>
					<div className="col-span-12 md:col-span-3">
						<Select
							label={translate('TYPE_FILTER')}
							isClearable
							options={optionsType}
							value={
								optionsType.find(item => item.value === optionTypeSelected)
									?.value
							}
							onChange={e => setOptionTypeSelected(e.target.value)}
							id="select_type"
							placeholder={translate('FILTER_TYPE')}
						/>
					</div>
					<div className="col-span-12 md:col-span-3">
						<Input
							id="valueFilter"
							label={translate('VALUE')}
							placeholder={translate('VALUE')}
							value={valueSelected}
							onChange={e => setValueSelected(e.target.value)}
							type={
								optionsColumns.find(item => item.value === optionColumnSelected)
									?.type
							}
						/>
					</div>
					<div className="col-span-3">
						<div className="flex w-full h-full items-end">
							<Button
								onClick={handleAddFilter}
								disabled={
									optionColumnSelected === '' ||
									optionTypeSelected === '' ||
									valueSelected === ''
								}
							>
								{translate('ADD')}
							</Button>
						</div>
					</div>
					<div className="col-span-12">
						{activeFilters.length > 0 && (
							<>
								{translate('ACTIVE_FILTERS')}
								<div className="flex gap-4">
									{activeFilters.map(item => (
										<Chip
											key={item.id}
											value={`${item.labelColumn} ${item.labelType} - ${item.value}`}
											// id={item.id}
											onRemove={handleRemoveFilter}
										/>
									))}
								</div>
							</>
						)}
						{activeFilters.length === 0 && (
							<>{translate('NO_ACTIVE_FILTERS')}</>
						)}
					</div>
					<div className="col-span-12">
						<div className="flex justify-end">
							<Button onClick={handleSave}>{translate('CONFIRM')}</Button>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
}
