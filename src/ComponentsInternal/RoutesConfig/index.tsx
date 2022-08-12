import { Routes, Route } from 'react-router-dom';
import { generateGuid } from '@sajermann/utils/Random';
import ButtonDocs from '../../Pages/Docs/Button';
import DrawerDocs from '../../Pages/Docs/Drawer';
import Home from '../../Pages/Home';
import { useDarkMode } from '../../Hooks/DarkMode';

const options = [
	{
		path: '/',
		element: <Home />,
		name: 'Home',
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
				path: 'drawer',
				element: <DrawerDocs />,
				index: false,
			},
		],
	},
];

export default function RoutesConfig() {
	const { darkMode } = useDarkMode();
	return (
		<div
			style={{
				backgroundColor: darkMode ? 'rgb(31 41 55 / 1)' : '#fff',
				height: '100%',
			}}
		>
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
