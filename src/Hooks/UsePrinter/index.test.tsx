import { fireEvent, render, waitFor } from '@testing-library/react';
import { forwardRef, LegacyRef } from 'react';
import { it, describe, expect } from 'vitest';

import { InjectorProviders } from '~/Components/InjectorProviders';
import { usePrinter } from '.';

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
			<button
				data-testid="Test"
				type="button"
				onClick={handlePreparePrint}
				disabled={isPrinting}
			>
				Imprimir
			</button>
		</div>
	);
}

describe('Hooks/UseCriticalProvider', () => {
	it(`must render data`, async () => {
		const { getByTestId } = render(
			<InjectorProviders>
				<Mock />
			</InjectorProviders>
		);
		// await waitFor(() => {
		// 	const button = getByTestId('Test');
		// 	fireEvent.click(button);
		// 	// expect(button).toBeDisabled();
		// });
	});
});
