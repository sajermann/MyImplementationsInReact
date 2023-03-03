import { useEffect, useState } from 'react';
import { Table } from '~/Components/Table';
import { useColumns } from '~/Hooks/UseColumns';

import { TPerson } from '~/Types/TPerson';
import { makeData } from '~/Utils/MakeData';

export function TableDemo() {
	const [data, setData] = useState<TPerson[]>([]);
	const { columns } = useColumns();

	useEffect(() => {
		setData(makeData.person(5));
	}, []);

	return (
		<div className="">
			<Table
				maxHeight="192px"
				columns={[{ ...columns[0] }, { ...columns[1] }, { ...columns[2] }]}
				data={data}
			/>
		</div>
	);
}
