/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { RadioDemo } from '.';

describe('Components/Demos/RadioDemo', () => {
	it(`must open RadioDemo`, async () => {
		const { getByLabelText } = render(
			<InjectorProviders>
				<RadioDemo />
			</InjectorProviders>
		);
	});
});
