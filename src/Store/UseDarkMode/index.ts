import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import zukeeper from 'zukeeper';
import { handleChangeDarkModeInDom } from '~/Utils/DarkMode';

interface Props {
	darkMode: boolean;
	toggleDarkMode: () => void;
}
type SetProps = (
	partial: Props | Partial<Props> | ((state: Props) => Props | Partial<Props>),
	replace?: boolean | undefined
) => void;

export const useDarkModeZustand = create<Props>()(
	persist(
		zukeeper((set: SetProps) => ({
			darkMode: true,
			toggleDarkMode: () =>
				set(state => {
					handleChangeDarkModeInDom(!state.darkMode);
					return {
						...state,
						darkMode: !state.darkMode,
					};
				}),
		})),
		{
			name: '@sajermann/ui-react:darkMode-zustand', // name of the item in the storage (must be unique)
		}
	)
);
window.store = useDarkModeZustand;
