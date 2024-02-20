import { Row } from '@tanstack/react-table';
import { useEffect, useState } from 'react';

import { Table } from '~/Components/Table';
import { useTranslation } from '~/Hooks/UseTranslation';
import { makeData } from '~/Utils/MakeData';
import { Input } from '~/Components/Input';
import { Select } from '~/Components/Select';
import { TPerson } from '~/Types/TPerson';
import { useColumns } from '~/Hooks/UseColumns';
import { Main } from '~/Components/Main';
import { Section } from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { ContainerInput } from '~/Components/ContainerInput';
import { Label } from '~/Components/Label';

type TOptions<T> = {
	value: T;
	label: string;
};

export function SelectionPage() {
	const { translate } = useTranslation();
	const [data, setData] = useState<TPerson[]>([]);
	const [selectedItems, setSelectedItems] = useState({});
	const [selectionType, setSelectionType] = useState<TOptions<
		'single' | 'multi'
	> | null>({
		value: 'single',
		label: translate('SINGLE'),
	});
	const [singleRadio, setSingleRadio] = useState<boolean>(false);
	const [disableSelectionForId, setDisableSelectionForId] = useState('');
	const [globalFilter, setGlobalFilter] = useState('');
	const { columns } = useColumns();

	useEffect(() => {
		setData(makeData.person(50));
	}, []);

	function verifyForDisable(row: Row<TPerson>) {
		if (Number(row.original.id) > Number(disableSelectionForId)) {
			return true;
		}
		return false;
	}

	const OPTIONS_LIST: TOptions<'single' | 'multi'>[] = [
		{ value: 'multi', label: translate('MULTI') },
		{ value: 'single', label: translate('SINGLE') },
	];

	const OPTIONS_LIST_RADIO: TOptions<'true' | 'false'>[] = [
		{ value: 'true', label: translate('YES') },
		{ value: 'false', label: translate('NO') },
	];

	return (
		<Main data-content="content-main">
			<Section title={translate('SELECTION')} variant="h1">
				{translate('IMPLEMENTS_SELECTION_MODE')}
			</Section>
			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2 bg-dark-400">
					<QuickAccessGithub name="Selection" />
				</div>
			</Section>
			<Section title={translate('IMPLEMENTS')} variant="h2">
				<div className="flex flex-col gap-2">
					<div className="grid grid-cols-12 gap-2">
						<ContainerInput className="col-span-12 md:col-span-4 lg:col-span-4">
							<Label className="whitespace-nowrap" htmlFor="selection_type">
								{translate('SELECTION_TYPE')}
							</Label>
							<Select
								id="selection_type"
								isSearchable={false}
								menuPosition="fixed"
								menuPortalTarget={document.body}
								defaultValue={OPTIONS_LIST.find(
									item => item.value === selectionType?.value
								)}
								options={OPTIONS_LIST}
								onChange={e => {
									setSelectionType(e);
									setSelectedItems({});
									if (e?.value === 'multi') {
										setSingleRadio(false);
									}
								}}
							/>
						</ContainerInput>

						<ContainerInput className="col-span-12 md:col-span-3 lg:col-span-4">
							<Label className="whitespace-nowrap" htmlFor="radio_type">
								{translate('RADIO_TYPE')}
							</Label>
							<Select
								id="radio_type"
								isDisabled={selectionType?.value === 'multi'}
								isSearchable={false}
								menuPosition="fixed"
								menuPortalTarget={document.body}
								value={OPTIONS_LIST_RADIO.find(item => {
									const converted = item.value === 'true';
									return converted === singleRadio;
								})}
								options={OPTIONS_LIST_RADIO}
								onChange={e => setSingleRadio(e?.value === 'true')}
							/>
						</ContainerInput>

						<ContainerInput className="col-span-12 md:col-span-5 lg:col-span-4">
							<Label htmlFor="disableSelection">
								{translate('DISABLE_SELECTION_WHEN_ID_GREATER_THAN')}
							</Label>
							<Input
								placeholder="Id"
								id="disableSelection"
								className="flex-1"
								value={disableSelectionForId}
								onChange={e => setDisableSelectionForId(e.target.value)}
							/>
						</ContainerInput>
					</div>
					<Table
						columns={columns}
						data={data}
						selection={{
							rowSelection: selectedItems,
							setRowSelection: setSelectedItems,
							type: selectionType ? selectionType?.value : 'single',
							disableSelectionRow:
								disableSelectionForId !== '' ? verifyForDisable : undefined,
							singleRadio: singleRadio ? true : undefined,
						}}
						globalFilter={{
							filter: globalFilter,
							setFilter: setGlobalFilter,
						}}
					/>
					{translate('SELECTED_ROWS')}: {JSON.stringify(selectedItems, null, 2)}
				</div>
			</Section>
		</Main>
	);
}
