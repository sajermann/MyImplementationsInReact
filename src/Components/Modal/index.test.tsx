/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import { Modal } from './index';

type Props = {
	closeByBackdrop?: boolean;
	closeByEsc?: boolean;
	title?: string;
};

function Mock({ closeByBackdrop, closeByEsc, title }: Props) {
	const [isOpenModal, setIsOpenModal] = useState(false);
	return (
		<>
			<button
				type="button"
				onClick={() => setIsOpenModal(prev => !prev)}
				data-testid="openModalButton"
			>
				Open
			</button>
			<Modal
				title={title}
				overlayProps={{
					'data-testid': 'overlay',
				}}
				contentProps={
					{
						'data-testid': 'modal',
					} as DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
				}
				isOpen={isOpenModal}
				onClose={() => setIsOpenModal(prev => !prev)}
				closeByBackdrop={closeByBackdrop}
				closeByEsc={closeByEsc}
			>
				<div>Is Open</div>
			</Modal>
		</>
	);
}

describe('Components/Modal', () => {
	it(`should open modal`, async () => {
		const { queryByTestId, getByTestId } = render(<Mock />);
		expect(queryByTestId('modal')).toBeNull();
		await fireEvent.click(getByTestId('openModalButton'));
		await waitFor(() => {
			expect(getByTestId('modal')).toBeInTheDocument();
		});
	});

	it(`should close modal on click in backdrop`, async () => {
		const { queryByTestId, getByTestId } = render(<Mock closeByBackdrop />);
		expect(queryByTestId('modal')).toBeNull();
		await fireEvent.click(getByTestId('openModalButton'));
		await waitFor(() => {
			expect(getByTestId('modal')).toBeInTheDocument();
		});

		await fireEvent.click(getByTestId('overlay'));
		await waitFor(() => {
			expect(queryByTestId('modal')).toBeNull();
		});
	});

	it(`should not close modal on click in backdrop`, async () => {
		const { queryByTestId, getByTestId } = render(<Mock />);
		expect(queryByTestId('modal')).toBeNull();
		await fireEvent.click(getByTestId('openModalButton'));
		await waitFor(() => {
			expect(getByTestId('modal')).toBeInTheDocument();
		});

		await fireEvent.click(getByTestId('overlay'));
		await waitFor(() => {
			expect(queryByTestId('modal')).not.toBeNull();
		});
	});

	it(`should close modal on esc key down`, async () => {
		const { queryByTestId, getByTestId } = render(<Mock closeByEsc />);
		expect(queryByTestId('modal')).toBeNull();
		await fireEvent.click(getByTestId('openModalButton'));
		await waitFor(() => {
			expect(getByTestId('modal')).toBeInTheDocument();
		});

		await fireEvent.keyDown(getByTestId('modal'), {
			key: 'Escape',
			code: 'Escape',
			keyCode: 27,
			charCode: 27,
		});
		await waitFor(() => {
			expect(queryByTestId('modal')).toBeNull();
		});
	});

	it(`should not close modal on esc key down`, async () => {
		const { queryByTestId, getByTestId } = render(<Mock title="Test" />);
		expect(queryByTestId('modal')).toBeNull();
		await fireEvent.click(getByTestId('openModalButton'));
		await waitFor(() => {
			expect(getByTestId('modal')).toBeInTheDocument();
		});

		await fireEvent.keyDown(getByTestId('modal'), {
			key: 'Escape',
			code: 'Escape',
			keyCode: 27,
			charCode: 27,
		});
		await waitFor(() => {
			expect(queryByTestId('modal')).not.toBeNull();
		});
	});
});
