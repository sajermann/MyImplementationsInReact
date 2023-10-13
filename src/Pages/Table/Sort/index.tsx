import { useEffect, useMemo, useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Table } from '~/Components/Table';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TPerson } from '~/Types/TPerson';
import { makeData } from '~/Utils/MakeData';
import { useColumns } from '~/Hooks/UseColumns';
import { Main } from '~/Components/Main';
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';

const data = makeData.person(10);

export function SortPage() {
	const [sortingInternal, setSortingInternal] = useState<
		Record<string, unknown>[]
	>([]);
	const { translate } = useTranslation();

	const { columns } = useColumns();

	const columns2 = useMemo<ColumnDef<TPerson>[]>(
		() => [
			{
				accessorKey: 'friends',
				accessorFn: e => e.friends.map(item => item.name).join(' | '),
				header: translate('FRIENDS'),
				minSize: 100,
				size: 200,
				align: 'left',
				cell: info => info.getValue(),
			},
		],
		[translate]
	);

	return (
		<Main data-content="content-main">
			<Section heading={translate('SORT')}>
				{translate('IMPLEMENTS_SORT_MODE')}
			</Section>
			<Section subHeading={translate('CODES')}>
				<div className="flex gap-2">
					<QuickAccessGithub name="Sort" />
				</div>
			</Section>
			<Section subHeading={translate('AUTOMATIC_SORT')}>
				{translate('NOTE_FRIENDS_IS_ARRAY_OF_OBJECT')}

				<Table columns={[...columns, ...columns2]} data={data} />
			</Section>

			<Section subHeading={translate('MANUAL_SORT')}>
				{translate('THIS_IS_USEFUL_IF_YOU_ARE_DOING_SERVER_SIDE_SORTING')}
				<p>State: {JSON.stringify(sortingInternal)}</p>
				<Table
					columns={[...columns, ...columns2]}
					data={[data[0], data[1]]}
					sorting={{
						manualSorting: {
							fn: setSortingInternal,
						},
					}}
				/>
			</Section>

			<Section subHeading={translate('DISABLED_SORT')}>
				<Table
					columns={[...columns, ...columns2]}
					data={[data[0], data[1]]}
					sorting={{
						disabled: true,
					}}
				/>
			</Section>
		</Main>
	);
}
