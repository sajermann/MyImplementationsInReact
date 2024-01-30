import { useState } from 'react';
import { Column } from '@tanstack/react-table';

import { Button } from '~/Components/Button';
import { Icons } from '~/Components/Icons';
import { Input } from '~/Components/Input';
import { Popover } from '~/Components/Popover';
import { Select } from '~/Components/Select';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TPerson } from '~/Types/TPerson';
import { ContainerInput } from '~/Components/ContainerInput';

type TOptionsProps = {
	value: string;
	label: string;
};

export function FilterId({ column }: { column: Column<TPerson, string> }) {
	const { translate } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const [selectType, setSelectType] = useState<TOptionsProps | null>(null);
	const [filterValue, setFilterValue] = useState('');
	const OPTIONS: TOptionsProps[] = [
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
					<Icons nameIcon="funnel" fullFill={verifyFillFilter()} />
				</button>
			}
		>
			<>
				<div className="flex flex-col gap-4">
					<div className="w-48">
						<ContainerInput>
							<Select
								isClearable
								options={OPTIONS}
								value={OPTIONS.find(item => item.value === selectType?.value)}
								onChange={setSelectType}
								id="select_type"
								placeholder={translate('FILTER_TYPE')}
							/>
						</ContainerInput>
					</div>
					<div className="w-48">
						<ContainerInput>
							<Input
								placeholder={translate('TYPE_VALUE_FOR_FILTER')}
								onChange={e => setFilterValue(e.target.value)}
								value={filterValue}
							/>
						</ContainerInput>
					</div>
				</div>

				<div className="w-full flex justify-center gap-4 mt-4">
					<Button
						iconButton="rounded"
						colorStyle="secondary"
						variant="outlined"
						onClick={() => {
							setSelectType(null);
							setFilterValue('');
						}}
						endIcon={<Icons nameIcon="trash" />}
					/>

					<Button
						iconButton="rounded"
						variant="outlined"
						onClick={() => {
							column.setFilterValue([selectType?.value, filterValue]);
							setIsOpen(false);
						}}
						endIcon={<Icons nameIcon="save" />}
					/>
				</div>
			</>
		</Popover>
	);
}
