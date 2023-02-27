import { Table } from '@tanstack/react-table';
import { Button } from '~/Components/Button';
import { Icons } from '~/Components/Icons';
import { useTranslation } from '~/Hooks/UseTranslation';
import { DefProps, exportTo } from '~/Utils/Export';

type Props<T> = {
	table: Table<T>;
	tools?: {
		defForExcel?: DefProps<T>[];
		defForCsv?: DefProps<T>[];
		defForXml?: DefProps<T>[];
		defForPrint?: DefProps<T>[];
	};
};
export function ExportButtons<T>({ tools, table }: Props<T>) {
	const { translate } = useTranslation();
	const { rows } = table.getRowModel();

	return (
		<div className="flex gap-2 justify-end">
			{tools?.defForExcel && (
				<Button
					onClick={() =>
						exportTo.excel({
							data: rows.map(item => item.original),
							defColumns: tools?.defForExcel || [],
						})
					}
					title={translate('EXPORT_TO_XLS')}
					startIcon={<Icons.Xls />}
				/>
			)}

			{tools?.defForCsv && (
				<Button
					onClick={() =>
						exportTo.csv({
							data: rows.map(item => item.original),
							defColumns: tools?.defForCsv || [],
						})
					}
					startIcon={<Icons.Csv />}
					title={translate('EXPORT_TO_CSV')}
				/>
			)}
			{tools?.defForXml && (
				<Button
					onClick={() =>
						exportTo.xml({
							data: rows.map(item => item.original),
							defColumns: [],
						})
					}
					startIcon={<Icons.Xml />}
					title={translate('EXPORT_TO_XML')}
				/>
			)}
			{tools?.defForPrint && (
				<Button
					onClick={() =>
						exportTo.xml({
							data: rows.map(item => item.original),
							defColumns: [],
						})
					}
					startIcon={<Icons.Printer />}
					title={translate('PRINT')}
				/>
			)}
		</div>
	);
}
