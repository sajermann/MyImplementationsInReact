import { renderHook, waitFor } from '@testing-library/react';
import { it, describe, expect } from 'vitest';

import { usePrinter } from '.';

describe('Hooks/UsePrinter', () => {
	it(`must render data`, async () => {
		const { result } = renderHook(() => usePrinter());
		expect(result.current.isPrinting).toBeFalsy();
		result.current.handlePreparePrint();
		await waitFor(() => {
			expect(result.current.isPrinting).toBeTruthy();
		});
	});
});
