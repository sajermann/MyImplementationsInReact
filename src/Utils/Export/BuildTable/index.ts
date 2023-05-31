import { TCellProps, TDefPrintPdfPng } from '~/Types/TExport';
import { addRows } from '../AddRows';

type Props<T> = {
	data: T[];
	defColumns: TDefPrintPdfPng<T>[];
};

export function buildTable<T>({ data, defColumns }: Props<T>) {
	const headerTemp: Record<string, unknown>[] = [];

	// Add Header
	for (const defColumn of defColumns) {
		headerTemp.push({
			value: defColumn.header,
			align: defColumn.align,
		});
	}

	// Add Rows
	const dataTemp = addRows({ data, defColumns });

	// Mount HTML
	const table = document.createElement('table');
	table.setAttribute(
		'style',
		'border-collapse: collapse; width: 100%; color: black'
	);

	// Build THead
	const thead = document.createElement('thead');
	const trHead = document.createElement('tr');
	trHead.setAttribute('style', 'border-bottom: 1px solid black; ');
	for (const header of headerTemp) {
		const th = document.createElement('th');
		th.setAttribute(
			'style',
			`padding: 8px; text-align:${header.align || 'left'}`
		);
		th.textContent = header.value as string;
		trHead.appendChild(th);
	}
	thead.appendChild(trHead);

	// Build TBody
	const tbody = document.createElement('tbody');
	for (const [indexRow, row] of dataTemp.entries()) {
		const trBody = document.createElement('tr');
		trBody.setAttribute(
			'style',
			'border-bottom: 1px solid black; padding: 4px'
		);
		for (const cell of row) {
			const { cellRender } = cell as unknown as {
				cellRender: (dataForCellRender: TCellProps<T>) => string;
			};
			const td = document.createElement('td');
			td.setAttribute(
				'style',
				`padding: 8px; text-align:${cell.align || 'left'}`
			);

			if (cellRender) {
				td.innerHTML = cellRender({
					valueCell: cell.value,
					row: data[indexRow],
					original: data,
					index: indexRow,
				});
			} else {
				td.textContent = cell.value as string;
			}
			trBody.appendChild(td);
		}
		tbody.appendChild(trBody);
	}
	table.appendChild(thead);
	table.appendChild(tbody);

	return table;
}
