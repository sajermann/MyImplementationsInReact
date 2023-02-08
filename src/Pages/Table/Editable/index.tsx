import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { formatDate } from '@sajermann/utils/FormatDate';

import { useColumns } from '~/Hooks/UseColumns';
import { Select } from '~/Components/Select';
import { Table } from '~/Components/Table';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TPerson } from '~/Types/TPerson';
import { makeData } from '~/Utils/MakeData';
import { Icons } from '~/Components/Icons';
import { Input } from '~/Components/Input';
import { Datepicker } from '~/Components/Datepicker';
import { ROLES } from '~/Constants/Roles';
import { Checkbox } from '~/Components/Checkbox';
import { Button } from '~/Components/Button';

export default function Editable() {
	const { translate } = useTranslation();
	const [data, setData] = useState<TPerson[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [updateLine, setUpdateLine] = useState<null | {
		row: number;
		data: TPerson;
	}>(null);

	const { columns } = useColumns();

	function handleInput(e: ChangeEvent<HTMLInputElement>) {
		const { id, value } = e.target;
		if (!updateLine) return;
		setUpdateLine(prev => {
			if (!prev) return null;
			return { ...prev, data: { ...prev?.data, [id]: value } };
		});
	}

	function handleSave() {
		if (!updateLine) return;
		const newData = [...data];
		newData[updateLine.row] = { ...updateLine.data };
		setData([...newData]);
		setUpdateLine(null);
	}

	const columnsInternal = useMemo<ColumnDef<TPerson>[]>(
		() => [
			{
				accessorKey: 'id_action',
				header: translate('ACTIONS'),
				minSize: 100,
				size: 100,
				align: 'center',
				cell: info => (
					<div className="w-full flex items-center justify-center">
						<Button
							style={{ minWidth: '50px', height: '50px', borderRadius: '50%' }}
							disabled={isLoading}
							type="button"
							onClick={() =>
								setUpdateLine({
									row: info.row.index,
									data: { ...info.row.original },
								})
							}
						>
							<div className="w-7">
								<Icons.Pen />
							</div>
						</Button>
					</div>
				),
				cellEdit: () => (
					<div className="w-full flex items-center justify-center gap-2">
						<Button
							style={{ minWidth: '50px', height: '50px', borderRadius: '50%' }}
							disabled={isLoading}
							type="button"
							onClick={handleSave}
						>
							<div className="w-7">
								<Icons.Save />
							</div>
						</Button>
						<Button
							style={{ minWidth: '50px', height: '50px', borderRadius: '50%' }}
							disabled={isLoading}
							type="button"
							onClick={() => setUpdateLine(null)}
						>
							<div className="w-7">
								<Icons.Error />
							</div>
						</Button>
					</div>
				),
			},
			columns[0],
			columns[1],
			{
				accessorKey: 'name',
				header: translate('NAME'),
				minSize: 100,
				size: 100,
				align: 'center',
				enableSorting: true,
				cellEdit: () => (
					<Input
						type="text"
						id="name"
						onChange={handleInput}
						value={updateLine?.data.name}
					/>
				),
			},
			{
				accessorKey: 'lastName',
				header: translate('LAST_NAME'),
				minSize: 100,
				size: 100,
				align: 'center',
				cellEdit: () => (
					<Input
						type="text"
						id="lastName"
						onChange={handleInput}
						value={updateLine?.data.lastName}
					/>
				),
			},
			{
				accessorKey: 'birthday',
				header: translate('BIRTHDAY'),
				minSize: 100,
				size: 100,
				cell: info => (
					<div>{formatDate(new Date(info.getValue() as string))}</div>
				),
				align: 'center',
				cellEdit: () => (
					<Datepicker
						id="birthday"
						name="birthday"
						customDefaultValue={new Date(updateLine?.data.birthday || '')}
						onChange={handleInput}
					/>
				),
			},
			{
				accessorKey: 'email',
				header: 'Email',
				minSize: 100,
				size: 100,
				align: 'center',
				cellEdit: () => (
					<Input
						type="text"
						id="email"
						onChange={handleInput}
						value={updateLine?.data.email}
					/>
				),
			},
			{
				accessorKey: 'role',
				header: 'Role',
				minSize: 100,
				size: 100,
				align: 'center',
				cellEdit: () => (
					<Select
						menuPosition="fixed"
						menuPortalTarget={document.body}
						options={ROLES}
						value={
							ROLES.find(item => item.value === updateLine?.data.role)?.value
						}
						onChange={e => handleInput(e as ChangeEvent<HTMLInputElement>)}
						id="role"
						placeholder={translate('FILTER_TYPE')}
					/>
				),
			},
			{
				accessorKey: 'isActive',
				header: translate('ACTIVE'),
				minSize: 100,
				size: 100,
				align: 'center',
				cell: ({ row }) =>
					row.original.isActive ? (
						<div className="flex items-center justify-center w-full h-6 text-green-500">
							<Icons.Checked />
						</div>
					) : (
						<div className="flex items-center justify-center w-full h-9 text-red-500">
							<Icons.Error />
						</div>
					),
				cellEdit: () => (
					<div className="w-full flex items-center justify-center">
						<Checkbox
							defaultChecked={updateLine?.data.isActive}
							id="isActive"
							containerProps={{ className: 'flex items-center' }}
							onCheckedChange={e =>
								handleInput(e as ChangeEvent<HTMLInputElement>)
							}
						/>
					</div>
				),
			},
		],
		[translate]
	);

	async function load() {
		setIsLoading(true);
		setData(makeData.person(20));
		setIsLoading(false);
	}

	useEffect(() => {
		load();
	}, []);

	return (
		<div className="p-4">
			<Table
				isLoading={isLoading}
				columns={[...columnsInternal]}
				data={data}
				rowForUpdate={updateLine}
			/>
		</div>
	);
}
