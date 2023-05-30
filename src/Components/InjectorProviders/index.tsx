import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Header } from '~/Components/Header';
import { BreadcrumbsProvider } from '~/Hooks/UseBreadcrumbs';
import { FontSizeProvider } from '~/Hooks/UseFontSize';
import { useDarkModeZustand } from '~/Store/UseDarkMode';
import { handleChangeDarkModeInDom } from '~/Utils/DarkMode';

import '~/Config/i18n';

export function InjectorProviders({ children }: { children: React.ReactNode }) {
	const { darkMode } = useDarkModeZustand();
	useEffect(() => handleChangeDarkModeInDom(darkMode), []);
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
				<BreadcrumbsProvider>
					<FontSizeProvider>
						<Header />
						{children}
					</FontSizeProvider>
				</BreadcrumbsProvider>
			</QueryClientProvider>
		</BrowserRouter>
	);
}
