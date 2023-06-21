import { ColumnDef, Row } from '@tanstack/react-table';

import { useTranslation } from '~/Hooks/UseTranslation';
import { TSelection } from '~/Types/TSelection';
import { tableUtils } from '~/Utils/Table';
import { Td } from '../Td';
import { Tr } from '../Tr';

type Props<T> = {
	selection?: Omit<TSelection<T>, 'disableCheckbox'>;
	data: T[];
	expandLine?: {
		render: (data: Row<T>) => React.ReactNode;
	};
	isLoading?: boolean;
	columns: ColumnDef<T>[];
};
export function NoData<T>({
	data,
	isLoading,
	expandLine,
	selection,
	columns,
}: Props<T>) {
	const { translate } = useTranslation();

	if (data.length !== 0 || isLoading) {
		return null;
	}

	return (
		<Tr>
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
		</Tr>
	);
}
