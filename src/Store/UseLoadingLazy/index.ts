import { create } from 'zustand';
import zukeeper from 'zukeeper';
import { Dispatch, SetStateAction } from 'react';

interface Props {
	isLoadingLazy: boolean;
	setIsLoadingLazy: Dispatch<SetStateAction<boolean>>;
}
type SetProps = (
	partial: Props | Partial<Props> | ((state: Props) => Props | Partial<Props>),
	replace?: boolean | undefined
) => void;

export const useLoadingLazy = create<Props>()(
	zukeeper((set: SetProps) => ({
		isLoadingLazy: true,
		setIsLoadingLazy: (data: boolean) =>
			set(state => ({
				...state,
				isLoadingLazy: data,
			})),
	}))
);
window.store = useLoadingLazy;
