/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { CalendarPickerDemo } from '.';

describe('Components/Demos/CalendarPickerDemo', () => {
	it(`must open Modal`, async () => {
		const { getAllByRole } = render(
			<InjectorProviders>
				<CalendarPickerDemo />
			</InjectorProviders>
		);
	});
});
