import { ColumnDef, Row } from '@tanstack/react-table';
import { VirtualItem } from '@tanstack/react-virtual';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TSelection } from '~/Types/TSelection';
import { tableUtils } from '~/Utils/Table';
import { Td } from '../Td';

type Props<T> = {
	selection?: Omit<TSelection<T>, 'disableCheckbox'>;
	styles: CSSModuleClasses;
	getVirtualItems: () => VirtualItem[];
	data: T[];
	expandLine?: {
		render: (data: Row<T>) => React.ReactNode;
	};
	isLoading?: boolean;
	columns: ColumnDef<T>[];
};
export function NoData<T>({
	getVirtualItems,
	styles,
	data,
	isLoading,
	expandLine,
	selection,
	columns,
}: Props<T>) {
	const { translate } = useTranslation();
	if (!(getVirtualItems().length === 0 || data.length === 0) || isLoading) {
		return null;
	}

	return (
		<tr className={styles.tr}>
			<Td
				{...{
					colSpan: tableUtils.countColSpan({
						columns,
						expandLine,
						selection,
					}),
					style: { textAlign: 'center' },
				}}
			>
				{translate('NO_DATA')}
			</Td>
		</tr>
	);
}
