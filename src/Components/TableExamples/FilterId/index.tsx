import { useState } from 'react';
import { Column } from '@tanstack/react-table';

import { Button } from '~/Components/Button';
import { Icons } from '~/Components/Icons';
import { Input } from '~/Components/Input';
import { Popover } from '~/Components/Popover';
import { Select } from '~/Components/Select';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TPerson } from '~/Types/TPerson';

export function FilterId({ column }: { column: Column<TPerson, string> }) {
	const { translate } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const [selectType, setSelectType] = useState('');
	const [filterValue, setFilterValue] = useState('');
	const options = [
		{ value: 'equals', label: translate('EQUAL') },
		{ value: 'bigger', label: translate('BIGGER_THAN') },
		{ value: 'smaller', label: translate('SMALLER_THAN') },
	];

	function verifyFillFilter() {
		const filterValueTemp = column.getFilterValue() as string[];
		if (
			!filterValueTemp ||
			filterValueTemp[0] === '' ||
			filterValueTemp[1] === ''
		) {
			return false;
		}
		return true;
	}

	return (
		<Popover
			isOpen={isOpen}
			onClose={() => setIsOpen(false)}
			trigger={
				<button
					className="w-5 h-4 flex items-center justify-center"
					type="button"
					onClick={() => setIsOpen(true)}
				>
					<Icons nameIcon="Funnel" fullFill={verifyFillFilter()} />
				</button>
			}
		>
			<>
				<div className="flex flex-col gap-4">
					<div className="w-48">
						<Select
							isClearable
							options={options}
							value={options.find(item => item.value === selectType)?.value}
							onChange={e => setSelectType(e.target.value)}
							id="select_type"
							placeholder={translate('FILTER_TYPE')}
						/>
					</div>
					<div className="w-48">
						<Input
							placeholder={translate('TYPE_VALUE_FOR_FILTER')}
							onChange={e => setFilterValue(e.target.value)}
							value={filterValue}
						/>
					</div>
				</div>

				<div className="w-full flex justify-center gap-4 mt-4">
					<Button
						style={{ width: '50px', height: '50px', borderRadius: '50%' }}
						colorStyle="Secondary"
						variant="Outlined"
						type="button"
						onClick={() => {
							setSelectType('');
							setFilterValue('');
						}}
						endIcon={<Icons nameIcon="Trash" />}
					/>

					<Button
						style={{ width: '50px', height: '50px', borderRadius: '50%' }}
						colorStyle="Primary"
						variant="Outlined"
						type="button"
						onClick={() => {
							column.setFilterValue([selectType, filterValue]);
							setIsOpen(false);
						}}
						endIcon={<Icons nameIcon="Save" />}
					/>
				</div>
			</>
		</Popover>
	);
}
