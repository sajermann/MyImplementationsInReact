import { ButtonPage } from '~/Pages/Button';
import DrawerPage from '~/Pages/Drawer';
import Home from '~/Pages/Home';
import { ModalPage } from '~/Pages/Modal';

export function useRoutesMenu() {
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
		{
			path: '/modal',
			element: <ModalPage />,
			name: 'Modal',
		},
		{
			path: '/drawler',
			element: <DrawerPage />,
			name: 'Drawer',
		},
	];
	return { options };
}
