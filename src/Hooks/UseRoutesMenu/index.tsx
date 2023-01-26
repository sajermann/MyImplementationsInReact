import { DemoButton } from '~/Components/DemoButton';
import { DemoDrawer } from '~/Components/DemoDrawer';
import { DemoInput } from '~/Components/DemoInput';
import { DemoModal } from '~/Components/DemoModal';
import { ButtonPage } from '~/Pages/Button';
import DrawerPage from '~/Pages/Drawer';
import Home from '~/Pages/Home';
import { InputPage } from '~/Pages/Input';
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
			demo: <DemoButton />,
		},
		{
			path: '/modal',
			element: <ModalPage />,
			name: 'Modal',
			demo: <DemoModal />,
		},
		{
			path: '/drawler',
			element: <DrawerPage />,
			name: 'Drawer',
			demo: <DemoDrawer />,
		},
		{
			path: '/input',
			element: <InputPage />,
			name: 'Input',
			demo: <DemoInput />,
		},
	];
	return { options };
}
