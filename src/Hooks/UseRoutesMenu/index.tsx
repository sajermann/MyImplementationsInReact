import { DemoButton } from '~/Components/DemoButton';
import { DemoDatepicker } from '~/Components/DemoDatepicker';
import { DemoDrawer } from '~/Components/DemoDrawer';
import { DemoInput } from '~/Components/DemoInput';
import { DemoModal } from '~/Components/DemoModal';
import { ButtonPage } from '~/Pages/Button';
import { DatepickerPage } from '~/Pages/Datepicker';
import { DrawerPage } from '~/Pages/Drawer';
import { Home } from '~/Pages/Home';
import { InputPage } from '~/Pages/Input';
import { ModalPage } from '~/Pages/Modal';

export function useRoutesMenu() {
	const options = [
		{
			name: 'Home',
			path: '/',
			implements_code: '',
			docs_code: '',
			element: <Home />,
		},
		{
			name: 'Button',
			path: '/button',
			implements_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Button/',
			docs_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Button',
			element: <ButtonPage />,
			demo: <DemoButton />,
		},
		{
			name: 'Modal',
			path: '/modal',
			implements_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Modal',
			docs_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Modal',
			element: <ModalPage />,
			demo: <DemoModal />,
		},
		{
			name: 'Drawer',
			path: '/drawler',
			implements_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Drawer',
			docs_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Drawer',
			element: <DrawerPage />,
			demo: <DemoDrawer />,
		},
		{
			name: 'Input',
			path: '/input',
			implements_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Input',
			docs_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Input',
			element: <InputPage />,
			demo: <DemoInput />,
		},
		{
			name: 'Datepicker',
			path: '/datepicker',
			implements_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Datepicker',
			docs_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Datepicker',
			element: <DatepickerPage />,
			demo: <DemoDatepicker />,
		},
	];
	return { options };
}
