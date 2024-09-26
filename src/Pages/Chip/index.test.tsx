/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { ChipPage } from '.';

describe('Pages/Chip', () => {
	it(`should update chip customizations`, async () => {
		const textRandom = new Date().toISOString();
		const { getByTestId, queryByText, getByText } = render(
			<InjectorProviders noLayout>
				<ChipPage />
			</InjectorProviders>,
		);
		// Update Chip
		const chipToUpdate = getByTestId(`chip-youtube`);
		fireEvent.click(chipToUpdate);
		const inputChipToUpdate = getByTestId(`input-for-update-youtube`);
		fireEvent.change(inputChipToUpdate, { target: { value: textRandom } });
		fireEvent.keyDown(inputChipToUpdate, {
			key: 'Enter',
			code: 'Enter',
			charCode: 13,
		});
		expect(getByText(textRandom)).toBeTruthy();

		// Delete Chip
		const buttonDeleteChip = getByTestId(`action-button-youtube`);
		expect(buttonDeleteChip).toBeTruthy();
		if (!buttonDeleteChip) return;
		fireEvent.click(buttonDeleteChip);
		const textRemoved = queryByText(textRandom);
		expect(textRemoved).toBeFalsy();
	});

	it(`should test crud chip complete`, async () => {
		const textRandom = new Date().toISOString();
		const { getByTestId, queryByText, getByText } = render(
			<InjectorProviders noLayout>
				<ChipPage />
			</InjectorProviders>,
		);
		const input = getByTestId('input-add-chip');
		const button = getByTestId('button-add-chip');
		fireEvent.change(input, { target: { value: textRandom } });
		fireEvent.click(button);
		expect(getByText(textRandom)).toBeTruthy();

		// Update Chip
		const chipToUpdate = getByTestId(`chip-${textRandom}`);
		fireEvent.click(chipToUpdate);
		const inputChipToUpdate = getByTestId(`input-for-update-${textRandom}`);
		fireEvent.change(inputChipToUpdate, { target: { value: textRandom } });
		fireEvent.keyDown(inputChipToUpdate, {
			key: 'Enter',
			code: 'Enter',
			charCode: 13,
		});
		expect(getByText(textRandom)).toBeTruthy();

		// Delete Chip
		const buttonDeleteChip = getByTestId(`action-button-${textRandom}`);
		expect(buttonDeleteChip).toBeTruthy();
		if (!buttonDeleteChip) return;
		fireEvent.click(buttonDeleteChip);
		const textRemoved = queryByText(textRandom);
		expect(textRemoved).toBeFalsy();
	});

	it(`should test chips youtube like`, async () => {
		const textRandom = new Date().toISOString();
		const { getByTestId, getByText, queryByText } = render(
			<InjectorProviders>
				<ChipPage />
			</InjectorProviders>,
		);

		// Add Chip
		const input = getByTestId('input-youtube-like');
		fireEvent.change(input, { target: { value: textRandom } });
		fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });
		fireEvent.change(input, { target: { value: 'new-value' } }); // Line Coverage
		fireEvent.blur(input); // Line Coverage
		expect(getByText(textRandom)).toBeTruthy();

		// Update Chip
		const chipToUpdate = getByTestId(`chip-${textRandom}`);
		fireEvent.click(chipToUpdate);
		const inputChipToUpdate = getByTestId(`input-for-update-${textRandom}`);
		fireEvent.change(inputChipToUpdate, { target: { value: textRandom } });
		fireEvent.keyDown(inputChipToUpdate, {
			key: 'Enter',
			code: 'Enter',
			charCode: 13,
		});
		expect(getByText(textRandom)).toBeTruthy();

		// Delete Chip
		const buttonDeleteChip = getByTestId(`action-button-${textRandom}`);
		expect(buttonDeleteChip).toBeTruthy();
		if (!buttonDeleteChip) return;
		fireEvent.click(buttonDeleteChip);
		const textRemoved = queryByText(textRandom);
		expect(textRemoved).toBeFalsy();
	});
});
