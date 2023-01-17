import React from 'react';
import ReactDOM from 'react-dom/client';
import { InjectorProviders } from '~/Components/InjectorProviders';
import RoutesConfig from './Components/RoutesConfig';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<InjectorProviders>
			<RoutesConfig />
		</InjectorProviders>
	</React.StrictMode>
);
