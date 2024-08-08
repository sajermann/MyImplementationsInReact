/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { AnimateInViewPage } from '.';

describe('Components/AnimateInViewPage', () => {
	it(`should render component`, async () => {
		const { queryByTestId, getByTestId } = render(
			<InjectorProviders>
				<AnimateInViewPage />
			</InjectorProviders>,
		);

		// TODO: apply test
	});
});
