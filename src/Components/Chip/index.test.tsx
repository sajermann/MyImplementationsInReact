/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe, expect, vi } from 'vitest';
import { testIdOnlyDev } from '~/Utils/ShowInDevelopment';

import { Chip } from '.';

describe('Components/Chip', () => {
	it(`should remove chip non editable`, async () => {
		const mock = vi.fn();
		const { getByTestId } = render(
			<Chip
				actionButtonProps={{ ...testIdOnlyDev('action-button') }}
				value="Test"
				onRemove={mock}
			/>,
		);
		fireEvent.click(getByTestId('action-button'));
		expect(mock).toBeCalledWith('Test');
	});

	it(`should update chip by enter key`, async () => {
		const mock = vi.fn();
		const { getByText, getAllByRole, getByTestId } = render(
			<Chip
				noUpdatingContainerProps={{
					...testIdOnlyDev(`chip`),
				}}
				updatingInputProps={{
					...testIdOnlyDev(`input-for-update`),
				}}
				actionButtonProps={{
					...testIdOnlyDev(`action-button`),
				}}
				value="Test"
				onChange={mock}
			/>,
		);

		expect(await getByText('Test')).toBeInTheDocument();
		console.log(getAllByRole('button'));
		fireEvent.click(getByTestId('chip'));
		const input = getByTestId('input-for-update');
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
		const { getByText, getAllByRole, getByTestId } = render(
			<Chip
				noUpdatingContainerProps={{
					...testIdOnlyDev(`chip`),
				}}
				updatingInputProps={{
					...testIdOnlyDev(`input-for-update`),
				}}
				actionButtonProps={{
					...testIdOnlyDev(`action-button`),
				}}
				value="Test"
				onChange={mock}
			/>,
		);

		expect(await getByText('Test')).toBeInTheDocument();
		console.log(getAllByRole('button'));
		fireEvent.click(getByTestId('chip'));
		const input = getByTestId('input-for-update');
		fireEvent.change(input, {
			target: {
				value: 'Test Updated',
			},
		});
		fireEvent.blur(input);
		expect(mock).toBeCalled();
	});

	// it(`should fire update mode by enter key event`, async () => {
	// 	const mock = vi.fn();
	// 	const { getByText, getAllByRole } = render(
	// 		<Chip value="Test" onRemove={mock} onChange={vi.fn()} />,
	// 	);

	// 	expect(await getByText('Test')).toBeInTheDocument();
	// 	fireEvent.keyDown(getAllByRole('button')[0], {
	// 		key: 'Enter',
	// 		code: 'Enter',
	// 		charCode: 13,
	// 	});
	// 	expect(getAllByRole('textbox')[0]).toBeInTheDocument();
	// });

	// it(`should remove chip by enter key event`, async () => {
	// 	const mock = vi.fn();
	// 	const { getByText, getAllByRole } = render(
	// 		<Chip value="Test" onRemove={mock} />,
	// 	);

	// 	expect(await getByText('Test')).toBeInTheDocument();
	// 	fireEvent.keyDown(getAllByRole('button')[1], {
	// 		key: 'Enter',
	// 		code: 'Enter',
	// 		charCode: 13,
	// 	});
	// 	expect(mock).toBeCalledWith('Test');
	// });
});
