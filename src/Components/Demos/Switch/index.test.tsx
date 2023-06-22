/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { SwitchDemo } from '.';

describe('Components/Demos/SwitchDemo', () => {
	it(`must open Modal`, async () => {
		const { getByLabelText } = render(
			<InjectorProviders>
				<SwitchDemo />
			</InjectorProviders>
		);
		const openButton = await getByLabelText('Switch');
		fireEvent.click(openButton);
	});
});
