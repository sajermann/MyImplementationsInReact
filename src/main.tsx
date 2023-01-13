import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import RoutesConfig from './Components/RoutesConfig';
import { DarkModeProvider } from './Hooks/DarkMode';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter basename="MyImplementationsInReact">
			<DarkModeProvider>
				<Header />
				<RoutesConfig />
			</DarkModeProvider>
		</BrowserRouter>
	</React.StrictMode>
);
