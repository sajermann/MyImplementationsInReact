/* eslint-disable no-return-assign */
/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';

import { SearchBox } from '.';
import { SearchBoxDemo } from '../Demos/SearchBox';

const values = ['Potato', 'Apple'];

describe('Components/SearchBox', () => {
	test(`must show result`, async () => {
		const spy = vi.fn();
		const { getByText } = render(
			<SearchBox searchValue="Apple" onChange={spy} results={values} />
		);
		const resultText = getByText('Apple');
		expect(resultText).toBeInTheDocument();
	});

	test(`must show result by onChange`, async () => {
		const { getByRole, getByText } = render(<SearchBoxDemo />);
		const input = getByRole('searchbox');
		fireEvent.change(input, { target: { value: 'Brazil' } });
		const resultText = getByText('Brazil');
		expect(resultText).toBeInTheDocument();
	});

	test(`must is loading icon`, async () => {
		const spy = vi.fn();
		const { container } = render(
			<SearchBox
				searchValue="Apple"
				onChange={spy}
				results={values}
				isLoading
			/>
		);
		const resultText = container.querySelector('[aria-busy="true"]');
		expect(resultText).not.toBeNull();
	});
});
