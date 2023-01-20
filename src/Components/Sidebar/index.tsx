import { useLocation } from 'react-router-dom';
import PrevAndNext from '../PrevAndNext';
import TableOfContents from '../TableOfContents';
import styles from './styles.module.css';

export default function Sidebar() {
	const location = useLocation();

	// if (!location.pathname.includes('/docs/')) {
	// 	return null;;Favzer verificacao de coimo vai ficar, tem outro lugar com essa mesma pegada para conferir
	// }

	return (
		<div className={styles.container}>
			<TableOfContents />
			<PrevAndNext />
		</div>
	);
}
