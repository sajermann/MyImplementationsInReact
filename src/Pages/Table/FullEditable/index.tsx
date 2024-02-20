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
import { Main } from '~/Components/Main';
import { Section } from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { ContainerInput } from '~/Components/ContainerInput';

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

export function FullEditablePage() {
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
				meta: {
					align: 'center',
				},
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
				meta: {
					align: 'center',
				},
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
				meta: {
					align: 'center',
				},
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
				meta: {
					align: 'center',
				},
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
				meta: {
					align: 'center',
				},
			},
			{
				accessorKey: 'role',
				header: 'Role',
				minSize: 100,
				size: 100,
				meta: {
					align: 'center',
				},
				cell: info => (
					<Select
						menuPosition="fixed"
						menuPortalTarget={document.body}
						defaultValue={DEFAULT_OPTIONS.find(
							item => item.value === info.getValue()
						)}
						options={DEFAULT_OPTIONS}
						onChange={e => {
							const event = {
								target: {
									id: 'role',
									value: DEFAULT_OPTIONS.find(item => item.value === e?.value)
										?.value,
								},
							};
							handleInput(
								event as ChangeEvent<HTMLInputElement>,
								info.row.index
							);
						}}
						id="role"
					/>
				),
			},
			{
				accessorKey: 'isActive',
				header: translate('ACTIVE'),
				minSize: 100,
				size: 100,
				meta: {
					align: 'center',
				},
				cell: info => (
					<ContainerInput className="items-center">
						<Checkbox
							defaultChecked={info.getValue() as boolean}
							id="isActive"
							onCheckedChange={e =>
								handleInput(e as ChangeEvent<HTMLInputElement>, info.row.index)
							}
						/>
					</ContainerInput>
				),
			},
		],
		[]
	);

	async function load() {
		setIsLoading(true);
		setData(makeData.person(10));
		setIsLoading(false);
	}

	useEffect(() => {
		load();
	}, []);

	return (
		<Main data-content="content-main">
			<Section title={translate('FULL_EDITABLE')} variant="h1">
				{translate('IMPLEMENTS_FULL_EDITABLE_MODE')}
			</Section>
			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2 bg-dark-400">
					<QuickAccessGithub name="FullEditable" />
				</div>
			</Section>
			<Section title={translate('IMPLEMENTS')} variant="h2">
				<Table isLoading={isLoading} columns={columns} data={data} />
				<pre>{JSON.stringify(data, null, 2)}</pre>
			</Section>
		</Main>
	);
}
