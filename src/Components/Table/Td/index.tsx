import { useRef } from 'react';
import styles from './index.module.css';

type Props = {
	children: React.ReactNode;
	title?: string;
};

export function Td({ children, title, ...rest }: Props) {
	const ref = useRef<HTMLTableCellElement>(null);

	function isEllipsisActive() {
		if (!ref.current) {
			return false;
		}
		return ref.current?.offsetWidth < ref.current?.scrollWidth;
	}

	return (
		<td
			ref={ref}
			{...rest}
			title={isEllipsisActive() ? title : ''}
			className={styles.td}
		>
			{children}
		</td>
	);
}
