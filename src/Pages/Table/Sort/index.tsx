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

export function SortPage() {
	const { translate } = useTranslation();
	const [data, setData] = useState<TPerson[]>([]);

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

	useEffect(() => {
		setData(makeData.person(10));
	}, []);

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
			<Section subHeading={translate('IMPLEMENTS')}>
				{translate('FRIENDS_IS_ARRAY_OF_OBJECT')}

				<Table columns={[...columns, ...columns2]} data={data} />
			</Section>
		</Main>
	);
}
