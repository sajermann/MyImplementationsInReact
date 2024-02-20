import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { BreadcrumbsProvider } from '~/Hooks/UseBreadcrumbs';
import { FontSizeProvider } from '~/Hooks/UseFontSize';
import { useDarkModeZustand } from '~/Store/UseDarkMode';
import { handleChangeDarkModeInDom } from '~/Utils/DarkMode';

import '~/Config/i18n';
import { Layout } from '../Layout';

export function InjectorProviders({
	children,
	noLayout,
}: {
	children: React.ReactNode;
	noLayout?: true;
}) {
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
						{noLayout && children}
						{!noLayout && <Layout>{children}</Layout>}
					</FontSizeProvider>
				</BreadcrumbsProvider>
			</QueryClientProvider>
		</BrowserRouter>
	);
}
