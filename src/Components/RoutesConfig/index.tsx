import { Routes, Route } from 'react-router-dom';
import { generateGuid } from '@sajermann/utils/Random';
import { ButtonPage } from '../../Pages/Button';
import DrawerDocs from '../../Pages/Drawer';
import Home from '../../Pages/Home';
import GettingStarted from '../../Pages/Getting Started';
import styles from './styles.module.css';
import OptionButtonDocs from '../../Pages/OptionButton';
import InputDocs from '../../Pages/Input';
import Footer from '../Footer';
import Sidebar from '../Sidebar';

const options = [
	{
		path: '/',
		element: <Home />,
		name: 'Home',
	},
	{
		path: '/button',
		element: <ButtonPage />,
		name: 'Button',
	},
];

export default function RoutesConfig() {
	return (
		<div className={styles.container}>
			<div className={styles.subContainer}>
				<Routes>
					{options.map(item => (
						<Route
							key={generateGuid()}
							path={item.path}
							element={item.element}
						/>
					))}
				</Routes>
				<Footer />
			</div>
			<Sidebar />
		</div>
	);
}
