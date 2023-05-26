/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { AnimateInViewDemo } from '.';

describe('Components/Demos/AnimateInViewDemo', () => {
	it(`must open Modal`, async () => {
		const { getAllByRole } = render(
			<InjectorProviders>
				<AnimateInViewDemo />
			</InjectorProviders>
		);
	});
});
