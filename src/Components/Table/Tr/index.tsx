import { Row } from '@tanstack/react-table';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TSelection } from '~/Types/TSelection';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { tableUtils } from '~/Utils/Table';

import styles from './index.module.css';

type Props<T> = DetailedHTMLProps<
	HTMLAttributes<HTMLTableRowElement>,
	HTMLTableRowElement
> & {
	row?: Row<T>;
	selection?: Omit<TSelection<T>, 'disableCheckbox'>;
	expandLine?: {
		render: (data: Row<T>) => React.ReactNode;
	};
};
export function Tr<T>({
	row,
	children,
	selection,
	expandLine,
	...rest
}: Props<T>) {
	return (
		<tr
			{...rest}
			className={managerClassNames([
				{ [styles.tr]: true },
				{ [styles.isSelected]: selection && row && row.getIsSelected() },
				{ [styles.isExpanded]: expandLine && row && row.getIsExpanded() },
				{ [rest.className as string]: rest.className },
			])}
			onClick={() => tableUtils.onClickRow({ row, selection })}
		>
			{children}
		</tr>
	);
}
