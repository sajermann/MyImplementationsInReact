/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { it, describe, vi } from 'vitest';
import { Select } from '.';
import { ContainerInput } from '../ContainerInput';
import { Label } from '../Label';

describe('Components/Select', () => {
	it(`must change Select components`, async () => {
		const mock = vi.fn();
		const mockOnChange = (e: any) => mock(e.target.value);
		const { getByText, getByLabelText } = render(
			<ContainerInput>
				<Label htmlFor="state">Test</Label>
				<Select
					data-testid="Test"
					id="state"
					isClearable
					options={[{ value: 'sp', label: 'São Paulo' }]}
					placeholder="Estado"
					onChange={mockOnChange}
				/>
			</ContainerInput>
		);
		const mySelectComponent = getByLabelText('Test');
		console.log({ mySelectComponent });
		expect(mySelectComponent).toBeDefined();
		expect(mySelectComponent).not.toBeNull();
		if (!mySelectComponent || !mySelectComponent.firstChild) return;
		fireEvent.keyDown(mySelectComponent.childNodes[1], { key: 'ArrowDown' });
		fireEvent.keyDown(mySelectComponent.childNodes[1], { key: 'Enter' });
		await waitFor(() => getByText('São Paulo'));
		expect(mock).toHaveBeenCalledWith('sp');
	});

	it(`must show text 'not data'`, async () => {
		const { getByLabelText, getByText } = render(
			<ContainerInput>
				<Label htmlFor="state">Test</Label>
				<Select
					data-testid="Test"
					id="state"
					isClearable
					options={[]}
					placeholder="Estado"
					onChange={vi.fn()}
				/>
			</ContainerInput>
		);
		const mySelectComponent = getByLabelText('Test');
		expect(mySelectComponent).toBeDefined();
		expect(mySelectComponent).not.toBeNull();
		if (!mySelectComponent || !mySelectComponent.firstChild) return;

		fireEvent.keyDown(mySelectComponent.childNodes[1], { key: 'ArrowDown' });

		await waitFor(() => getByText('NO_DATA'));
	});

	it(`must show text 'loading...'`, async () => {
		const { getByLabelText, getByText } = render(
			<ContainerInput>
				<Label htmlFor="state">Test</Label>
				<Select
					data-testid="Test"
					id="state"
					isClearable
					isLoading
					options={[]}
					placeholder="Estado"
					onChange={vi.fn()}
				/>
			</ContainerInput>
		);
		const mySelectComponent = getByLabelText('Test');
		expect(mySelectComponent).toBeDefined();
		expect(mySelectComponent).not.toBeNull();
		if (!mySelectComponent || !mySelectComponent.firstChild) return;

		fireEvent.keyDown(mySelectComponent.childNodes[1], { key: 'ArrowDown' });

		await waitFor(() => getByText('LOADING...'));
	});
});
