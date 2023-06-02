import { lazy, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { Home } from '~/Pages/Home';
import { TRoutesMenu } from '~/Types/TRoutesMenu';
import { useTranslation } from '~/Hooks/UseTranslation';
import { CheckboxDemo } from '~/Components/Demos/Checkbox';
import { ButtonDemo } from '~/Components/Demos/Button';
import { DatepickerDemo } from '~/Components/Demos/Datepicker';
import { DrawerDemo } from '~/Components/Demos/Drawer';
import { InputDemo } from '~/Components/Demos/Input';
import { ModalDemo } from '~/Components/Demos/Modal';
import { SelectDemo } from '~/Components/Demos/Select';
import { ToastDemo } from '~/Components/Demos/Toast';
import { TTriRoutes } from '~/Types/TTriRoutes';
import { triRoutes as triRoutesMount } from '~/Utils/TriRoutes';
import { menus as menusMount } from '~/Utils/Menus';
import { PrintDemo } from '~/Components/Demos/Print';
import { TableDemo } from '~/Components/Demos/Table';
import { CarouselDemo } from '~/Components/Demos/Carousel';
import { SearchBoxDemo } from '~/Components/Demos/SearchBox';
import { AnimateInViewDemo } from '~/Components/Demos/AnimateInView';
import { CalendarPickerDemo } from '~/Components/Demos/CalendarPicker';

const ColumnVisibilityPage = lazy(() =>
	import('~/Pages/Table/ColumnVisibility').then(
		({ ColumnVisibilityPage: ColumnVisibility }) => ({
			default: ColumnVisibility,
		})
	)
);

const ExportPage = lazy(() =>
	import('~/Pages/Table/Export').then(({ ExportPage: Export }) => ({
		default: Export,
	}))
);

const ToastPage = lazy(() =>
	import('~/Pages/Toast').then(({ ToastPage: Toast }) => ({
		default: Toast,
	}))
);

const SortPage = lazy(() =>
	import('~/Pages/Table/Sort').then(({ SortPage: Sort }) => ({
		default: Sort,
	}))
);

const EditablePage = lazy(() =>
	import('~/Pages/Table/Editable').then(({ EditablePage: Editable }) => ({
		default: Editable,
	}))
);

const FullEditablePage = lazy(() =>
	import('~/Pages/Table/FullEditable').then(
		({ FullEditablePage: FullEditable }) => ({
			default: FullEditable,
		})
	)
);

const VirtualizedPage = lazy(() =>
	import('~/Pages/Table/Virtualized').then(
		({ VirtualizedPage: Virtualized }) => ({
			default: Virtualized,
		})
	)
);

const PaginationPage = lazy(() =>
	import('~/Pages/Table/Pagination').then(({ PaginationPage: Pagination }) => ({
		default: Pagination,
	}))
);

const FavoritesPage = lazy(() =>
	import('~/Pages/Table/Favorites').then(({ FavoritesPage: Favorites }) => ({
		default: Favorites,
	}))
);

const EllipsisPage = lazy(() =>
	import('~/Pages/Table/Ellipsis').then(({ EllipsisPage: Ellipsis }) => ({
		default: Ellipsis,
	}))
);

const ResizingPage = lazy(() =>
	import('~/Pages/Table/Resizing').then(({ ResizingPage: Resizing }) => ({
		default: Resizing,
	}))
);

const FilterPage = lazy(() =>
	import('~/Pages/Table/Filter').then(({ FilterPage: Filter }) => ({
		default: Filter,
	}))
);

const SelectionPage = lazy(() =>
	import('~/Pages/Table/Selection').then(({ SelectionPage: Selection }) => ({
		default: Selection,
	}))
);

const ExpandedLinePage = lazy(() =>
	import('~/Pages/Table/ExpandedLine').then(
		({ ExpandedLinePage: ExpandedLine }) => ({
			default: ExpandedLine,
		})
	)
);

const LoadingPage = lazy(() =>
	import('~/Pages/Table/Loading').then(({ LoadingPage: Loading }) => ({
		default: Loading,
	}))
);

const ColumnOrderPage = lazy(() =>
	import('~/Pages/Table/ColumnOrder').then(
		({ ColumnOrderPage: ColumnOrder }) => ({
			default: ColumnOrder,
		})
	)
);

const InputPage = lazy(() =>
	import('~/Pages/Input').then(({ InputPage: Input }) => ({
		default: Input,
	}))
);

const ModalPage = lazy(() =>
	import('~/Pages/Modal').then(({ ModalPage: Modal }) => ({
		default: Modal,
	}))
);

const SelectPage = lazy(() =>
	import('~/Pages/Select').then(({ SelectPage: Select }) => ({
		default: Select,
	}))
);

const TablePage = lazy(() =>
	import('~/Pages/Table').then(({ TablePage: Table }) => ({
		default: Table,
	}))
);

const DrawerPage = lazy(() =>
	import('~/Pages/Drawer').then(({ DrawerPage: Drawer }) => ({
		default: Drawer,
	}))
);

const CheckboxPage = lazy(() =>
	import('~/Pages/Checkbox').then(({ CheckboxPage: Checkbox }) => ({
		default: Checkbox,
	}))
);

const DatepickerPage = lazy(() =>
	import('~/Pages/Datepicker').then(({ DatepickerPage: Datepicker }) => ({
		default: Datepicker,
	}))
);

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

const PrintPage = lazy(() =>
	import('~/Pages/Print').then(({ PrintPage: Print }) => ({
		default: Print,
	}))
);

const CarouselPage = lazy(() =>
	import('~/Pages/Carousel').then(({ CarouselPage: Carousel }) => ({
		default: Carousel,
	}))
);

const AnimateInViewPage = lazy(() =>
	import('~/Pages/AnimateInViewPage').then(
		({ AnimateInViewPage: AnimateInView }) => ({
			default: AnimateInView,
		})
	)
);

const NotFoundPage = lazy(() =>
	import('~/Pages/NotFound').then(({ NotFoundPage: NotFound }) => ({
		default: NotFound,
	}))
);

const SearchBoxPage = lazy(() =>
	import('~/Pages/SearchBox').then(({ SearchBoxPage: SearchBox }) => ({
		default: SearchBox,
	}))
);

const CalendarPickerPage = lazy(() =>
	import('~/Pages/CalendarPicker').then(
		({ CalendarPickerPage: CalendarPicker }) => ({
			default: CalendarPicker,
		})
	)
);

export function useRoutesMenu() {
	const { translate, currentLanguage } = useTranslation();
	const location = useLocation();
	const globalRoutes: TRoutesMenu[] = useMemo(
		(): TRoutesMenu[] => [
			{
				name: 'Home',
				path: '/',
				implements_code: '',
				docs_code: '',
				element: <Home />,
				label: 'Home',
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
				label: translate('BUTTON'),
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
				label: 'Modal',
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
				label: 'Drawer',
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
				label: 'Input',
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
				label: 'Datepicker',
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
				label: 'Select',
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
				label: 'Checkbox',
			},
			{
				name: 'Table',
				path: '/table',
				implements_code:
					'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
				docs_code:
					'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table',
				element: <TablePage />,
				label: translate('TABLE'),
				demo: <TableDemo />,
				subs: [
					{
						name: 'Filter',
						path: '/table/filter',
						implements_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
						docs_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Filter',
						element: <FilterPage />,
						label: translate('FILTER'),
					},
					{
						name: 'Selection',
						path: '/table/selection',
						implements_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
						docs_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Selection',
						element: <SelectionPage />,
						label: translate('SELECTION'),
					},
					{
						name: 'ExpandedLine',
						path: '/table/expand-line',
						implements_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
						docs_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/ExpandedLine',
						element: <ExpandedLinePage />,
						label: translate('EXPAND_LINE'),
					},
					{
						name: 'Loading',
						path: '/table/loading',
						implements_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
						docs_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Loading',
						element: <LoadingPage />,
						label: translate('LOADING'),
					},
					{
						name: 'ColumnOrder',
						path: '/table/column-order',
						implements_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
						docs_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/ColumnOrder',
						element: <ColumnOrderPage />,
						label: translate('COLUMN_ORDER'),
					},
					{
						name: 'Sort',
						path: '/table/sort',
						implements_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
						docs_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Sort',
						element: <SortPage />,
						label: translate('SORT'),
					},
					{
						name: 'Editable',
						path: '/table/editable',
						implements_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
						docs_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Editable',
						element: <EditablePage />,
						label: translate('EDITABLE'),
					},
					{
						name: 'FullEditable',
						path: '/table/full-editable',
						implements_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
						docs_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/FullEditable',
						element: <FullEditablePage />,
						label: translate('FULL_EDITABLE'),
					},
					{
						name: 'Virtualized',
						path: '/table/virtualized',
						implements_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
						docs_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Virtualized',
						element: <VirtualizedPage />,
						label: translate('VIRTUALIZED'),
					},
					{
						name: 'Pagination',
						path: '/table/pagination',
						implements_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
						docs_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Pagination',
						element: <PaginationPage />,
						label: translate('PAGINATION'),
					},
					{
						name: 'Favorites',
						path: '/table/favorites',
						implements_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
						docs_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Favorites',
						element: <FavoritesPage />,
						label: translate('FAVORITES'),
					},
					{
						name: 'Ellipsis',
						path: '/table/ellipsis',
						implements_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
						docs_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Ellipsis',
						element: <EllipsisPage />,
						label: 'Ellipsis',
					},
					{
						name: 'Resizing',
						path: '/table/resizing',
						implements_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
						docs_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Resizing',
						element: <ResizingPage />,
						label: translate('RESIZING'),
					},
					{
						name: 'ColumnVisibility',
						path: '/table/column-visibility',
						implements_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
						docs_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/ColumnVisibility',
						element: <ColumnVisibilityPage />,
						label: translate('COLUMN_VISIBILITY'),
					},
					{
						name: 'Export',
						path: '/table/export',
						implements_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
						docs_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Export',
						element: <ExportPage />,
						label: translate('EXPORT'),
					},
					{
						name: 'Footer',
						path: '/table/footer',
						implements_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Table',
						docs_code:
							'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Table/Footer',
						element: <FooterPage />,
						label: translate('FOOTER'),
					},
				],
			},
			{
				name: 'Search Box',
				path: '/search-box',
				implements_code:
					'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/SearchBox',
				docs_code:
					'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/SearchBox',
				element: <SearchBoxPage />,
				label: translate('SEARCH_BOX'),
				demo: <SearchBoxDemo />,
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
				label: 'Toast',
			},
			{
				name: 'Print',
				path: '/print',
				implements_code:
					'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Hooks/UsePrinter',
				docs_code:
					'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Print',
				element: <PrintPage />,
				label: translate('PRINT'),
				demo: <PrintDemo />,
			},
			{
				name: 'Carousel',
				path: '/carousel',
				implements_code:
					'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Carousel',
				docs_code:
					'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Carousel',
				element: <CarouselPage />,
				label: translate('CAROUSEL'),
				demo: <CarouselDemo />,
			},
			{
				name: 'Animate In View',
				path: '/animate-in-view',
				implements_code:
					'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/AnimateInView',
				docs_code:
					'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/AnimateInView',
				element: <AnimateInViewPage />,
				label: translate('ANIMATE_IN_VIEW'),
				demo: <AnimateInViewDemo />,
			},
			{
				name: 'Calendar Picker',
				path: '/calendar-picker',
				implements_code:
					'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/CalendarPicker',
				docs_code:
					'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/CalendarPicker',
				element: <CalendarPickerPage />,
				label: translate('CALENDAR_PICKER'),
				demo: <CalendarPickerDemo />,
				className:
					'col-span-12 sm:!col-span-12 lg:!col-span-8 xl:!col-span-6 h-[30rem] md:row-span-2 md:h-[40rem]',
			},
			{
				name: 'NotFound',
				path: '*',
				implements_code: '',
				docs_code: '',
				element: <NotFoundPage />,
				label: translate('NOT_FOUND'),
				hideTriRoutes: true,
				hideMenu: true,
			},
		],
		[currentLanguage]
	);

	const triRoutes: TTriRoutes = useMemo(
		() => triRoutesMount.get(globalRoutes, location.pathname),
		[currentLanguage, location.pathname]
	);

	function globalMenus(filterValue: string) {
		return menusMount.get(globalRoutes, filterValue);
	}

	return { globalRoutes, triRoutes, globalMenus };
}
