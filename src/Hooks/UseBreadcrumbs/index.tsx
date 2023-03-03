import {
	createContext,
	useContext,
	ReactNode,
	useState,
	useMemo,
	Dispatch,
	SetStateAction,
	useEffect,
} from 'react';
import { useLocation } from 'react-router-dom';
import { TBreadcrumb } from '~/Types/TBreadcrumbs';
import { breadcrumbs as breadcrumbsBuild } from '~/Utils/Breadcrumbs';
import { useRoutesMenu } from '../UseRoutesMenu';
import { useTranslation } from '../UseTranslation';

type BreadcrumbsContextType = {
	breadcrumbs: TBreadcrumb[];
	setBreadcrumbs: Dispatch<SetStateAction<TBreadcrumb[]>>;
};

const breadcrumbsContextDefaultValues: BreadcrumbsContextType =
	{} as BreadcrumbsContextType;

const BreadcrumbsContext = createContext<BreadcrumbsContextType>(
	breadcrumbsContextDefaultValues
);

export function useBreadcrumbs() {
	return useContext(BreadcrumbsContext);
}

type Props = {
	children: ReactNode;
};

export function BreadcrumbsProvider({ children }: Props) {
	const [breadcrumbs, setBreadcrumbs] = useState<TBreadcrumb[]>([]);
	const { currentLanguage } = useTranslation();
	const location = useLocation();
	const { globalRoutes: options } = useRoutesMenu();

	useEffect(() => {
		const results = location.pathname.split('/');
		const final = breadcrumbsBuild.get(results, options);
		setBreadcrumbs(final);
	}, [location.pathname, currentLanguage]);

	const memoizedValue = useMemo(
		() => ({
			breadcrumbs,
			setBreadcrumbs,
		}),
		[breadcrumbs]
	);

	return (
		<BreadcrumbsContext.Provider value={memoizedValue}>
			{children}
		</BreadcrumbsContext.Provider>
	);
}
