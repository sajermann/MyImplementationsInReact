import { CheckboxDemo } from '~/Components/Demos/Checkbox';
import { ButtonDemo } from '~/Components/Demos/Button';
import { DatepickerDemo } from '~/Components/Demos/Datepicker';
import { DrawerDemo } from '~/Components/Demos/Drawer';
import { InputDemo } from '~/Components/Demos/Input';
import { ModalDemo } from '~/Components/Demos/Modal';
import { SelectDemo } from '~/Components/Demos/Select';
import { ButtonPage } from '~/Pages/Button';
import { CheckboxPage } from '~/Pages/Checkbox';
import { DatepickerPage } from '~/Pages/Datepicker';
import { DrawerPage } from '~/Pages/Drawer';
import { Home } from '~/Pages/Home';
import { InputPage } from '~/Pages/Input';
import { ModalPage } from '~/Pages/Modal';
import { SelectPage } from '~/Pages/Select';
import { TablePage } from '~/Pages/Table';
import { FilterPage } from '~/Pages/Table/Filter';
import { TRoutesMenu } from '~/Types/TRoutesMenu';
import SelectionPage from '~/Pages/Table/Selection';
import ExpandedLinePage from '~/Pages/Table/ExpandedLine';
import LoadingPage from '~/Pages/Table/Loading';

export function useRoutesMenu() {
	const options: TRoutesMenu[] = [
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
			demo: <ButtonDemo />,
		},
		{
			name: 'Modal',
			path: '/modal',
			implements_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Modal',
			docs_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Modal',
			element: <ModalPage />,
			demo: <ModalDemo />,
		},
		{
			name: 'Drawer',
			path: '/drawler',
			implements_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Drawer',
			docs_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Drawer',
			element: <DrawerPage />,
			demo: <DrawerDemo />,
		},
		{
			name: 'Input',
			path: '/input',
			implements_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Input',
			docs_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Input',
			element: <InputPage />,
			demo: <InputDemo />,
		},
		{
			name: 'Datepicker',
			path: '/datepicker',
			implements_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Datepicker',
			docs_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Datepicker',
			element: <DatepickerPage />,
			demo: <DatepickerDemo />,
		},
		{
			name: 'Select',
			path: '/select',
			implements_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Select',
			docs_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Select',
			element: <SelectPage />,
			demo: <SelectDemo />,
		},
		{
			name: 'Checkbox',
			path: '/checkbox',
			implements_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Checkbox',
			docs_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Checkbox',
			element: <CheckboxPage />,
			demo: <CheckboxDemo />,
		},
		{
			name: 'Table',
			path: '/table',
			implements_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
			docs_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table',
			element: <TablePage />,
			demo: <SelectDemo />,
			subs: [
				{
					name: 'Filter',
					path: '/table/filter',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Select',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Select',
					element: <FilterPage />,
				},
				{
					name: 'Selection',
					path: '/table/selection',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table/Select',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Select',
					element: <SelectionPage />,
				},
				{
					name: 'ExpandedLine',
					path: '/table/expand-line',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/ExpandedLine',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/ExpandedLine',
					element: <ExpandedLinePage />,
				},
				{
					name: 'Loading',
					path: '/table/loading',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Loading',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Loading',
					element: <LoadingPage />,
				},
			],
		},
	];
	return { options };
}
