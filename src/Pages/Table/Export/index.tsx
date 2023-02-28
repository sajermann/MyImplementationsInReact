import { useEffect, useMemo, useState } from 'react';

import { Table } from '~/Components/Table';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TPerson } from '~/Types/TPerson';
import { makeData } from '~/Utils/MakeData';
import { useColumns } from '~/Hooks/UseColumns';
import { formatDate } from '@sajermann/utils/FormatDate';
import { Main } from '~/Components/Main';
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { TDefXlsx, TDefPrintPdfPng, TDefCsv } from '~/Types/TExport';

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

	const defForExcel = useMemo<TDefXlsx<TPerson>[]>(
		() => [
			{
				header: 'Id',
				styleHeaderCellFn: () => headerStyles,
				accessor: 'id',
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

	const defForCsvAndXml = useMemo<TDefCsv<TPerson>[]>(
		() => [
			{
				header: 'Id',
				accessor: 'id',
			},
			{
				header: translate('NAME'),
				accessor: 'name',
			},
			{
				header: translate('LAST_NAME'),
				accessor: 'lastName',
			},
			{
				header: translate('BIRTHDAY'),
				accessor: 'birthday',
				accessorFn: ({ valueCell }) =>
					formatDate(new Date(valueCell as string)),
			},
			{
				header: 'Email',
				accessor: 'email',
			},
			{
				header: 'Role',
				accessor: 'role',
			},
			{
				header: translate('ACTIVE'),
				accessor: 'isActive',
				accessorFn: ({ valueCell }) =>
					(valueCell as string) ? translate('YES') : translate('NO'),
			},
			{
				header: translate('FRIENDS'),
				accessor: 'friends',
				accessorFn: ({ valueCell }) =>
					(valueCell as { name: string }[]).map(item => item.name).join(' | '),
			},
		],
		[translate]
	);

	const defForPrintAndPdfAndPng = useMemo<TDefPrintPdfPng<TPerson>[]>(
		() => [
			{
				header: 'Id',
				accessor: 'id',
			},
			{
				header: translate('NAME'),
				accessor: 'name',
			},
			{
				header: translate('LAST_NAME'),
				accessor: 'lastName',
			},
			{
				header: translate('BIRTHDAY'),
				accessor: 'birthday',
				accessorFn: ({ valueCell }) =>
					formatDate(new Date(valueCell as string)),
				align: 'center',
			},
			{
				header: 'Email',
				accessor: 'email',
			},
			{
				header: 'Role',
				accessor: 'role',
				align: 'center',
			},
			{
				header: translate('ACTIVE'),
				accessor: 'isActive',
				accessorFn: ({ valueCell }) =>
					(valueCell as string) ? translate('YES') : translate('NO'),
				align: 'center',
			},
			{
				header: translate('FRIENDS'),
				accessor: 'friends',
				accessorFn: ({ valueCell }) =>
					(valueCell as { name: string }[]).map(item => item.name).join(' | '),
				cellRender: dataT => `
					<div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 50%; height: 100%;">
						${dataT.valueCell}
					</div>
					`,
			},
		],
		[translate]
	);

	return (
		<Main data-content="content-main">
			<Section heading={translate('EXPORT')}>
				{translate('IMPLEMENTS_EXPORT_MODE')}
			</Section>
			<Section subHeading={translate('CODES')}>
				<div className="flex gap-2">
					<QuickAccessGithub name="Export" />
				</div>
			</Section>
			<Section subHeading={translate('IMPLEMENTS')}>
				<Table
					isLoading={isLoading}
					columns={columns}
					data={data}
					globalFilter={{
						filter: globalFilter,
						setFilter: setGlobalFilter,
					}}
					tools={{
						defForCsv: defForCsvAndXml,
						defForExcel,
						defForPrint: defForPrintAndPdfAndPng,
						defForPdf: defForPrintAndPdfAndPng,
						defForPng: defForPrintAndPdfAndPng,
						defForXml: defForCsvAndXml,
					}}
				/>
			</Section>
		</Main>
	);
}
