/* eslint-disable import/no-extraneous-dependencies */
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { delay } from '@sajermann/utils/Delay';
import { OptionButton } from './index';

describe('Components/OptionButton', () => {
	it(`should call function onClick`, async () => {
		const onClick = jest.fn();
		const { getByTestId } = render(
			<OptionButton data-testid="Button" onClick={onClick}>
				Clique aqui
			</OptionButton>
		);
		const button = getByTestId('Button');
		expect(button).toBeInTheDocument();
		await userEvent.click(button);
		expect(onClick).toBeCalledTimes(1);
	});

	it(`should be disabled`, async () => {
		const onClick = jest.fn();

		const { getByTestId } = render(
			<OptionButton data-testid="Button" onClick={onClick}>
				Clique aqui
			</OptionButton>
		);
		const button = getByTestId('Button');
		await userEvent.click(button);
		await delay(3000);
		await waitFor(() => {
			expect(onClick).toBeCalled();
		});
	});
});
