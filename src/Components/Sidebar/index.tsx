import { useLocation } from 'react-router-dom';
import PrevAndNext from '../PrevAndNext';
import TableOfContents from '../TableOfContents';
import styles from './styles.module.css';

export default function Sidebar() {
	const location = useLocation();

	if (location.pathname === '/') {
		return null;
	}

	return (
		<aside className={styles.container}>
			<TableOfContents />
			<PrevAndNext />
		</aside>
	);
}
