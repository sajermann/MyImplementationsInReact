/* eslint-disable react/button-has-type */
/* eslint-disable no-return-assign */
/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import {
	ColumnDef,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { describe, expect, vi } from 'vitest';
import { useEffect, useRef, useState } from 'react';

import { TSelection } from '~/Types/TSelection';
import { makeData } from '~/Utils/MakeData';

import { RowsWithVirtualization } from '.';

const fallback: Record<string, string>[] = [];

type TIdName = { [index: string]: string };

const columns: ColumnDef<TIdName>[] = [
	{
		accessorKey: 'id',
		header: 'Id',
	},
	{
		accessorKey: 'name',
		header: 'Nome',
		meta: {
			cellEdit: ({ name }) => <span>{name}</span>,
		},
	},
];

const dataMock = makeData.randomObject(['id', 'name'], 50);

type TProps = {
	selection?: Omit<TSelection<TIdName>, 'disableCheckbox'>;
};

function Mock({ selection }: TProps) {
	const [data, setData] = useState<TIdName[]>(dataMock);
	const ref = useRef<HTMLDivElement>(null);
	const table = useReactTable({
		data: data || fallback,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});
	const { rows } = table.getRowModel();

	useEffect(() => {
		setData(makeData.randomObject(['id', 'name'], 50));
	}, []);

	return (
		<div className="w-full h-96">
			<div
				data-testid="ref-container"
				className="w-full h-80 p-4 border rounded-lg overflow-auto"
				ref={ref}
			>
				<RowsWithVirtualization<TIdName>
					tableContainerRef={ref}
					enableVirtualization
					rows={rows}
					selection={selection}
					rowForUpdate={{ row: 1, data: { id: '1', name: 'name-1' } }}
				/>
			</div>
		</div>
	);
}

describe('Components/Table/RowsWithVirtualization', () => {
	vi.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(
		() =>
			({
				x: 8,
				y: 72,
				width: 1247,
				height: 320,
				top: 72,
				right: 1255,
				bottom: 392,
				left: 8,
			}) as any,
	);

	it(`must render first item`, async () => {
		const { queryByText, getByText } = render(<Mock />);
		const first = getByText(`name-0`);
		expect(first).toBeTruthy();
		const last = queryByText(`name-49`);
		expect(last).toBeFalsy();
	});

	it(`must render last item`, async () => {
		const { getByText, getByTestId } = render(<Mock />);
		expect(getByText(`name-0`)).toBeTruthy();
		fireEvent.scroll(getByTestId('ref-container'), {
			target: { scrollTop: 99_999_999 },
		});
		expect(getByText(`name-49`)).toBeTruthy();
	});
});
