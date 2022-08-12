import { createContext, useContext, ReactNode, useState, useMemo } from 'react';

type DarkModeContextType = {
	darkMode: boolean;
	toggleDarkMode: () => void;
};

const darkModeContextDefaultValues: DarkModeContextType =
	{} as DarkModeContextType;

const DarkModeContext = createContext<DarkModeContextType>(
	darkModeContextDefaultValues
);

export function useDarkMode() {
	return useContext(DarkModeContext);
}

type Props = {
	children: ReactNode;
};

export function DarkModeProvider({ children }: Props) {
	const [darkMode, setDarkMode] = useState(true);

	function toggleDarkMode() {
		setDarkMode(!darkMode);
	}

	// const value = {
	// 	darkMode,
	// 	toggleDarkMode,
	// };

	const memoizedValue = useMemo(
		() => ({
			darkMode,
			toggleDarkMode,
		}),
		[darkMode]
	);

	return (
		<DarkModeContext.Provider value={memoizedValue}>
			{children}
		</DarkModeContext.Provider>
	);
}
