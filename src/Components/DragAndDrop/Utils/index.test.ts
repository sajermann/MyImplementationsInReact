/**
 * @vitest-environment jsdom
 */

import { DragEndEvent } from '@dnd-kit/core';
import { it, describe, vi } from 'vitest';
import { handleDragEnd, save } from '.';

describe('Components/DragAndDrop/Utils', () => {
	it(`should test handleDragEnd`, async () => {
		const mock = {
			collisions: [{ id: 'S' }],
			active: {
				id: '{"itemId":"Brawler Test","fromId":"A"}',
				data: {
					current: {
						name: 'Brawler Test',
						image: '',
					},
				},
			},
		};
		const spyOnSave = vi.fn();
		handleDragEnd({
			onSave: spyOnSave,
			event: mock as unknown as DragEndEvent,
		});
		expect(spyOnSave).toBeCalledWith({
			data: {
				name: 'Brawler Test',
				image: '',
			},
			fromId: 'A',
			toId: 'S',
		});
	});

	it(`should test save - from origin`, async () => {
		const spyOnBrawersByTier = vi.fn();
		const spyOnSaveItems = vi.fn();
		save({
			brawlersByTier: {
				S: [],
				A: [],
				B: [],
				C: [],
			},
			data: {
				image: '',
				name: 'Test',
			},
			fromId: 'origin',
			toId: 'B',
			onSaveBrawersByTier: spyOnBrawersByTier,
			onSaveItems: spyOnSaveItems,
		});
		expect(spyOnSaveItems).toBeCalled();
	});

	it(`should test save - from S`, async () => {
		const spyOnBrawersByTier = vi.fn();
		const spyOnSaveItems = vi.fn();
		save({
			brawlersByTier: {
				S: [],
				A: [],
				B: [],
				C: [],
			},
			data: {
				image: '',
				name: 'Test',
			},
			fromId: 'S',
			toId: 'B',
			onSaveBrawersByTier: spyOnBrawersByTier,
			onSaveItems: spyOnSaveItems,
		});
		expect(spyOnBrawersByTier).toBeCalled();
	});
});
