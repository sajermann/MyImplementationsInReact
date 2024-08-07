/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { ChipPage } from '.';

describe('Pages/Chip', () => {
	it(`should edit chip editable`, async () => {
		const textRandom = new Date().toISOString();
		const { getByTestId, container, getByText } = render(
			<InjectorProviders>
				<ChipPage />
			</InjectorProviders>,
		);
		const chip = getByTestId('chip-editable');
		fireEvent.click(chip);
		const input = container.querySelector(
			"[data-testid='chip-editable'] input",
		);
		expect(input).toBeTruthy();
		if (!input) return;
		fireEvent.change(input, { target: { value: textRandom } });
		fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });
		expect(getByText(textRandom)).toBeTruthy();
	});

	it(`should test crud chip`, async () => {
		const textRandom = new Date().toISOString();
		const { getByTestId, getByText, container, queryByText } = render(
			<InjectorProviders>
				<ChipPage />
			</InjectorProviders>,
		);

		// Add Chip
		const input = getByTestId('input-add-chip');
		const button = getByTestId('button-add-chip');
		fireEvent.change(input, { target: { value: textRandom } });
		fireEvent.click(button);
		expect(getByText(textRandom)).toBeTruthy();

		// Update Chip
		const chipToUpdate = getByTestId(`chip-editable-${textRandom}`);
		fireEvent.click(chipToUpdate);
		const inputChipToUpdate = container.querySelector(
			`[data-testid='chip-editable-${textRandom}'] input`,
		);
		expect(inputChipToUpdate).toBeTruthy();
		if (!inputChipToUpdate) return;
		fireEvent.change(inputChipToUpdate, { target: { value: textRandom } });
		fireEvent.keyDown(inputChipToUpdate, {
			key: 'Enter',
			code: 'Enter',
			charCode: 13,
		});
		expect(getByText(textRandom)).toBeTruthy();

		// Delete Chip
		const buttonDeleteChip = container.querySelector(
			`[data-testid='chip-editable-${textRandom}'] button`,
		);
		expect(buttonDeleteChip).toBeTruthy();
		if (!buttonDeleteChip) return;
		fireEvent.click(buttonDeleteChip);
		const textRemoved = queryByText(textRandom);
		expect(textRemoved).toBeFalsy();
	});

	it(`should test chips youtube like`, async () => {
		const textRandom = new Date().toISOString();
		const { getByTestId, getByText, container, queryByText } = render(
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
		const chipToUpdate = getByTestId(`chip-editable-${textRandom}`);
		fireEvent.click(chipToUpdate);
		const inputChipToUpdate = container.querySelector(
			`[data-testid='chip-editable-${textRandom}'] input`,
		);
		expect(inputChipToUpdate).toBeTruthy();
		if (!inputChipToUpdate) return;
		fireEvent.change(inputChipToUpdate, { target: { value: textRandom } });
		fireEvent.keyDown(inputChipToUpdate, {
			key: 'Enter',
			code: 'Enter',
			charCode: 13,
		});
		expect(getByText(textRandom)).toBeTruthy();

		// Delete Chip
		const buttonDeleteChip = container.querySelector(
			`[data-testid='chip-editable-${textRandom}'] button`,
		);
		expect(buttonDeleteChip).toBeTruthy();
		if (!buttonDeleteChip) return;
		fireEvent.click(buttonDeleteChip);
		const textRemoved = queryByText(textRandom);
		expect(textRemoved).toBeFalsy();
	});
});
