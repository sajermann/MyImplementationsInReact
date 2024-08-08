/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { DragAndDropPage } from '.';

describe('Pages/DragAndDropPage', () => {
	it(`should render component`, async () => {
		const { queryByTestId, getByTestId } = render(
			<InjectorProviders>
				<DragAndDropPage />
			</InjectorProviders>,
		);

		// TODO: apply test
	});
});
