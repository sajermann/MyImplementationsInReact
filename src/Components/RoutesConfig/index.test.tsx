/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { RoutesConfig } from '.';
import { InjectorProviders } from '../InjectorProviders';

describe('Components/RoutesConfig', () => {
	it(`should render component`, async () => {
		const { queryByTestId, getByTestId } = render(
			<InjectorProviders>
				<RoutesConfig />
			</InjectorProviders>,
		);

		// TODO: apply test
	});
});
