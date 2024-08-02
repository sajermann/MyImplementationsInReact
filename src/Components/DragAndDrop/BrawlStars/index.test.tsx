/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { BrawlStar } from '.';

describe('Components/BrawlStar', () => {
	it(`must render component`, async () => {
		const { queryAllByRole, container } = render(<BrawlStar />);
		const result = queryAllByRole('button');
		const draggable = result[0].querySelector('div');
		const divTierS = container.querySelector(
			"[data-droppableid='droppable-S']",
		);
		expect(draggable).toBeTruthy();
		if (!draggable || !divTierS) return;
		fireEvent.dragStart(draggable);
		fireEvent.dragEnter(divTierS);
		fireEvent.dragOver(divTierS);
		fireEvent.drop(divTierS);
		fireEvent.dragEnd(divTierS);

		// Esse test não está dando certo e não tenho a solução por enquanto
	});
});
