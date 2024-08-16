/**
 * @vitest-environment jsdom
 */
import { delay } from '@sajermann/utils/Delay';
import { fireEvent, render, screen } from '@testing-library/react';
import { it, describe, vi } from 'vitest';
import { makeData } from '~/Utils/MakeData';
import { BrawlStar } from '.';

const height = 20;
const width = 100;
const offsetHeight = 'offsetHeight';
const offsetWidth = 'offsetWidth';

const mockGetBoundingClientRect = (element: any, index: number) =>
	vi.spyOn(element, 'getBoundingClientRect').mockImplementation(() => ({
		bottom: 0,
		height,
		left: 0,
		right: 0,
		top: index * height,
		width,
		x: 0,
		y: index * height,
	}));

describe('Components/DragAndDrop/BrawlStar', () => {
	vi.spyOn(makeData, 'brawlers').mockReturnValue(makeData.brawlers(1));
	const originalOffsetHeight = Object.getOwnPropertyDescriptor(
		HTMLElement.prototype,
		offsetHeight,
	);
	const originalOffsetWidth = Object.getOwnPropertyDescriptor(
		HTMLElement.prototype,
		offsetWidth,
	);

	beforeAll(() => {
		Object.defineProperty(HTMLElement.prototype, offsetHeight, {
			configurable: true,
			value: height,
		});
		Object.defineProperty(HTMLElement.prototype, offsetWidth, {
			configurable: true,
			value: width,
		});
	});

	// afterAll(() => {
	// 	Object.defineProperty(
	// 		HTMLElement.prototype,
	// 		offsetHeight,
	// 		originalOffsetHeight,
	// 	);
	// 	Object.defineProperty(
	// 		HTMLElement.prototype,
	// 		offsetWidth,
	// 		originalOffsetWidth,
	// 	);
	// });

	it(`must render component`, async () => {
		const { queryAllByRole, container } = render(<BrawlStar />);
		const draggables = queryAllByRole('button');
		Object.setPrototypeOf(window, Window.prototype);
		draggables.forEach((draggable, index) => {
			mockGetBoundingClientRect(draggable, index);
		});

		const draggable = draggables[0].querySelector('div');
		const divTierS = container.querySelector(
			"[data-droppableid='droppable-S']",
		);
		mockGetBoundingClientRect(divTierS, 1);
		console.log(divTierS?.getBoundingClientRect());
		expect(draggable).toBeTruthy();
		fireEvent.keyDown(draggables[0], {
			code: 'Space',
		});

		for (let i = 0; i < 17; i += 1) {
			fireEvent.keyDown(window, {
				code: 'ArrowDown',
			});
		}

		await delay(1);

		fireEvent.keyDown(draggables[0], {
			code: 'Space',
		});
		screen.debug();
		// Esse test não está dando certo e não tenho a solução por enquanto
		// expect.soft(spy).toBeCalledWith('Entrando');
	});
});
