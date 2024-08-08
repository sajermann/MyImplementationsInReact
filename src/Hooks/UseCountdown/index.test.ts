import { renderHook, waitFor } from '@testing-library/react';
import { it, describe, expect } from 'vitest';

import { useCountdown } from '.';

describe('Hooks/UseCountdown', () => {
	it(`must render data`, async () => {
		const { result } = renderHook(() => useCountdown());
		// TODO: Apply test
		// expect(result.current.isPrinting).toBeFalsy();
		// result.current.handlePreparePrint();
		// await waitFor(() => {
		// 	expect(result.current.isPrinting).toBeTruthy();
		// });
	});
});
