/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-syntax */
/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { forwardRef, LegacyRef } from 'react';
import { it, describe, expect } from 'vitest';
import { usePrinter } from '.';
import { InjectorProviders } from '../../Components/InjectorProviders';

export const MockToPrint = forwardRef(
	({ id }: { id: string }, ref: unknown) => (
		<div id={id} ref={ref as LegacyRef<HTMLDivElement> | undefined}>
			Test
		</div>
	)
);

function Mock() {
	const { componentRef, handlePreparePrint, isPrinting } = usePrinter();

	return (
		<div>
			<MockToPrint id="Test" ref={componentRef} />
			<button onClick={handlePreparePrint} disabled={isPrinting}>
				Imprimir
			</button>
		</div>
	);
}

describe('Hooks/UseCriticalProvider', () => {
	it(`must render data`, async () => {
		const { getByText } = render(
			<InjectorProviders>
				<Mock />
			</InjectorProviders>
		);
		await waitFor(() => {
			const button = getByText('Imprimir');
			fireEvent.click(button);
			expect(button).toBeDisabled();
		});
	});
});
