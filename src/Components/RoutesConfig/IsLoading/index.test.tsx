/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { IsLoading } from '.';
import { InjectorProviders } from '../../InjectorProviders';

describe('Components/RoutesConfig/IsLoading', () => {
	it(`should render component`, async () => {
		const { getByText } = render(
			<InjectorProviders noLayout>
				<IsLoading />
			</InjectorProviders>,
		);
		expect(getByText(/Loading.../g)).toBeTruthy();
	});
});
