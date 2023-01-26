import { Routes, Route } from 'react-router-dom';
import { generateGuid } from '@sajermann/utils/Random';

import { useRoutesMenu } from '~/Hooks/UseRoutesMenu';
import styles from './styles.module.css';
import Footer from '../Footer';
import Sidebar from '../Sidebar';

export default function RoutesConfig() {
	const { options } = useRoutesMenu();
	return (
		<div className={styles.container}>
			<Routes>
				{options.map(item => (
					<Route key={generateGuid()} path={item.path} element={item.element} />
				))}
			</Routes>
			<Footer />

			<Sidebar />
		</div>
	);
}
