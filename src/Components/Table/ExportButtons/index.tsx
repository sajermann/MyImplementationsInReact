import { Table } from '@tanstack/react-table';
import { Button } from '~/Components/Button';
import { Icons } from '~/Components/Icons';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TDefTools } from '~/Types/TExport';
import { exportTo } from '~/Utils/Export';

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
					onClick={() =>
						exportTo.print({
							data: rows.map(item => item.original),
							defColumns: tools?.defForPrint || [],
						})
					}
					title={translate('EXPORT_TO_PRINTER')}
					startIcon={<Icons nameIcon="printer" />}
				/>
			)}

			{tools?.defForPdf && (
				<Button
					onClick={() =>
						exportTo.pdf({
							data: rows.map(item => item.original),
							defColumns: tools?.defForPdf || [],
						})
					}
					title={translate('EXPORT_TO_PDF')}
					startIcon={<Icons nameIcon="pdf" />}
				/>
			)}

			{tools?.defForPng && (
				<Button
					onClick={() =>
						exportTo.png({
							data: rows.map(item => item.original),
							defColumns: tools?.defForPng || [],
						})
					}
					title={translate('EXPORT_TO_PNG')}
					startIcon={<Icons nameIcon="png" />}
				/>
			)}

			{tools?.defForExcel && (
				<Button
					onClick={() =>
						exportTo.excel({
							data: rows.map(item => item.original),
							defColumns: tools?.defForExcel || [],
						})
					}
					title={translate('EXPORT_TO_XLS')}
					startIcon={<Icons nameIcon="xls" />}
				/>
			)}

			{tools?.defForCsv && (
				<Button
					onClick={() =>
						exportTo.csv({
							data: rows.map(item => item.original),
							defColumns: tools?.defForCsv || [],
							delimiter: ',',
						})
					}
					startIcon={<Icons nameIcon="csv" />}
					title={translate('EXPORT_TO_CSV')}
				/>
			)}

			{tools?.defForXml && (
				<Button
					onClick={() =>
						exportTo.xml({
							data: rows.map(item => item.original),
							defColumns: tools?.defForXml || [],
						})
					}
					startIcon={<Icons nameIcon="xml" />}
					title={translate('EXPORT_TO_XML')}
				/>
			)}
		</div>
	);
}
