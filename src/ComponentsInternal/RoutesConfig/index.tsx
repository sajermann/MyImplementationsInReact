import { Routes, Route } from 'react-router-dom';
import { generateGuid } from '@sajermann/utils/Random';
import ButtonDocs from '../../Pages/Docs/Button';
import DrawerDocs from '../../Pages/Docs/Drawer';
import Home from '../../Pages/Home';
import GettingStarted from '../../Pages/Docs/Getting Started';
import styles from './styles.module.css';
import OptionButtonDocs from '../../Pages/Docs/OptionButton';
import InputDocs from '../../Pages/Docs/Input';

const options = [
	{
		path: '/',
		element: <Home />,
		name: 'Home',
		index: true,
		subItems: [],
	},
	{
		path: '/NPM-SajermannUiReact',
		element: <Home />,
		name: 'Home',
		index: true,
		subItems: [],
	},
	{
		path: '/getting-started',
		element: <GettingStarted />,
		name: 'Instação',
		index: true,
		subItems: [],
	},
	{
		path: '/docs',
		name: 'Components',
		element: undefined,
		index: false,
		subItems: [
			{
				path: 'button',
				element: <ButtonDocs />,
				index: false,
			},
			{
				path: 'option-button',
				element: <OptionButtonDocs />,
				index: false,
			},
			{
				path: 'drawer',
				element: <DrawerDocs />,
				index: false,
			},
			{
				path: 'input',
				element: <InputDocs />,
				index: false,
			},
		],
	},
];

export default function RoutesConfig() {
	return (
		<div className={styles.container}>
			<Routes>
				{options.map(item => {
					if (item.subItems.length === 0) {
						return (
							<Route key={generateGuid()} path={item.path}>
								<Route index={item.index} element={item.element} />
							</Route>
						);
					}
					return (
						<Route key={generateGuid()} path={item.path}>
							{item.subItems.map(subItem => (
								<Route
									key={generateGuid()}
									path={subItem.path}
									element={subItem.element}
								/>
							))}
						</Route>
					);
				})}
			</Routes>
		</div>
	);
}
