import { Row } from '@tanstack/react-table';
import { TSelection } from '~/Types/TSelection';
import { log } from '~/Utils/Log';

type Props<T> = {
	selection?: Omit<TSelection<T>, 'disableCheckbox'>;
	styles: CSSModuleClasses;
	darkMode: boolean;
	row: Row<T>;
	expandLine?: {
		render: (data: Row<T>) => React.ReactNode;
	};
};
export function verifyClassesRow<T>({
	styles,
	darkMode,
	selection,
	row,
	expandLine,
}: Props<T>) {
	const classesTemp = [styles.tr];

	if (row.index % 2 > 0) {
		classesTemp.push(!darkMode ? styles.even : '!bg-dark-500');
	}
	if (selection) {
		try {
			if (row.getIsSelected()) {
				classesTemp.push(styles.isSelected);
			}
		} catch (e) {
			log.error('Catch selection verifyIsSelected', e);
		}
	}
	if (expandLine) {
		try {
			if (row.getIsExpanded()) {
				classesTemp.push(styles.isExpanded);
			}
		} catch (e) {
			log.error('Catch expandLine verifyIsSelected', e);
		}
	}

	return classesTemp.join(' ');
}
