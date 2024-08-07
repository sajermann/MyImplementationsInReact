import { Fragment, Suspense, useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { generateGuid } from '@sajermann/utils/Random';

import { useRoutesMenu } from '~/Hooks/UseRoutesMenu';
import { useTranslation } from '~/Hooks/UseTranslation';

import { TRoutesMenu } from '~/Types/TRoutesMenu';
import { useLoadingLazy } from '~/Store/UseLoadingLazy';
import {
	ColumnDef,
	useReactTable,
	getCoreRowModel,
	getFilteredRowModel,
	Row,
} from '@tanstack/react-table';
import { TSelection } from '~/Types/TSelection';
import { makeData } from '~/Utils/MakeData';
import { Breadcrumbs } from '../Breadcumbs';
import { Sidebar } from '../Sidebar';
import { RowsWithVirtualization } from '../Table/RowsWithVirtualization';

// function IsLoading() {
// 	const { translate } = useTranslation();
// 	const { setIsLoadingLazy } = useLoadingLazy();

// 	useEffect(() => {
// 		setIsLoadingLazy(true);
// 		return () => setIsLoadingLazy(false);
// 	}, []);
// 	return <p>{translate('LOADING...')}</p>;
// }

// export function RoutesConfig() {
// 	const { globalRoutes: options } = useRoutesMenu();
// 	const location = useLocation();

// 	function mountRoutes(routes: TRoutesMenu[]) {
// 		return (
// 			<>
// 				{routes.map(route => (
// 					<Fragment key={generateGuid()}>
// 						<Route
// 							key={generateGuid()}
// 							path={route.path}
// 							element={route.element}
// 						/>
// 						{route.subs && mountRoutes(route.subs)}
// 					</Fragment>
// 				))}
// 			</>
// 		);
// 	}

// 	return (
// 		<div className="w-full 2xl:max-w-[1330px] p-2 gap-5 flex  my-0 mx-auto">
// 			<div className="w-full flex flex-col h-full gap-2 flex-1">
// 				<Suspense fallback={<IsLoading />}>
// 					<Breadcrumbs />
// 					<Routes>{mountRoutes(options)}</Routes>
// 				</Suspense>
// 			</div>
// 			{location.pathname !== '/' && (
// 				<div className="hidden min-w-[18rem] w-72 max-w-[18rem] xl:flex">
// 					<Sidebar />
// 				</div>
// 			)}
// 		</div>
// 	);
// }

const columns: ColumnDef<Record<string, string>>[] = [
	{
		accessorKey: 'id',
		header: 'Id',
	},
	{
		accessorKey: 'name',
		header: 'Nome',
	},
];

type TProps<T> = {
	selection?: Omit<TSelection<T>, 'disableCheckbox'>;
	disabledVirtualization?: boolean;
	rowForUpdate?: { row: number; data: T } | null;
	expandLine?: {
		render: (data: Row<T>) => React.ReactNode;
	};
};

export function RoutesConfig<T>({
	disabledVirtualization,
	expandLine,
	rowForUpdate,
	selection,
}: TProps<T>) {
	const [data, setData] = useState<Record<string, string>[]>([]);
	const tableContainerRef = useRef<HTMLDivElement>(null);
	const [potato, setPotato] = useState(true);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	async function load() {
		setData(makeData.randomObject(['id', 'name'], 50));
	}

	useEffect(() => {
		load();
	}, []);

	const { rows } = table.getRowModel();
	return (
		<div className="w-full h-96">
			<div
				className="w-full h-80 p-4 border rounded-lg overflow-auto"
				ref={tableContainerRef}
			>
				<button onClick={() => setPotato(prev => !prev)}>Test Button</button>
				{JSON.stringify({ potato })}
				<RowsWithVirtualization
					tableContainerRef={tableContainerRef}
					disabledVirtualization={disabledVirtualization}
					rows={rows}
					expandLine={expandLine}
					rowForUpdate={rowForUpdate}
					selection={selection}
				/>
			</div>
		</div>
	);
}
