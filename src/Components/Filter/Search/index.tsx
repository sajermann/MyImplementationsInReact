import { ChangeEvent, useState } from 'react';

import { useTranslation } from '~/Hooks/UseTranslation';
import { objectToQuery } from '~/Utils/ObjectToQuery';
import { Button } from '~/Components/Button';
import { Input } from '~/Components/Input';
import { Select } from '~/Components/Select';
import { ContainerInput } from '~/Components/ContainerInput';
import { Label } from '~/Components/Label';

const DEFAULT_FILTER = {
	name: '',
	isActive: '',
};

export function Search({
	filterParams,
	setFilterParams,
	isLoading,
}: {
	filterParams: string;
	setFilterParams: (data: string) => void;
	isLoading?: boolean;
}) {
	const [filter, setFilter] = useState({ ...DEFAULT_FILTER });
	const { translate } = useTranslation();

	const DEFAULT_OPTIONS = [
		{
			value: 'no',
			label: translate('NO'),
		},
		{
			value: 'yes',
			label: translate('YES'),
		},
	];

	function handleSave() {
		setFilterParams(objectToQuery(filter));
	}

	function handleClearFilter() {
		setFilter({ ...DEFAULT_FILTER });
		setFilterParams('');
	}

	function handleInput(e: ChangeEvent<HTMLInputElement>) {
		const { id, value } = e.target;
		setFilter(prev => ({ ...prev, [id]: value }));
	}

	return (
		<div className="w-full grid grid-cols-12 gap-6">
			<ContainerInput className="col-span-12 sm:col-span-4">
				<Label htmlFor="name">{translate('NAME')}</Label>
				<Input
					placeholder={translate('NAME')}
					id="name"
					value={filter.name}
					onChange={e => setFilter({ ...filter, name: e.target.value })}
				/>
			</ContainerInput>
			<ContainerInput className="col-span-12 sm:col-span-4">
				<Label htmlFor="isActive">{translate('IS_ACTIVE')}</Label>
				<Select
					id="isActive"
					menuPosition="fixed"
					menuPortalTarget={document.body}
					placeholder={translate('IS_ACTIVE')}
					isSearchable={false}
					value={
						DEFAULT_OPTIONS.find(item => item.value === filter.isActive)?.value
					}
					options={DEFAULT_OPTIONS}
					onChange={e => handleInput(e as ChangeEvent<HTMLInputElement>)}
				/>
			</ContainerInput>
			<div className="col-span-12 sm:col-span-4 flex items-end justify-center gap-2">
				<Button
					variant="outlined"
					disabled={filterParams === '' || isLoading}
					onClick={handleClearFilter}
				>
					{translate('CLEAR')}
				</Button>
				<Button disabled={isLoading} onClick={handleSave}>
					{translate('FILTER')}
				</Button>
			</div>
		</div>
	);
}
