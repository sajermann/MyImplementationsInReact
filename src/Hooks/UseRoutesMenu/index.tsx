import { lazy } from 'react';

import { CheckboxDemo } from '~/Components/Demos/Checkbox';
import { ButtonDemo } from '~/Components/Demos/Button';
import { DatepickerDemo } from '~/Components/Demos/Datepicker';
import { DrawerDemo } from '~/Components/Demos/Drawer';
import { InputDemo } from '~/Components/Demos/Input';
import { ModalDemo } from '~/Components/Demos/Modal';
import { SelectDemo } from '~/Components/Demos/Select';
// import { ButtonPage } from '~/Pages/Button';
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
import { SelectionPage } from '~/Pages/Table/Selection';
import { ExpandedLinePage } from '~/Pages/Table/ExpandedLine';
import { LoadingPage } from '~/Pages/Table/Loading';
import { ColumnOrderPage } from '~/Pages/Table/ColumnOrder';
import { SortPage } from '~/Pages/Table/Sort';
import { EditablePage } from '~/Pages/Table/Editable';
import { FullEditablePage } from '~/Pages/Table/FullEditable';
import { VirtualizedPage } from '~/Pages/Table/Virtualized';
import { PaginationPage } from '~/Pages/Table/Pagination';
import { FavoritesPage } from '~/Pages/Table/Favorites';
import { EllipsisPage } from '~/Pages/Table/Ellipsis';
import { ResizingPage } from '~/Pages/Table/Resizing';
import { ColumnVisibilityPage } from '~/Pages/Table/ColumnVisibility';
import { PrintPage } from '~/Pages/Table/Print';
import { ExportPage } from '~/Pages/Table/Export';
import { ToastPage } from '~/Pages/Toast';
import { ToastDemo } from '~/Components/Demos/Toast';
import { PdfPage } from '~/Pages/Pdf';
// import { FooterPage } from '~/Pages/Table/Footer';

const FooterPage = lazy(() =>
	import('~/Pages/Table/Footer').then(({ FooterPage: Footer }) => ({
		default: Footer,
	}))
);

const ButtonPage = lazy(() =>
	import('~/Pages/Button').then(({ ButtonPage: Button }) => ({
		default: Button,
	}))
);

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
			subs: [
				{
					name: 'Filter',
					path: '/table/filter',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Filter',
					element: <FilterPage />,
				},
				{
					name: 'Selection',
					path: '/table/selection',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Selection',
					element: <SelectionPage />,
				},
				{
					name: 'ExpandedLine',
					path: '/table/expand-line',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/ExpandedLine',
					element: <ExpandedLinePage />,
				},
				{
					name: 'Loading',
					path: '/table/loading',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Loading',
					element: <LoadingPage />,
				},
				{
					name: 'ColumnOrder',
					path: '/table/column-order',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/ColumnOrder',
					element: <ColumnOrderPage />,
				},
				{
					name: 'Sort',
					path: '/table/sort',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Sort',
					element: <SortPage />,
				},
				{
					name: 'Editable',
					path: '/table/editable',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Editable',
					element: <EditablePage />,
				},
				{
					name: 'FullEditable',
					path: '/table/full-editable',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/FullEditable',
					element: <FullEditablePage />,
				},
				{
					name: 'Virtualized',
					path: '/table/virtualized',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Virtualized',
					element: <VirtualizedPage />,
				},
				{
					name: 'Pagination',
					path: '/table/pagination',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Pagination',
					element: <PaginationPage />,
				},
				{
					name: 'Favorites',
					path: '/table/favorites',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Favorites',
					element: <FavoritesPage />,
				},
				{
					name: 'Ellipsis',
					path: '/table/ellipsis',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Ellipsis',
					element: <EllipsisPage />,
				},
				{
					name: 'Resizing',
					path: '/table/resizing',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Resizing',
					element: <ResizingPage />,
				},
				{
					name: 'ColumnVisibility',
					path: '/table/column-visibility',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/ColumnVisibility',
					element: <ColumnVisibilityPage />,
				},
				{
					name: 'Print',
					path: '/table/print',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Print',
					element: <PrintPage />,
				},
				{
					name: 'Export',
					path: '/table/export',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Export',
					element: <ExportPage />,
				},
				{
					name: 'Footer',
					path: '/table/footer',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Footer',
					element: <FooterPage />,
				},
			],
		},
		{
			name: 'Toast',
			path: '/toast',
			implements_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
			docs_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Toast',
			element: <ToastPage />,
			demo: <ToastDemo />,
		},
		{
			name: 'Pdf',
			path: '/pdf',
			implements_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
			docs_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Pdf',
			element: <PdfPage />,
		},
	];
	return { options };
}
