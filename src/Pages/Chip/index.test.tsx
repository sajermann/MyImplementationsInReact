/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { ChipPage } from '.';

describe('Pages/Chip', () => {
	it(`should render component`, async () => {
		const { queryByTestId, getByTestId } = render(
			<InjectorProviders>
				<ChipPage />
			</InjectorProviders>,
		);

		// TODO: apply test
	});
});
