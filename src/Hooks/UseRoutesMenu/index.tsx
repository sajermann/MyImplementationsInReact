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
import ColumnOrderPage from '~/Pages/Table/ColumnOrder';
import SortPage from '~/Pages/Table/Sort';
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
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Filter',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Filter',
					element: <FilterPage />,
				},
				{
					name: 'Selection',
					path: '/table/selection',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table/Selection',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Selection',
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
				{
					name: 'ColumnOrder',
					path: '/table/column-order',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/ColumnOrder',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/ColumnOrder',
					element: <ColumnOrderPage />,
				},
				{
					name: 'Sort',
					path: '/table/sort',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Sort',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Sort',
					element: <SortPage />,
				},
				{
					name: 'Editable',
					path: '/table/editable',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Editable',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Editable',
					element: <EditablePage />,
				},
				{
					name: 'FullEditable',
					path: '/table/full-editable',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/FullEditable',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/FullEditable',
					element: <FullEditablePage />,
				},
				{
					name: 'Virtualized',
					path: '/table/virtualized',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Virtualized',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Virtualized',
					element: <VirtualizedPage />,
				},
				{
					name: 'Pagination',
					path: '/table/pagination',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Pagination',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Pagination',
					element: <PaginationPage />,
				},
				{
					name: 'Favorites',
					path: '/table/favorites',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Favorites',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Favorites',
					element: <FavoritesPage />,
				},
				{
					name: 'Ellipsis',
					path: '/table/ellipsis',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Ellipsis',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Ellipsis',
					element: <EllipsisPage />,
				},
				{
					name: 'Resizing',
					path: '/table/resizing',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Resizing',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Resizing',
					element: <ResizingPage />,
				},
				{
					name: 'ColumnVisibility',
					path: '/table/column-visibility',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/ColumnVisibility',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/ColumnVisibility',
					element: <ColumnVisibilityPage />,
				},
				{
					name: 'Print',
					path: '/table/print',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Print',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Print',
					element: <PrintPage />,
				},
				{
					name: 'Export',
					path: '/table/export',
					implements_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Export',
					docs_code:
						'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Export',
					element: <ExportPage />,
				},
			],
		},
		{
			name: 'Toast',
			path: '/toast',
			implements_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Toast',
			docs_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Toast',
			element: <ToastPage />,
			demo: <ToastDemo />,
		},
		{
			name: 'Pdf',
			path: '/pdf',
			implements_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Pdf',
			docs_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Pdf',
			element: <PdfPage />,
		},
	];
	return { options };
}
