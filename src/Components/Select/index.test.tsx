/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { it, describe, vi } from 'vitest';
import { Select } from '.';
import { ContainerInput } from '../ContainerInput';
import { Label } from '../Label';

vi.mock('react-select', () => ({
	default: (props: any) => {
		console.log({ props }, 'test', props.value);
		props.styles.control({}, { isFocused: true });
		props.styles.control({}, { isFocused: false });
		props.styles.menu({});
		props.styles.singleValue({});
		props.styles.input({});
		props.styles.option({}, { isSelected: true });
		props.styles.option({}, { isSelected: false });
		props.loadingMessage();
		props.noOptionsMessage();
		props.classNames.control({ isFocused: true });
		props.classNames.control({ isFocused: false });
		props.onInputChange('e');

		return (
			<select data-testid="Test" onChange={props.onChange}>
				{props.options.map(({ label, value }: any) => (
					<option key={value} value={value}>
						{label}
					</option>
				))}
			</select>
		);
	},
}));

describe('Components/Select', () => {
	it(`must change Select components`, async () => {
		const mock = vi.fn();
		const { getByText, getByTestId } = render(
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
					value="sp"
				/>
			</ContainerInput>
		);
		const result = getByTestId('Test');
		fireEvent.change(result, { target: { value: 'Test' } });

		await waitFor(() => getByText('São Paulo'));
		expect(mock).toHaveBeenCalledWith({
			target: {
				id: 'state',
				value: undefined,
			},
		});
	});

	it(`must change Muilt Select components`, async () => {
		const mock = vi.fn();
		const { getByText, getByTestId } = render(
			<ContainerInput>
				<Label htmlFor="state">Test</Label>
				<Select
					isMulti={{ onChange: mock, value: ['sp'] }}
					id="state"
					isClearable
					options={[
						{ value: 'sp', label: 'São Paulo' },
						{ value: 'rs', label: 'Rio Grande do Sul' },
					]}
					placeholder="Estado"
					async={{
						callback: vi.fn(),
						debounce: 1,
						minLength: 1,
					}}
				/>
			</ContainerInput>
		);
		const result = getByTestId('Test');
		fireEvent.change(result, { target: { value: 'Test' } });

		await waitFor(() => getByText('São Paulo'));
	});
});
