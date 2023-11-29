/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { ChipDemo } from '.';

describe('Components/Demos/ChipDemo', () => {
	it(`should remove chip non editable`, async () => {
		const { queryByText, getByText, getAllByRole } = render(<ChipDemo />);
		expect(await getByText('React')).toBeInTheDocument();
		const resultBefore = queryByText('React');
		expect(resultBefore).not.toBeNull();
		fireEvent.click(getAllByRole('button')[1]);
		const resultAfter = queryByText('React');
		expect(resultAfter).toBeNull();
	});

	it(`should update chip by enter key`, async () => {
		const { queryByText, getAllByRole } = render(<ChipDemo />);

		const resultBefore = queryByText('React');
		expect(resultBefore).not.toBeNull();

		fireEvent.click(getAllByRole('button')[0]);
		const input = getAllByRole('textbox')[0];
		fireEvent.change(input, {
			target: {
				value: 'React Updated',
			},
		});
		fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });

		const resultAfter = queryByText('React Updated');
		expect(resultAfter).not.toBeNull();
	});
});
