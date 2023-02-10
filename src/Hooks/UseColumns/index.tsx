import { formatDate, stringToDate } from '@sajermann/utils/FormatDate';
import { ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';

import { Icons } from '~/Components/Icons';
import { TPerson } from '~/Types/TPerson';
import { useTranslation } from '~/Hooks/UseTranslation';

export function useColumns(columnSizeDefault?: Record<string, number>) {
	const { translate } = useTranslation();
	const columns = useMemo<ColumnDef<TPerson>[]>(
		() => [
			{
				accessorKey: 'id',
				header: 'Id',
				minSize: 100,
				size: 100,
				align: 'center',
				enableResizing: false,
			},
			{
				accessorKey: 'avatar',
				header: 'Avatar',
				minSize: 60,
				size: 60,
				align: 'left',
				cell: ({ getValue }) => (
					<div className="w-full h-full flex items-center justify-center">
						<div className="w-14 h-14">
							<img className="rounded-full" src={getValue() as string} alt="" />
						</div>
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
				size: columnSizeDefault ? columnSizeDefault?.name : 100,
				align: 'center',
				enableSorting: true,
			},
			{
				accessorKey: 'lastName',
				header: translate('LAST_NAME'),
				minSize: 100,
				size: columnSizeDefault ? columnSizeDefault?.lastName : 100,
				align: 'center',
			},
			{
				accessorFn: row => formatDate(new Date(row.birthday)),
				accessorKey: 'birthday',
				header: translate('BIRTHDAY'),
				minSize: 100,
				size: columnSizeDefault ? columnSizeDefault?.birthday : 100,
				align: 'center',
				sortingFn: (rowA, rowB, columnId) => {
					const dateA = stringToDate(rowA.getValue(columnId));
					const dateB = stringToDate(rowB.getValue(columnId));
					return dateB < dateA ? 1 : -1;
				},
			},
			{
				accessorKey: 'email',
				header: 'Email',
				minSize: 100,
				size: columnSizeDefault ? columnSizeDefault?.email : 100,
				align: 'Center',
			},
			{
				accessorKey: 'role',
				header: 'Role',
				minSize: 100,
				size: columnSizeDefault?.role || 100,
				align: 'center',
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
				enableResizing: false,
			},
		],
		[translate]
	);

	return { columns };
}
