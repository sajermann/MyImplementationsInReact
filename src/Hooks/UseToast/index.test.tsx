/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { Toaster } from 'react-hot-toast';
import { ReactNode } from 'react';
import { customToast } from './index';

type Props2 = {
	children: ReactNode;
};

function Mock1({ children }: Props2) {
	return (
		<>
			<Toaster position="top-right" />
			{children}
		</>
	);
}

type Props = {
	onClick: () => void;
};

function Mock({ onClick }: Props) {
	return (
		<Mock1>
			<button data-testid="TestButton" onClick={onClick}>
				Test
			</button>
		</Mock1>
	);
}

const TYPES = ['info', 'success', 'error', 'warning'];

describe('Utils/CustomToast', () => {
	TYPES.forEach(typeNow =>
		it(`should render toast ${typeNow}`, async () => {
			const toast = () =>
				customToast({
					type: typeNow as 'info' | 'success' | 'error' | 'warning',
					msg: `Test ${typeNow}`,
				});
			const { getByTestId, getByText } = render(<Mock onClick={toast} />);
			fireEvent.click(getByTestId('TestButton'));
			const result = getByText(`Test ${typeNow}`);
			await waitFor(() => {
				expect(result).toHaveAttribute('data-type', typeNow);
			});
		})
	);

	it(`should close toast`, async () => {
		const toast = () =>
			customToast({
				type: 'info',
				msg: `Test info`,
			});
		const { getByTestId, container } = render(<Mock onClick={toast} />);
		fireEvent.click(getByTestId('TestButton'));
		await waitFor(() => {
			const result = container.querySelector('[data-role="close"]');
			expect(result).toBeInTheDocument();
			if (!result) {
				return;
			}
			fireEvent.click(result);
			expect(result).not.toBeInTheDocument();
		});
	});
});
