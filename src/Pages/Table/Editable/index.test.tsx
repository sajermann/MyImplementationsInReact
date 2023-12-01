/**
 * @vitest-environment jsdom
 */
import { delay } from '@sajermann/utils/Delay';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';

import { EditablePage } from '.';

describe('Pages/Table/EditablePage', () => {
	it(`must update row `, async () => {
		const { getByTestId, findByTestId, findByText } = render(
			<InjectorProviders>
				<EditablePage />
			</InjectorProviders>
		);
		const updateButton = getByTestId('update-button-0');
		fireEvent.click(updateButton);
		const updateInput = await findByTestId('update-input');
		fireEvent.change(updateInput, { target: { value: 'Test' } });
		const saveButton = getByTestId('save-button');
		fireEvent.click(saveButton);
		const newName = await findByText('Test');
		expect(newName).toBeInTheDocument();
	});

	it(`must cancel update row mode`, async () => {
		const { getByTestId, findByTestId } = render(
			<InjectorProviders>
				<EditablePage />
			</InjectorProviders>
		);
		const updateButton = getByTestId('update-button-0');
		fireEvent.click(updateButton);
		const updateInput = await findByTestId('update-input');

		fireEvent.change(updateInput, { target: { value: 'Test' } });
		const cancelButton = getByTestId('cancel-button');
		fireEvent.click(cancelButton);
	});
});
