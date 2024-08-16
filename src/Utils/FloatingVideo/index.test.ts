/**
 * @vitest-environment jsdom
 */
import { MutableRefObject } from 'react';
import { it, describe, vi } from 'vitest';
import { handleMouseMove, onIntersectionObserver } from '.';

describe('Utils/FloatingVideo', () => {
	it(`should test onIntersectionObserver`, async () => {
		const video = {
			current: {
				style: {
					zIndex: '1',
					position: '',
					bottom: '',
				},
			},
		} as MutableRefObject<HTMLVideoElement | null>;

		const entry = {
			intersectionRatio: -1,
		} as IntersectionObserverEntry;

		onIntersectionObserver({
			entry,
			videoRef: video,
			floatingSide: 'right',
		});

		expect(video.current?.style.zIndex).toBe('9999');

		const video2 = {
			current: {
				style: {
					zIndex: '1',
					position: '',
					bottom: '',
				},
			},
		} as MutableRefObject<HTMLVideoElement | null>;

		const entry2 = {
			intersectionRatio: 1,
		} as IntersectionObserverEntry;

		onIntersectionObserver({
			entry: entry2,
			videoRef: video2,
			floatingSide: 'right',
		});

		expect(video2.current?.style.position).toBe('static');
	});

	it(`should test handleMouseDown`, async () => {
		const setPosMock = vi.fn();
		const video = {
			current: {
				style: {
					zIndex: '1',
					position: '',
					bottom: '',
				},
				offsetHeight: 1000,
				offsetWidth: 1000,
			},
		} as MutableRefObject<HTMLVideoElement | null>;
		handleMouseMove({
			event: {
				clientY: 30,
				clientX: 30,
			} as MouseEvent,
			dragging: true,
			setPosition: setPosMock,
			mousePos: { x: 1, y: 1 },
			videoRef: video,
		});

		expect(setPosMock).toBeCalledWith({ x: 24, y: -232 });
	});
});
