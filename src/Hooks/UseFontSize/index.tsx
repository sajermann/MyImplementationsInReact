import {
	createContext,
	useContext,
	ReactNode,
	useState,
	useMemo,
	useEffect,
} from 'react';

type FontSizeContextType = {
	defaultFontSize: number;
	fontSize: number;
	increaseFont: () => void;
	decreaseFont: () => void;
	resetFont: () => void;
};

const fontSizeContextDefaultValues: FontSizeContextType =
	{} as FontSizeContextType;

const FontSizeContext = createContext<FontSizeContextType>(
	fontSizeContextDefaultValues
);

export function useFontSize() {
	return useContext(FontSizeContext);
}

type Props = {
	children: ReactNode;
};

export function FontSizeProvider({ children }: Props) {
	const defaultFontSize = 16;
	const [fontSize, setFontSize] = useState(defaultFontSize);

	function changeDom(newValue: number) {
		const html = document.querySelector('html') as HTMLElement;
		html.style.fontSize = `${newValue}px`;
		sessionStorage.setItem('@sajermann/ui-react:fontSize', String(newValue));
		setFontSize(newValue);
	}

	function increaseFont() {
		changeDom(fontSize + 1);
	}
	function decreaseFont() {
		changeDom(fontSize - 1);
	}
	function resetFont() {
		changeDom(defaultFontSize);
	}

	useEffect(() => {
		const result = sessionStorage.getItem('@sajermann/ui-react:fontSize');
		if (result) {
			changeDom(Number(result));
		}
	}, []);

	const memoizedValue = useMemo(
		() => ({
			fontSize,
			defaultFontSize,
			increaseFont,
			decreaseFont,
			resetFont,
		}),
		[fontSize]
	);

	return (
		<FontSizeContext.Provider value={memoizedValue}>
			{children}
		</FontSizeContext.Provider>
	);
}
