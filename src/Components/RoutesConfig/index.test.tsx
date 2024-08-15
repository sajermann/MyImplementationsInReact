/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import * as useLocationMock from 'react-router-dom';
import { it, describe, vi } from 'vitest';
import { RoutesConfig } from '.';
import { InjectorProviders } from '../InjectorProviders';

describe('Components/RoutesConfig', () => {
	vi.mock('react-router-dom', async () => {
		const mod = await vi.importActual<any>('react-router-dom');
		return {
			...mod,
		};
	});
	it(`should render component`, async () => {
		vi.spyOn(useLocationMock, 'useLocation').mockImplementation(
			() =>
				({
					pathname: '/test',
				}) as any,
		);
		const { getByText } = render(
			<InjectorProviders noLayout>
				<RoutesConfig />
			</InjectorProviders>,
		);
		expect(getByText(/Bruno Sajermann/g)).toBeTruthy();
	});
});
