/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { it, describe, vi } from 'vitest';
import { ContainerInput } from '../ContainerInput';
import { Label } from '../Label';
import { Select } from '.';

describe('Components/Select', () => {
	vi.mock('react-select', () => ({
		default: (props: any) => {
			props.styles.control({}, { isFocused: true });
			props.styles.control({}, { isFocused: false });
			props.styles.menu({});
			props.styles.singleValue({});
			props.styles.input({});
			props.styles.placeholder({});
			props.styles.option({}, { isSelected: true, isFocused: true });
			props.styles.option({}, { isSelected: false, isFocused: false });
			props.loadingMessage();
			props.noOptionsMessage();
			props.classNames.control({ isFocused: true });
			props.classNames.control({ isFocused: false });
			props.classNames.multiValue();
			props.classNames.multiValueLabel();
			props.classNames.multiValueRemove();
			props.onInputChange('e');

			return (
				<select
					data-testid="Test"
					onChange={e => props.onChange(e.target.value)}
				>
					{props.options.map(({ label, value }: any) => (
						<option key={value} value={value}>
							{label}
						</option>
					))}
				</select>
			);
		},
	}));
	it(`must change Select components`, async () => {
		const mock = vi.fn();
		const { getByTestId } = render(
			<ContainerInput>
				<Label htmlFor="state">Test</Label>
				<Select
					id="state"
					isClearable
					options={[
						{ value: 'sp', label: 'São Paulo' },
						{ value: 'rs', label: 'Rio Grande do Sul' },
					]}
					placeholder="Estado"
					onChange={mock}
					value={{ value: 'sp', label: 'São Paulo' }}
				/>
			</ContainerInput>,
		);
		const result = getByTestId('Test');
		fireEvent.change(result, { target: { value: 'Test' } });

		// await waitFor(() => getByText('São Paulo'));
		expect(mock).toHaveBeenCalledWith('');
	});

	it(`must call async`, async () => {
		const mock = vi.fn();
		const { getByTestId } = render(
			<ContainerInput>
				<Label htmlFor="state">Test</Label>
				<Select
					isMulti
					onChange={vi.fn}
					id="state"
					isClearable
					options={[
						{ value: 'sp', label: 'São Paulo' },
						{ value: 'rs', label: 'Rio Grande do Sul' },
					]}
					placeholder="Estado"
					async={{
						callback: mock,
						debounce: 1,
						minLength: 5,
					}}
				/>
			</ContainerInput>,
		);
		const result = getByTestId('Test');
		fireEvent.change(result, { target: { value: 'São' } });

		await waitFor(() => {
			expect(mock).toHaveBeenCalledWith('');
		});
	});
});
