import { Table } from '@tanstack/react-table';
import { Button } from '~/Components/Button';
import { Icons } from '~/Components/Icons';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TDefTools } from '~/Types/TExport';
import { exportTo } from '~/Utils/Export';
import { showInDevelopment } from '~/Utils/ShowInDevelopment';

type Props<T> = {
	table: Table<T>;
	tools?: TDefTools<T>;
};
export function ExportButtons<T>({ tools, table }: Props<T>) {
	const { translate } = useTranslation();
	const { rows } = table.getRowModel();

	return (
		<div className="flex gap-2 justify-end">
			{tools?.defForPrint && (
				<Button
					{...showInDevelopment({ 'data-testid': 'button-export-print' })}
					variant="outlined"
					onClick={() =>
						exportTo.print({
							data: rows.map(item => item.original),
							defColumns: tools?.defForPrint,
						})
					}
					title={translate('EXPORT_TO_PRINTER')}
					startIcon={<Icons nameIcon="printer" />}
					iconButton="squared"
				/>
			)}

			{tools?.defForPdf && (
				<Button
					{...showInDevelopment({ 'data-testid': 'button-export-pdf' })}
					variant="outlined"
					onClick={() =>
						exportTo.pdf({
							data: rows.map(item => item.original),
							defColumns: tools?.defForPdf,
						})
					}
					title={translate('EXPORT_TO_PDF')}
					startIcon={<Icons nameIcon="pdf" />}
					iconButton="squared"
				/>
			)}

			{tools?.defForPng && (
				<Button
					{...showInDevelopment({ 'data-testid': 'button-export-png' })}
					variant="outlined"
					onClick={() =>
						exportTo.png({
							data: rows.map(item => item.original),
							defColumns: tools?.defForPng,
						})
					}
					title={translate('EXPORT_TO_PNG')}
					startIcon={<Icons nameIcon="png" />}
					iconButton="squared"
				/>
			)}

			{tools?.defForExcel && (
				<Button
					{...showInDevelopment({ 'data-testid': 'button-export-excel' })}
					variant="outlined"
					onClick={() =>
						exportTo.excel({
							data: rows.map(item => item.original),
							defColumns: tools?.defForExcel,
						})
					}
					title={translate('EXPORT_TO_XLS')}
					startIcon={<Icons nameIcon="xls" />}
					iconButton="squared"
				/>
			)}

			{tools?.defForCsv && (
				<Button
					{...showInDevelopment({ 'data-testid': 'button-export-csv' })}
					variant="outlined"
					onClick={() =>
						exportTo.csv({
							data: rows.map(item => item.original),
							defColumns: tools?.defForCsv,
							delimiter: ',',
						})
					}
					startIcon={<Icons nameIcon="csv" />}
					title={translate('EXPORT_TO_CSV')}
					iconButton="squared"
				/>
			)}

			{tools?.defForXml && (
				<Button
					{...showInDevelopment({ 'data-testid': 'button-export-xml' })}
					variant="outlined"
					onClick={() =>
						exportTo.xml({
							data: rows.map(item => item.original),
							defColumns: tools?.defForXml,
						})
					}
					startIcon={<Icons nameIcon="xml" />}
					title={translate('EXPORT_TO_XML')}
					iconButton="squared"
				/>
			)}
		</div>
	);
}
