import * as XLSX from 'xlsx-js-style';
import { toXML } from 'jstoxml';
import { jsPDF as JsPdf } from 'jspdf';
import html2canvas from 'html2canvas';

import { TDefXlsx, TDefPrintPdfPng, TDefCsv, TDefXml } from '~/Types/TExport';
import { buildTable } from './BuildTable';

function download(blob: Blob | string, extension: string) {
	const link = document.createElement('a');
	link.href = typeof blob === 'string' ? blob : URL.createObjectURL(blob);
	link.download = `Data-${new Date().toISOString()}.${extension}`;
	link.click();
	URL.revokeObjectURL(link.href);
}

const EXCEL_TYPE =
	'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

type PropsXlsx<T> = {
	data: T[];
	defColumns: TDefXlsx<T>[];
};

type PropsCsv<T> = {
	data: T[];
	defColumns: TDefCsv<T>[];
	delimiter?: string;
};

type PropsXml<T> = {
	data: T[];
	defColumns: TDefXml<T>[];
};

type PropsPrint<T> = {
	data: T[];
	defColumns: TDefPrintPdfPng<T>[];
};

function excel<T>({ data, defColumns }: PropsXlsx<T>) {
	const headerTemp: Record<string, unknown>[] = [];
	const dataTemp: Record<string, unknown>[][] = [];

	// Add Header
	for (let i = 0; i < defColumns.length; i += 1) {
		const styleFn = defColumns[i].styleHeaderCellFn;
		headerTemp.push({
			v: defColumns[i].header,
			s:
				styleFn &&
				styleFn({
					valueHeader: defColumns[i].header,
					currentDefinition: defColumns[i],
					definitions: defColumns,
					index: i,
				}),
		});
	}

	// Add Rows
	for (let i = 0; i < data.length; i += 1) {
		const rowTemp: Record<string, unknown>[] = [];
		for (const defCol of defColumns) {
			const value = defCol.accessorFn
				? defCol.accessorFn({
						valueCell: data[i][defCol.accessor],
						row: data[i],
						original: data,
						index: i,
				  })
				: data[i][defCol.accessor];

			const style = defCol.styleCellFn
				? defCol.styleCellFn({
						valueCell: value,
						row: data[i],
						original: data,
						index: i,
				  })
				: {};

			rowTemp.push({ v: value, t: defCol.typeCell, s: style });
		}
		dataTemp.push(rowTemp);
	}

	const ws = XLSX.utils.aoa_to_sheet([
		[...headerTemp],
		...dataTemp.map(item => item),
	]);

	const wb = {
		Sheets: {
			data: ws,
		},
		SheetNames: ['data'],
	};

	const eb = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
	const blob = new Blob([eb], { type: EXCEL_TYPE });
	download(blob, `xlsx`);
}

function csv<T>({ data, defColumns, delimiter = ';' }: PropsCsv<T>) {
	const resultFinal: Record<string, unknown>[] = [];
	for (let i = 0; i < data.length; i += 1) {
		let result: Record<string, unknown> = {};
		for (const item of defColumns) {
			const valueTemp = item.accessorFn
				? item.accessorFn({
						original: data,
						row: data[i],
						valueCell: data[i][item.accessor],
						index: i,
				  })
				: data[i][item.accessor];
			const tempHeader = {
				[item.header]: valueTemp,
			};
			result = {
				...result,
				...tempHeader,
			};
		}
		resultFinal.push(result);
	}

	const ws = XLSX.utils.json_to_sheet(resultFinal);
	const csvOutput: string = XLSX.utils.sheet_to_csv(ws, { FS: delimiter });

	const BOM = new Uint8Array([0xef, 0xbb, 0xbf]); // For special characteres
	const blob = new Blob([BOM, csvOutput], { type: 'application/csv' });
	download(blob, `csv`);
}

function xml<T>({ data, defColumns }: PropsXml<T>) {
	const newData: Record<string, unknown>[] = [];

	// Add Rows
	for (let i = 0; i < data.length; i += 1) {
		const rowTemp: Record<string, unknown>[] = [];
		for (const defCol of defColumns) {
			const value = defCol.accessorFn
				? defCol.accessorFn({
						valueCell: data[i][defCol.accessor],
						row: data[i],
						original: data,
						index: i,
				  })
				: data[i][defCol.accessor];

			rowTemp.push({
				[defCol.header.replaceAll(' ', '')]: value,
			});
		}
		newData.push({ item: rowTemp });
	}

	const tratedDate = {
		data: newData,
	};

	const result = toXML(tratedDate, {
		indent: '    ',
	});
	const BOM = new Uint8Array([0xef, 0xbb, 0xbf]); // For special characteres
	const blob = new Blob([BOM, result], { type: 'application/xml' });
	download(blob, `xml`);
}

function print<T>({ data, defColumns }: PropsPrint<T>) {
	const table = buildTable({ data, defColumns });

	const windowForPrint = window.open('');
	if (windowForPrint) {
		windowForPrint.document.body.append(table);
		setTimeout(() => {
			windowForPrint.print();
		}, 500);

		windowForPrint.onfocus = () => {
			setTimeout(() => {
				windowForPrint.close();
			}, 500);
		};
	}
}

function pdf<T>({ data, defColumns }: PropsPrint<T>) {
	const table = buildTable({ data, defColumns });

	const doc = new JsPdf({
		orientation: 'l',
		unit: 'mm',
		format: 'a4',
		putOnlyUsedFonts: true,
		floatPrecision: 16,
	});

	doc.html(table, {
		callback: docTemp => {
			docTemp.save(`Data-${new Date().toISOString()}.pdf`);
		},
		width: 190,
		windowWidth: 700,
	});
}

function png<T>({ data, defColumns }: PropsPrint<T>) {
	const table = buildTable({ data, defColumns });
	table.id = 'tempTable';
	document.body.appendChild(table);

	html2canvas(table).then(canvas => {
		const blob = canvas.toDataURL('image/png', 1.0);
		download(blob, `png`);
		document.querySelector('#tempTable')?.remove();
	});
}

export const exportTo = { excel, csv, xml, print, pdf, png };
