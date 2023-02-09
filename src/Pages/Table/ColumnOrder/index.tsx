import { useEffect, useState } from 'react';

import { BeautifulDnd } from '~/Components/BeautifulDnd';
import { Table } from '~/Components/Table';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TPerson } from '~/Types/TPerson';
import { makeData } from '~/Utils/MakeData';
import { useColumns } from '~/Hooks/UseColumns';
import { Main } from '~/Components/Main';
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';

export default function ColumnOrderPage() {
	const { translate } = useTranslation();
	const [data, setData] = useState<TPerson[]>([]);
	const [columnOrder, setColumnOrder] = useState([
		{ id: 'avatar', content: 'Avatar' },
		{ id: 'id', content: 'Id' },
		{ id: 'name', content: translate('NAME') },
		{ id: 'lastName', content: translate('LAST_NAME') },
		{ id: 'birthday', content: translate('BIRTHDAY') },
		{ id: 'email', content: 'Email' },
		{ id: 'role', content: 'Role' },
		{ id: 'isActive', content: translate('ACTIVE') },
	]);

	const { columns } = useColumns();

	useEffect(() => {
		setData(makeData.person(50));
	}, []);

	return (
		<Main data-content="content-main">
			<Section heading={translate('COLUMNS_ORDER')}>
				{translate('IMPLEMENTS_COLUMNS_ORDER_MODE')}
			</Section>
			<Section subHeading={translate('CODES')}>
				<div className="flex gap-2">
					<QuickAccessGithub name="ColumnOrder" />
				</div>
			</Section>
			<Section subHeading={translate('IMPLEMENTS')}>
				<div>{translate('COLUMN_ORDER_WITH_STATE_FULLY_CONTROLLED')}</div>

				<div className="flex flex-col justify-center items-center">
					<div>{translate('DRAG_AND_DROP_FOR_CHANGE_COLUMN_ORDER')}</div>
					<BeautifulDnd items={columnOrder} setItems={setColumnOrder} />
				</div>
				<Table
					columns={columns}
					data={data}
					columnOrder={columnOrder.map(item => item.id)}
				/>
			</Section>
		</Main>
	);
}
