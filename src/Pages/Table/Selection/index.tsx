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
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';

export function SelectionPage() {
	const { translate } = useTranslation();
	const [data, setData] = useState<TPerson[]>([]);
	const [selectedItems, setSelectedItems] = useState({});
	const [selectionType, setSelecitonType] = useState<'single' | 'multi'>(
		'single'
	);
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

	const OPTIONS_LIST = [
		{ value: 'multi', label: translate('MULTI') },
		{ value: 'single', label: translate('SINGLE') },
	];

	return (
		<Main data-content="content-main">
			<Section heading={translate('SELECTION')}>
				{translate('IMPLEMENTS_SELECTION_MODE')}
			</Section>
			<Section subHeading={translate('CODES')}>
				<div className="flex gap-2">
					<QuickAccessGithub name="Selection" />
				</div>
			</Section>
			<Section subHeading={translate('IMPLEMENTS')}>
				<div className="flex flex-col gap-2">
					<div className="grid grid-cols-12 gap-2">
						<div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 2xl:col-span-3">
							<div className="flex items-center gap-2">
								<div className="whitespace-nowrap ">
									{translate('SELECTION_TYPE')}
								</div>
								<Select
									isSearchable={false}
									menuPosition="fixed"
									menuPortalTarget={document.body}
									defaultValue={
										OPTIONS_LIST.find(item => item.value === selectionType)
											?.value
									}
									options={OPTIONS_LIST}
									onChange={e =>
										setSelecitonType(e.target.value as 'single' | 'multi')
									}
								/>
							</div>
						</div>
						<div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 2xl:col-span-3">
							<Input
								placeholder="Id"
								id="disableSelection"
								containerProps={{
									className: 'flex !flex-row items-center',
								}}
								labelProps={{
									className: 'm-0 mr-2',
								}}
								label={translate('DISABLE_SELECTION_WHEN_ID_GREATER_THAN')}
								className="flex-1"
								value={disableSelectionForId}
								onChange={e => setDisableSelectionForId(e.target.value)}
							/>
						</div>
						<div className="col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-4 2xl:col-span-6">
							<Input
								value={globalFilter ?? ''}
								onChange={e => setGlobalFilter(e.target.value)}
								placeholder={translate('SEARCH_ALL_COLUMNS...')}
								type="search"
							/>
						</div>
					</div>
					<Table
						columns={columns}
						data={data}
						selection={{
							rowSelection: selectedItems,
							setRowSelection: setSelectedItems,
							type: selectionType,
							disableSelectionRow:
								disableSelectionForId !== '' ? verifyForDisable : undefined,
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
