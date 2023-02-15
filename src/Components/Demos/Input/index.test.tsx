/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { InputDemo } from '.';

describe('Components/Demos/InputDemo', () => {
	it(`must open Modal`, async () => {
		const { getByText } = render(
			<InjectorProviders>
				<InputDemo />
			</InjectorProviders>
		);
	});
});
