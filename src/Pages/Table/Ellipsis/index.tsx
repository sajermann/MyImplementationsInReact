import { useEffect, useMemo, useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';

import { Table } from '~/Components/Table';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TPerson } from '~/Types/TPerson';
import { makeData } from '~/Utils/MakeData';
import { useColumns } from '~/Hooks/UseColumns';

export default function Ellipsis() {
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
				align: 'left',
				cell: info => info.getValue(),
			},
		],
		[translate]
	);

	useEffect(() => {
		setData(makeData.person(5));
	}, []);

	return (
		<div className="p-4 flex flex-col gap-2">
			{translate('DISPLAY_TITLE_ONLY_HOVER_ON_ELLIPSIS')}
			<Table columns={[...columns2, ...columns]} data={data} />
		</div>
	);
}
