import { ButtonPage } from '~/Pages/Button';
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
	];
	return { options };
}
