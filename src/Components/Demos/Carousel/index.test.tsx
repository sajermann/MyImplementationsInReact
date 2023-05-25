/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { CarouselDemo } from '.';

describe('Components/Demos/CarouselDemo', () => {
	it(`must open Modal`, async () => {
		const { getByText } = render(
			<InjectorProviders>
				<CarouselDemo />
			</InjectorProviders>
		);
		const button = await getByText('Success');
		fireEvent.click(button);
	});
});
