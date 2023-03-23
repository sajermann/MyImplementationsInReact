import { Table } from '@tanstack/react-table';
import { Dispatch, SetStateAction } from 'react';
import { TDefTools } from '~/Types/TExport';

import { managerClassNames } from '~/Utils/ManagerClassNames';
import { ExportButtons } from '../ExportButtons';
import { Search } from '../Search';

type Props<T, U> = {
	globalFilter?: {
		filter: U;
		setFilter: Dispatch<SetStateAction<U>>;
		disableInput?: boolean;
	};
	table: Table<T>;
	tools?: TDefTools<T>;
};

export function Header<T, U>({ globalFilter, table, tools }: Props<T, U>) {
	if (!tools && (!globalFilter || globalFilter?.disableInput)) return null;

	return (
		<div className="grid grid-cols-12 gap-2 w-full mb-1 items-center">
			<div
				className={managerClassNames({
					'col-span-12 sm:col-span-6': tools,
					'col-span-12': !tools,
				})}
			>
				<Search
					globalFilter={{
						filter: globalFilter?.filter as string,
						setFilter: globalFilter?.setFilter as Dispatch<
							SetStateAction<string>
						>,
						disableInput: globalFilter?.disableInput,
					}}
				/>
			</div>

			<div
				className={managerClassNames({
					'col-span-12 sm:col-span-6':
						globalFilter && !globalFilter.disableInput,
					'col-span-12': !globalFilter,
				})}
			>
				<ExportButtons table={table} tools={tools} />
			</div>
		</div>
	);
}
