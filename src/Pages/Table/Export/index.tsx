import { useEffect, useMemo, useState } from 'react';

import { Table } from '~/Components/Table';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TPerson } from '~/Types/TPerson';
import { makeData } from '~/Utils/MakeData';
import { useColumns } from '~/Hooks/UseColumns';
import { Button } from '~/Components/Button';
import { formatDate } from '@sajermann/utils/FormatDate';
import { DefProps, exportTo } from '~/Utils/Export';
import { Icons } from '~/Components/Icons';
import { Input } from '~/Components/Input';
import { Main } from '~/Components/Main';
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { WarningInfo } from '~/Components/WarningInfo';

export function ExportPage() {
	const { translate } = useTranslation();
	const [data, setData] = useState<TPerson[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [globalFilter, setGlobalFilter] = useState('');

	const { columns } = useColumns();

	async function load() {
		setIsLoading(true);
		setData(makeData.person(100));
		setIsLoading(false);
	}

	useEffect(() => {
		load();
	}, []);

	const headerStyles = {
		font: {
			patternType: 'solid',
			color: { rgb: 'FFFFFF' },
			bold: true,
		},
		fill: {
			patternType: 'solid',
			fgColor: { rgb: '000' },
		},
	};

	const defForExcel = useMemo<DefProps<TPerson>[]>(
		() => [
			{
				header: 'Id',
				styleHeaderCellFn: () => headerStyles,
				accessor: 'id',
			},
			{
				header: 'Avatar',
				styleHeaderCellFn: () => headerStyles,
				accessor: 'avatar',
			},
			{
				header: translate('NAME'),
				styleHeaderCellFn: () => headerStyles,
				accessor: 'name',
			},
			{
				header: translate('LAST_NAME'),
				styleHeaderCellFn: () => headerStyles,
				accessor: 'lastName',
			},
			{
				header: translate('BIRTHDAY'),
				styleHeaderCellFn: () => headerStyles,
				accessor: 'birthday',
				accessorFn: ({ valueCell }) =>
					formatDate(new Date(valueCell as string)),
			},
			{
				header: 'Email',
				styleHeaderCellFn: () => headerStyles,
				accessor: 'email',
			},
			{
				header: 'Role',
				styleHeaderCellFn: () => headerStyles,
				accessor: 'role',
			},
			{
				header: translate('ACTIVE'),
				styleHeaderCellFn: () => headerStyles,
				accessor: 'isActive',
				accessorFn: ({ valueCell }) =>
					(valueCell as string) ? translate('YES') : translate('NO'),
				styleCellFn: ({ row }) => ({
					font: {
						patternType: 'solid',
						color: { rgb: 'FFFFFF' },
						bold: true,
					},
					fill: {
						patternType: 'solid',
						fgColor: { rgb: row.isActive ? '228B22' : 'DC143C' },
					},
				}),
			},
			{
				header: translate('FRIENDS'),
				styleHeaderCellFn: () => headerStyles,
				accessor: 'friends',
				accessorFn: ({ valueCell }) =>
					(valueCell as { name: string }[]).map(item => item.name).join(' | '),
			},
		],
		[translate]
	);

	return (
		<Main data-content="content-main">
			<WarningInfo
				type="warning"
				msg={translate('IMPLEMENTS_UNDER_CONSTRUCTION')}
			/>
			<Section heading={translate('EXPORT')}>
				{translate('IMPLEMENTS_EXPORT_MODE')}
			</Section>
			<Section subHeading={translate('CODES')}>
				<div className="flex gap-2">
					<QuickAccessGithub name="Export" />
				</div>
			</Section>
			<Section subHeading={translate('IMPLEMENTS')}>
				<div className="flex flex-col gap-2">
					<div className="flex flex-col gap-2 w-full">
						<div className="grid grid-cols-12 gap-2 w-full">
							<div className="col-span-6">
								<Input
									value={globalFilter ?? ''}
									onChange={e => setGlobalFilter(e.target.value)}
									placeholder={translate('SEARCH_ALL_COLUMNS...')}
									type="search"
								/>
							</div>

							<div className="col-span-6">
								<div className="flex gap-2 justify-end">
									<Button
										onClick={() =>
											exportTo.excel({ data, defColumns: defForExcel })
										}
										startIcon={<Icons.Excel />}
									>
										Excel
									</Button>
									<Button
										onClick={() =>
											exportTo.csv({ data, defColumns: defForExcel })
										}
										startIcon={<Icons.Csv />}
									>
										Csv
									</Button>
								</div>
							</div>
						</div>
					</div>

					<Table
						isLoading={isLoading}
						columns={columns}
						data={data}
						globalFilter={{
							filter: globalFilter,
							setFilter: setGlobalFilter,
						}}
					/>
				</div>
			</Section>
		</Main>
	);
}
