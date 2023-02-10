import { useEffect, useState } from 'react';

import { Checkbox } from '~/Components/Checkbox';
import { Table } from '~/Components/Table';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TPerson } from '~/Types/TPerson';
import { makeData } from '~/Utils/MakeData';
import { useColumns } from '~/Hooks/UseColumns';
import { Main } from '~/Components/Main';
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';

export function ColumnVisibilityPage() {
	const { translate } = useTranslation();
	const [data, setData] = useState<TPerson[]>([]);
	const [hide, setHide] = useState<Record<string, boolean>>({
		id: true,
		avatar: true,
		name: true,
		lastName: true,
		birthday: true,
		email: true,
		role: true,
		isActive: true,
	});

	const { columns } = useColumns();

	useEffect(() => {
		setData(makeData.person(5));
	}, []);

	function handleCheck(e: {
		target: {
			value: boolean | 'indeterminate';
			id: string | undefined;
		};
	}) {
		const { value, id } = e.target;

		setHide(prev => ({ ...prev, [id as string]: value as boolean }));
	}

	const OPTIONS = [
		{
			checked: hide.id,
			id: 'id',
			label: 'Id',
		},
		{
			checked: hide.avatar,
			id: 'avatar',
			label: 'Avatar',
		},
		{
			checked: hide.name,
			id: 'name',
			label: translate('NAME'),
		},
		{
			checked: hide.lastName,
			id: 'lastName',
			label: translate('LAST_NAME'),
		},
		{
			checked: hide.birthday,
			id: 'birthday',
			label: translate('BIRTHDAY'),
		},
		{
			checked: hide.email,
			id: 'email',
			label: 'Email',
		},
		{
			checked: hide.role,
			id: 'role',
			label: translate('ROLE'),
		},
		{
			checked: hide.isActive,
			id: 'isActive',
			label: translate('ACTIVE'),
		},
	];

	return (
		<Main data-content="content-main">
			<Section heading={translate('COLUMN_VISIBILITY')}>
				{translate('IMPLEMENTS_COLUMN_VISIBILITY_MODE')}
			</Section>
			<Section subHeading={translate('CODES')}>
				<div className="flex gap-2">
					<QuickAccessGithub name="ColumnVisibility" />
				</div>
			</Section>
			<Section subHeading={translate('IMPLEMENTS')}>
				<div className="flex flex-col gap-2">
					{translate('COLUMN_VISIBILITY_WITH_STATE_FULLY_CONTROLLED')}

					<div className="flex flex-col justify-center text-center">
						<div>{translate('COLUMNS_VISIBLED')}</div>
						<div className="flex gap-4">
							{OPTIONS.map(item => (
								<Checkbox
									containerProps={{ className: 'items-center' }}
									key={item.id}
									checked={item.checked}
									onCheckedChange={handleCheck}
									id={item.id}
									label={item.label}
								/>
							))}
						</div>
					</div>
					<Table columns={columns} data={data} columnVisibility={hide} />
				</div>
			</Section>
		</Main>
	);
}
