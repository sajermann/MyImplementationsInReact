import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { DarkModeProvider } from '~/Hooks/DarkMode';
import Header from '~/Components/Header';
import '~/Config/i18n';

export function InjectorProviders({ children }: { children: React.ReactNode }) {
	return (
		<BrowserRouter basename={import.meta.env.VITE_URL_BASENAME}>
			<Toaster position="top-right" />
			<QueryClientProvider
				client={
					new QueryClient({
						defaultOptions: {
							queries: {
								refetchOnWindowFocus: false,
								retry: false,
							},
						},
					})
				}
			>
				<DarkModeProvider>
					<Header />
					{children}
				</DarkModeProvider>
			</QueryClientProvider>
		</BrowserRouter>
	);
}