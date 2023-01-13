/* eslint-disable import/no-extraneous-dependencies */
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { delay } from '@sajermann/utils/Delay';
import { Button } from './index';

describe('Components/Button', () => {
	it(`should call function onClick`, async () => {
		const onClick = jest.fn();
		const { getByTestId } = render(
			<Button
				data-testid="Button"
				disabled={false}
				colorStyle="Warning"
				type="button"
				onClick={onClick}
			>
				Clique aqui
			</Button>
		);
		const button = getByTestId('Button');
		expect(button).toBeInTheDocument();
		await userEvent.click(button);
		expect(onClick).toBeCalledTimes(1);
	});

	it(`should be disabled`, async () => {
		const onClick = jest.fn();
		const { getByTestId } = render(
			<Button data-testid="Button" disabled type="button" onClick={onClick}>
				Clique aqui
			</Button>
		);
		const button = getByTestId('Button');
		expect(button).toBeInTheDocument();
		expect(button).toBeDisabled();
	});

	it(`should be disabled`, async () => {
		const funcs = {
			loadingOptions: {
				isLoading: false,
			},
			successOptions: {
				setSuccess: jest.fn(),
				success: false,
			},
			failedOptions: {
				setFailed: jest.fn(),
				failed: false,
			},
		};

		let ttt = false;

		const onClick = () => {
			ttt = true;
		};

		const { getByTestId } = render(
			<Button
				data-testid="Button"
				colorStyle="Warning"
				type="button"
				onClick={onClick}
				withFeedback={{
					loadingOptions: {
						isLoading: funcs.loadingOptions.isLoading,
					},
					successOptions: {
						success: funcs.successOptions.success,
					},
					failedOptions: {
						failed: funcs.failedOptions.failed,
					},
				}}
			>
				Clique aqui
			</Button>
		);
		const button = getByTestId('Button');
		await userEvent.click(button);
		await delay(3000);
		await waitFor(() => {
			expect(ttt).toBe(true);
		});
	});
});
