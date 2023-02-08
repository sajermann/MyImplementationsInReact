import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';

import { Table } from '~/Components/Table';
import { TPerson } from '~/Types/TPerson';
import { useTranslation } from '~/Hooks/UseTranslation';
import { makeData } from '~/Utils/MakeData';
import { Datepicker } from '~/Components/Datepicker';
import { Input } from '~/Components/Input';
import { Select } from '~/Components/Select';
import { Checkbox } from '~/Components/Checkbox';

const DEFAULT_OPTIONS = [
	{
		value: 'Admin',
		label: 'Admin',
	},
	{
		value: 'User',
		label: 'User',
	},
	{
		value: 'Dev',
		label: 'Dev',
	},
];

export default function FullEditable() {
	const { translate } = useTranslation();
	const [data, setData] = useState<TPerson[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	function handleInput(e: ChangeEvent<HTMLInputElement>, indexRow: number) {
		const { id, value } = e.target;

		setData(old =>
			old.map((row, index) => {
				if (index === indexRow) {
					return {
						...old[indexRow]!,
						[id]: value,
					};
				}
				return row;
			})
		);
	}

	const columns = useMemo<ColumnDef<TPerson>[]>(
		() => [
			{
				accessorKey: 'id',
				header: 'ID',
				minSize: 100,
				size: 100,
				align: 'center',
			},
			{
				accessorKey: 'avatar',
				header: 'Avatar',
				minSize: 60,
				size: 60,
				align: 'left',
				cell: ({ getValue }) => (
					<div className="w-14 h-14 flex items-center justify-center">
						<img
							className="w-full rounded-full"
							src={getValue() as string}
							alt=""
						/>
					</div>
				),
				enableResizing: false,
				enableSorting: false,
				enableGlobalFilter: false,
			},
			{
				accessorKey: 'name',
				header: translate('NAME'),
				minSize: 100,
				size: 100,
				align: 'center',
				enableSorting: true,
				cell: info => (
					<Input
						type="text"
						id="name"
						onChange={e => handleInput(e, info.row.index)}
						value={info.getValue() as string}
					/>
				),
			},
			{
				accessorKey: 'lastName',
				header: translate('LAST_NAME'),
				minSize: 100,
				size: 100,
				align: 'center',
				cell: info => (
					<Input
						type="text"
						id="lastName"
						onChange={e => handleInput(e, info.row.index)}
						value={info.getValue() as string}
					/>
				),
			},
			{
				accessorKey: 'birthday',
				header: translate('BIRTHDAY'),
				minSize: 100,
				size: 100,
				align: 'center',
				cell: info => (
					<Datepicker
						id="birthday"
						name="birthday"
						customDefaultValue={new Date(info.getValue() as string)}
						onChange={e => handleInput(e, info.row.index)}
					/>
				),
			},
			{
				accessorKey: 'email',
				header: 'Email',
				minSize: 100,
				size: 100,
				align: 'center',
			},
			{
				accessorKey: 'role',
				header: 'Role',
				minSize: 100,
				size: 100,
				align: 'center',
				cell: info => (
					<Select
						menuPosition="fixed"
						menuPortalTarget={document.body}
						defaultValue={
							DEFAULT_OPTIONS.find(item => item.value === info.getValue())
								?.value
						}
						options={DEFAULT_OPTIONS}
						onChange={e =>
							handleInput(e as ChangeEvent<HTMLInputElement>, info.row.index)
						}
						id="role"
					/>
				),
			},
			{
				accessorKey: 'isActive',
				header: translate('ACTIVE'),
				minSize: 100,
				size: 100,
				align: 'center',
				cell: info => (
					<div className="w-full flex items-center justify-center">
						<Checkbox
							defaultChecked={info.getValue() as boolean}
							id="isActive"
							containerProps={{ className: 'flex items-center' }}
							onCheckedChange={e =>
								handleInput(e as ChangeEvent<HTMLInputElement>, info.row.index)
							}
						/>
					</div>
				),
			},
		],
		[]
	);

	async function load() {
		setIsLoading(true);
		setData(makeData.person(2));
		setIsLoading(false);
	}

	useEffect(() => {
		load();
	}, []);

	return (
		<div className="p-4">
			<Table isLoading={isLoading} columns={columns} data={data} />
			{JSON.stringify(data, null, 2)}
		</div>
	);
}
