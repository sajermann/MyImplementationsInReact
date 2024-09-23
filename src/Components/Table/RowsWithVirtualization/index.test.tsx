/* eslint-disable react/button-has-type */
/* eslint-disable no-return-assign */
/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import {
	ColumnDef,
	getCoreRowModel,
	useReactTable,
	Row,
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
	},
];

type TProps = {
	selection?: Omit<TSelection<TIdName>, 'disableCheckbox'>;
	enableVirtualization?: boolean;
	rowForUpdate?: { row: number; data: TIdName } | null;
	expandLine?: {
		render: (data: Row<TIdName>) => React.ReactNode;
	};
};

function Mock({
	enableVirtualization,
	expandLine,
	rowForUpdate,
	selection,
}: TProps) {
	const [data, setData] = useState<TIdName[]>([]);
	const ref = useRef<HTMLDivElement>(null);
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
				data-testid="ref-container"
				className="w-full h-80 p-4 border rounded-lg overflow-auto"
				ref={ref}
			>
				<RowsWithVirtualization<TIdName>
					tableContainerRef={ref}
					enableVirtualization={enableVirtualization}
					rows={rows}
					expandLine={expandLine}
					rowForUpdate={rowForUpdate}
					selection={selection}
				/>
				<button
					onClick={() => {
						console.log(
							'CLICKCCCCC',
							ref.current?.scroll,
							ref.current?.scrollBy,
						);
						ref.current?.scrollTo({
							top: 99_999_999,
						});
					}}
				>
					Scroll to Bottom
				</button>
			</div>
		</div>
	);
}

describe('Components/Table/RowsWithVirtualization', () => {
	vi.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(
		() => ({
			width: 120,
			height: 120,
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
			x: 0,
			y: 0,
			// eslint-disable-next-line @typescript-eslint/no-empty-function
			toJSON: () => {},
		}),
	);

	it(`must render first item`, async () => {
		const { queryByText, getByText } = render(<Mock />);
		const first = getByText(`name-0`);
		expect(first).toBeTruthy();
		const last = queryByText(`name-49`);
		expect(last).toBeFalsy();
	});

	// Por algum motivo o scroll não está funcionando
	it(`must render last item`, async () => {
		const { queryByText, getAllByText, getByText, getByTestId, findByText } =
			render(<Mock />);
		const refContainer = getByTestId('ref-container');
		await waitFor(async () => {
			fireEvent.scroll(refContainer, { target: { scrollDown: 99_999_999 } });
			const scrollButton = getByText('Scroll to Bottom');
			fireEvent.click(scrollButton);
			const first = await findByText(`name-99`);
			console.log({ first });
			expect(first).toBeTruthy();
			const last = queryByText(`name-0`);
			expect(last).toBeFalsy();
		});
	});
});
