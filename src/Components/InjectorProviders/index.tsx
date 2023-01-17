import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { DarkModeProvider } from '~/Hooks/DarkMode';
import Header from '~/Components/Header';
import '~/Config/i18n';

export function InjectorProviders({ children }: { children: React.ReactNode }) {
	return (
		<BrowserRouter basename="MyImplementationsInReact/">
			<DarkModeProvider>
				<Header />
				{children}
			</DarkModeProvider>
		</BrowserRouter>
	);
}
