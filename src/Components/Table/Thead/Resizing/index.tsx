import { Header } from '@tanstack/react-table';
import styles from './index.module.css';

export function Resizing<T>({ header }: { header: Header<T, unknown> }) {
	if (!header.column.getCanResize()) return null;
	return (
		<div
			{...{
				onMouseDown: header.getResizeHandler(),
				onTouchStart: header.getResizeHandler(),
				className: `${styles.resizer} ${
					header.column.getIsResizing() ? styles.isResizing : ''
				}`,
			}}
		/>
	);
}
