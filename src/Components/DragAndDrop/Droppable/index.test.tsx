/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { it, describe, vi } from 'vitest';
import * as useDroppableMock from '@dnd-kit/core';
import { Droppable } from '.';

describe('Components/DragAndDrop/Droppable', () => {
	it(`should fire onDropCustom when disableDropByKey is false`, async () => {
		vi.spyOn(useDroppableMock, 'useDroppable').mockImplementation(
			() =>
				({
					isOver: true,
					active: {
						data: {
							current: {
								name: 'El Primo',
								image: '',
							},
						},
					},
				}) as any,
		);
		const onDropCustomMock = vi.fn();
		render(
			<Droppable id="S" onDropCustom={onDropCustomMock}>
				<div>Test</div>
			</Droppable>,
		);

		fireEvent.keyUp(window, { key: 'Enter', code: 'Enter', charCode: 13 });

		expect(onDropCustomMock).toBeCalled();
	});

	it(`should not fire onDropCustom when disableDropByKey is true`, async () => {
		vi.spyOn(useDroppableMock, 'useDroppable').mockImplementation(
			() =>
				({
					isOver: true,
					active: {
						data: {
							current: {
								name: 'El Primo',
								image: '',
							},
						},
					},
				}) as any,
		);
		const onDropCustomMock = vi.fn();
		render(
			<Droppable id="S" onDropCustom={onDropCustomMock} disableDropByKey>
				<div>Test</div>
			</Droppable>,
		);
		fireEvent.keyUp(window, { key: 'Enter', code: 'Enter', charCode: 13 });
		expect(onDropCustomMock).not.toBeCalled();
	});

	it(`should not fire onDropCustom when disableDropByKey is true`, async () => {
		vi.spyOn(useDroppableMock, 'useDroppable').mockImplementation(
			() =>
				({
					isOver: true,
					active: {
						data: {
							current: {
								name: 'El Primo',
								image: '',
							},
						},
					},
				}) as any,
		);
		const onDropCustomMock = vi.fn();
		render(
			<Droppable id="S" onDropCustom={onDropCustomMock} disableDropByKey>
				<div>Test</div>
			</Droppable>,
		);
		await waitFor(
			() => {
				expect(onDropCustomMock).toBeCalled();
			},
			{ timeout: 2000 },
		);
	});
});
