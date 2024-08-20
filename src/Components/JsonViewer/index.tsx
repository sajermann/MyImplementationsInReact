import JsonView from '@uiw/react-json-view';
import { lightTheme } from '@uiw/react-json-view/light';
import { darkTheme } from '@uiw/react-json-view/dark';
import { useDarkModeZustand } from '~/Store/UseDarkMode';

interface JsonViewerProps {
	value?: object;
	collapsed?: boolean | number;
	shortenTextAfterLength?: number;
}

export function JsonViewer(data: JsonViewerProps) {
	const { darkMode } = useDarkModeZustand();
	const theme = darkMode ? { ...darkTheme } : { ...lightTheme };
	return <JsonView {...data} style={{ ...theme, width: '100%' }} />;
}
