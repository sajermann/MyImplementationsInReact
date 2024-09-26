import { delay } from '@sajermann/utils/Delay';
import { renderHook } from '@testing-library/react';
import { it, describe, expect, vi } from 'vitest';

import { useCountdown } from '.';

describe('Hooks/UseCountdown', () => {
	it(`must add timer and toggle play/pause`, async () => {
		const { result, rerender } = renderHook(() => useCountdown());
		result.current.addTimer({ milliseconds: 10000 });
		result.current.addTimer({ milliseconds: 20000 });
		rerender();
		result.current.togglePlayPause(result.current.timers[0].id);
		rerender();
		expect(result.current.timers[0].isPaused).toBeTruthy();
		result.current.togglePlayPause(result.current.timers[0].id);
		rerender();
		expect(result.current.timers[0].isPaused).toBeFalsy();
	});

	it(`must add fire onComplete`, async () => {
		const spy = vi.fn();
		const { result, rerender } = renderHook(() => useCountdown());
		result.current.addTimer({ milliseconds: 1 });
		rerender();
		result.current.addTimer({
			milliseconds: 100,
			onComplete: spy,
		});
		rerender();
		await delay(100);
	});
});
