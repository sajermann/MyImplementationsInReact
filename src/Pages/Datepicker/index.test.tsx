/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';

import { DatepickerPage } from '.';

describe('Pages/DatepickerPage', () => {
	it(`must render DatepickerPage`, async () => {
		const { getAllByText } = render(
			<InjectorProviders>
				<DatepickerPage />
			</InjectorProviders>
		);
	});
});
