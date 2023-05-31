import { ColumnDef, Row } from '@tanstack/react-table';
import { LoadingBar } from '~/Components/LoadingBar';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TSelection } from '~/Types/TSelection';
import { tableUtils } from '~/Utils/Table';
import { Td } from '../Td';

type Props<T> = {
	selection?: Omit<TSelection<T>, 'disableCheckbox'>;
	styles: CSSModuleClasses;
	data: T[];
	expandLine?: {
		render: (data: Row<T>) => React.ReactNode;
	};
	isLoading?: boolean;
	columns: ColumnDef<T>[];
};
export function IsLoading<T>({
	styles,
	data,
	isLoading,
	expandLine,
	selection,
	columns,
}: Props<T>) {
	const { translate } = useTranslation();
	if (!isLoading) return null;
	return (
		<>
			<tr style={{ height: '100%' }} className={styles.tr}>
				<td
					colSpan={tableUtils.countColSpan({
						columns,
						expandLine,
						selection,
					})}
					className={styles.td}
					style={{ textAlign: 'center', padding: 0 }}
				>
					<LoadingBar />
				</td>
			</tr>
			{data.length === 0 && (
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
						{translate('LOADING...')}
					</Td>
				</tr>
			)}
		</>
	);
}
