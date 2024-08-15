/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { it, describe, vi } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { useRoutesMenu } from '~/Hooks/UseRoutesMenu';
import { TRoutesMenu } from '~/Types/TRoutesMenu';
import { OtherComponents } from '.';

describe('Components/Sidebar/OtherComponents', () => {
	vi.mock('~/Hooks/UseRoutesMenu');
	it(`should render prev and next`, async () => {
		const prev = {
			name: 'Home',
			path: '/',
			implements_code: '',
			docs_code: '',
			label: 'Home',
		} as TRoutesMenu;

		const current = {
			name: 'Button',
			path: '/button',
			implements_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Button/',
			docs_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Button',
			label: 'Button',
		} as TRoutesMenu;

		const next = {
			name: 'Modal',
			path: '/modal',
			implements_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Modal',
			docs_code:
				'https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Modal',

			label: 'Modal',
		} as TRoutesMenu;

		vi.mocked(useRoutesMenu).mockImplementation(() => ({
			globalMenus: () => [],
			globalRoutes: [prev, current, next],
			triRoutes: {
				next,
				prev,
			},
		}));
		const { getByText } = render(
			<InjectorProviders>
				<OtherComponents />
			</InjectorProviders>,
		);

		expect(getByText('Home')).toBeTruthy();
		expect(getByText('Modal')).toBeTruthy();
	});

	it(`should render prev and next`, async () => {
		const prev = {
			name: 'Home',
			path: '/',
			implements_code: '',
			docs_code: '',
			label: 'Home',
		} as TRoutesMenu;

		vi.mocked(useRoutesMenu).mockImplementation(() => ({
			globalMenus: () => [],
			globalRoutes: [prev],
			triRoutes: {
				next: null,
				prev: null,
			},
		}));
		const { queryByText } = render(
			<InjectorProviders>
				<OtherComponents />
			</InjectorProviders>,
		);
		expect(queryByText('Home')).toBeFalsy();
	});
});
