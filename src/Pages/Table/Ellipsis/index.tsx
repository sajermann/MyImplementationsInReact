import { useEffect, useMemo, useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';

import { Table } from '~/Components/Table';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TPerson } from '~/Types/TPerson';
import { makeData } from '~/Utils/MakeData';
import { useColumns } from '~/Hooks/UseColumns';
import { Main } from '~/Components/Main';
import { Section } from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';

export function EllipsisPage() {
	const { translate } = useTranslation();
	const [data, setData] = useState<TPerson[]>([]);

	const { columns } = useColumns();

	const columns2 = useMemo<ColumnDef<TPerson>[]>(
		() => [
			{
				accessorKey: 'friends',
				accessorFn: e => e.friends.map(item => item.name).join(' | '),
				header: translate('FRIENDS'),
				minSize: 50,
				size: 50,
				cell: info => info.getValue(),
			},
		],
		[translate],
	);

	useEffect(() => {
		setData(makeData.person(5));
	}, []);

	return (
		<Main data-content="content-main">
			<Section title={translate('ELLIPSIS')} variant="h1">
				{translate('IMPLEMENTS_ELLIPSIS_MODE')}
			</Section>
			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2 bg-dark-400">
					<QuickAccessGithub name="Ellipsis" />
				</div>
			</Section>
			<Section title={translate('IMPLEMENTS')} variant="h2">
				<div className="flex flex-col gap-2">
					{translate('DISPLAY_TITLE_ONLY_HOVER_ON_ELLIPSIS')}
					<Table columns={[...columns2, ...columns]} data={data} />
				</div>
			</Section>
		</Main>
	);
}
