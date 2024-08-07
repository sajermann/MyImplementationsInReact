/* eslint-disable react/button-has-type */
/* eslint-disable no-return-assign */
/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import {
	ColumnDef,
	getCoreRowModel,
	getSortedRowModel,
	useReactTable,
	getFilteredRowModel,
	Row,
} from '@tanstack/react-table';
import { describe, expect, vi } from 'vitest';
import { RefObject, useEffect, useRef, useState } from 'react';

import { TSelection } from '~/Types/TSelection';
import { makeData } from '~/Utils/MakeData';

import * as useVirtualizerMock from '@tanstack/react-virtual';
import { RowsWithVirtualization } from '.';

const fallback: Record<string, string>[] = [];

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

function Mock<T>({
	disabledVirtualization,
	expandLine,
	rowForUpdate,
	selection,
}: TProps<T>) {
	const [data, setData] = useState<Record<string, string>[]>([]);
	const tableContainerRef = useRef<HTMLDivElement>(null);
	const table = useReactTable({
		data: data || fallback,
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

describe('Components/Table/RowsWithVirtualization', () => {
	afterEach(() => {
		vi.clearAllMocks();
		vi.resetAllMocks();

		vi.mock('react-router-dom', async () => ({
			__esModule: true,
			...(await vi.importActual('@tanstack/react-virtual')),
		}));
	});

	it(`must ...`, async () => {
		vi.spyOn(useVirtualizerMock, 'useVirtualizer').mockImplementation(() => {
			console.log('Aquuiii');
			return {
				getVirtualItems: () => [
					{ index: 1, lane: 1, end: 1, key: 1, size: 10, start: 10 },
				],
				getTotalSize: () => 2000,
			} as any;
		});
		const { findByText, queryByText, queryAllByText, getAllByText, getByText } =
			render(<Mock />);
		fireEvent.click(getByText('Test Button'));
		const first = getAllByText(`name-0`);
		// const last = queryAllByText(`name-${data.length}`);
		console.log({ first });

		// await waitFor(
		// 	async () => {
		// 		const text = await findByText('name-0');
		// 		console.log({ text });
		// 		expect(text).not.toBeUndefined();
		// 	},

		// );
	});
});
