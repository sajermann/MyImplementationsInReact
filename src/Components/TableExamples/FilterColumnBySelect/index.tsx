import { useState } from 'react';
import { Column, Table as TTable } from '@tanstack/react-table';

import { Button } from '~/Components/Button';
import { Icons } from '~/Components/Icons';
import { Popover } from '~/Components/Popover';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TPerson } from '~/Types/TPerson';
import { Select } from '~/Components/Select';

type Props2 = {
	column: Column<TPerson, string>;
	table: TTable<TPerson>;
	propForFilter: keyof TPerson;
};

export function FilterColumnBySelect({ column, table, propForFilter }: Props2) {
	const { translate } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const [filterValue, setFilterValue] = useState<string[]>([]);

	function getProps() {
		const myRows = table.getRowModel().rows.map(item => item.original);
		return myRows.map(item => ({
			value: item[propForFilter],
			label: item[propForFilter],
		}));
	}

	function verifyFillFilter() {
		const filterValueTemp = column.getFilterValue();
		if (!filterValueTemp || (filterValueTemp as string[]).length === 0) {
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
				<Select
					placeholder={translate('FILTER')}
					menuPosition="fixed"
					menuPortalTarget={document.body}
					options={getProps()}
					isMulti={{
						onChange: e => {
							setFilterValue(e.target.value);
						},
						value: filterValue,
					}}
					id="filter"
				/>

				<div className="w-full flex justify-center gap-4 mt-4">
					<Button
						style={{ width: '50px', height: '50px', borderRadius: '50%' }}
						colorStyle="Secondary"
						variant="Outlined"
						type="button"
						onClick={() => {
							setFilterValue([]);
						}}
						endIcon={<Icons nameIcon="trash" />}
					/>

					<Button
						style={{ width: '50px', height: '50px', borderRadius: '50%' }}
						colorStyle="Primary"
						variant="Outlined"
						type="button"
						onClick={() => {
							column.setFilterValue(filterValue);
							setIsOpen(false);
						}}
						endIcon={<Icons nameIcon="save" />}
					/>
				</div>
			</>
		</Popover>
	);
}
