import {
	createContext,
	useContext,
	ReactNode,
	useState,
	useMemo,
	Dispatch,
	SetStateAction,
} from 'react';

type LoadingLazyContextType = {
	isLoadingLazy: boolean;
	setIsLoadingLazy: Dispatch<SetStateAction<boolean>>;
};

const isLoadingLazyContextDefaultValues: LoadingLazyContextType =
	{} as LoadingLazyContextType;

const LoadingLazyContext = createContext<LoadingLazyContextType>(
	isLoadingLazyContextDefaultValues
);

export function useLoadingLazy() {
	return useContext(LoadingLazyContext);
}

type Props = {
	children: ReactNode;
};

export function LoadingLazyProvider({ children }: Props) {
	const [isLoadingLazy, setIsLoadingLazy] = useState(true);

	const memoizedValue = useMemo(
		() => ({
			isLoadingLazy,
			setIsLoadingLazy,
		}),
		[isLoadingLazy]
	);

	return (
		<LoadingLazyContext.Provider value={memoizedValue}>
			{children}
		</LoadingLazyContext.Provider>
	);
}
