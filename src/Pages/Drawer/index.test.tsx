/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';

import { DrawerPage } from '.';

describe('Pages/DrawerPage', () => {
	it(`must render data`, async () => {
		const { getAllByText } = render(
			<InjectorProviders>
				<DrawerPage />
			</InjectorProviders>
		);
	});
});
