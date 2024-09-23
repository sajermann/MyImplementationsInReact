import { create } from 'zustand';

interface Props {
	isLoadingLazy: boolean;
	setIsLoadingLazy: (data: boolean) => void;
}

export const useLoadingLazy = create<Props>()(set => ({
	isLoadingLazy: true,
	setIsLoadingLazy: (data: boolean) =>
		set(state => ({
			...state,
			isLoadingLazy: data,
		})),
}));
window.store = useLoadingLazy;
