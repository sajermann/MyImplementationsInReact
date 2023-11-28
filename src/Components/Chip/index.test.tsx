/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe, expect, vi } from 'vitest';

import { Chip } from '.';

describe('Components/Chip', () => {
	it(`should remove chip non editable`, async () => {
		const mock = vi.fn();
		const { getByText, getAllByRole } = render(
			<Chip value="Test" onRemove={mock} />
		);

		expect(await getByText('Test')).toBeInTheDocument();
		fireEvent.click(getAllByRole('button')[1]);
		expect(mock).toBeCalledWith('Test');
	});

	it(`should update chip by enter key`, async () => {
		const mock = vi.fn();
		const { getByText, getAllByRole } = render(
			<Chip value="Test" onChange={mock} />
		);

		expect(await getByText('Test')).toBeInTheDocument();
		console.log(getAllByRole('button'));
		fireEvent.click(getAllByRole('button')[0]);
		const input = getAllByRole('textbox')[0];
		fireEvent.change(input, {
			target: {
				value: 'Test Updated',
			},
		});
		fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });
		expect(mock).toBeCalled();
	});

	it(`should update chip by blur event`, async () => {
		const mock = vi.fn();
		const { getByText, getAllByRole } = render(
			<Chip value="Test" onChange={mock} />
		);

		expect(await getByText('Test')).toBeInTheDocument();
		console.log(getAllByRole('button'));
		fireEvent.click(getAllByRole('button')[0]);
		const input = getAllByRole('textbox')[0];
		fireEvent.change(input, {
			target: {
				value: 'Test Updated',
			},
		});
		fireEvent.blur(input);
		expect(mock).toBeCalled();
	});

	it(`should fire update mode by enter key event`, async () => {
		const mock = vi.fn();
		const { getByText, getAllByRole } = render(
			<Chip value="Test" onRemove={mock} onChange={vi.fn()} />
		);

		expect(await getByText('Test')).toBeInTheDocument();
		fireEvent.keyDown(getAllByRole('button')[0], {
			key: 'Enter',
			code: 'Enter',
			charCode: 13,
		});
		expect(getAllByRole('textbox')[0]).toBeInTheDocument();
	});

	it(`should remove chip by enter key event`, async () => {
		const mock = vi.fn();
		const { getByText, getAllByRole } = render(
			<Chip value="Test" onRemove={mock} />
		);

		expect(await getByText('Test')).toBeInTheDocument();
		fireEvent.keyDown(getAllByRole('button')[1], {
			key: 'Enter',
			code: 'Enter',
			charCode: 13,
		});
		expect(mock).toBeCalledWith('Test');
	});
});
