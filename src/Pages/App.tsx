import { BrowserRouter } from 'react-router-dom';
import Header from '../ComponentsInternal/Header';
import RoutesConfig from '../ComponentsInternal/RoutesConfig';
import { DarkModeProvider } from '../Hooks/DarkMode';

function App() {
	return (
		<BrowserRouter basename="/NPM-SajermannUiReact">
			<DarkModeProvider>
				<Header />
				<RoutesConfig />
			</DarkModeProvider>
		</BrowserRouter>
	);
}

export default App;
