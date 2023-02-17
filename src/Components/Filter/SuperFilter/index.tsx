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
	globalFilter: TFilterActive[];
	setGlobalFilter: Dispatch<SetStateAction<TFilterActive[]>>;
};

export function SuperFilter({ globalFilter, setGlobalFilter }: Props) {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [optionColumnSelected, setOptionColumnSelected] = useState('id');
	const [optionTypeSelected, setOptionTypeSelected] = useState('equals');
	const [valueSelected, setValueSelected] = useState('');
	const [activeFilters, setActiveFilters] = useState<TFilterActive[]>([]);
	const { translate } = useTranslation();

	const optionsColumns = [
		{ value: 'id', label: translate('ID') },
		{ value: 'name', label: translate('NAME') },
		{ value: 'role', label: translate('ROLE') },
	];

	const optionsType = [
		{ value: 'equals', label: translate('EQUAL') },
		{ value: 'bigger', label: translate('BIGGER_THAN') },
		{ value: 'smaller', label: translate('SMALLER_THAN') },
		{ value: 'different', label: translate('DIFFERENT') },
	];

	function handleAddFilter() {
		setActiveFilters(old => [
			...old,
			{
				id: generateGuid(),
				column: optionColumnSelected,
				type: optionTypeSelected,
				value: valueSelected,
			},
		]);

		setValueSelected('');
		setOptionColumnSelected('id');
		setOptionTypeSelected('equals');
	}

	function handleSave() {
		setGlobalFilter([...activeFilters]);
		setIsOpenModal(false);
	}

	function handleRemoveFilter(id: string) {
		setActiveFilters(old => old.filter(item => item.id !== id));
	}

	return (
		<>
			<Button onClick={() => setIsOpenModal(true)}>
				{translate('SUPER_FILTER')}
			</Button>

			<Modal
				title={translate('CONFIGURE_SUPER_FILTER')}
				width="70%"
				isOpen={isOpenModal}
				onClose={() => setIsOpenModal(false)}
			>
				<div className="grid grid-cols-12 gap-4">
					<div className="col-span-3">
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
					<div className="col-span-3">
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
					<div className="col-span-3">
						<Input
							id="valueFilter"
							label={translate('VALUE')}
							placeholder={translate('VALUE')}
							value={valueSelected}
							onChange={e => setValueSelected(e.target.value)}
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
						{translate('ACTIVE_FILTERS')}
						<div className="flex gap-4">
							{activeFilters.map(item => (
								<Chip
									key={item.id}
									value={`${item.column} ${item.type} ${item.value}`}
									id={item.id}
									onRemove={handleRemoveFilter}
								/>
							))}
						</div>
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
