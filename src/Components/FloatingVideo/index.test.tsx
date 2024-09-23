/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, screen } from '@testing-library/react';
import { it, describe } from 'vitest';

import { FloatingVideo } from '.';

describe.only('Components/FloatingVideo', () => {
	it(`must render component`, async () => {
		const { getByTestId } = render(
			<div
				className="h-full w-96 overflow-scroll"
				data-testid="container-video"
				id="container-video"
			>
				<div className="w-full h-60">
					<FloatingVideo src="https://cdn.arnellebalane.com/videos/original-video.mp4" />
				</div>
				<div className="w-full h-[1900px]">Bruno</div>
			</div>,
		);
		const b = getByTestId('container-video');
		const floatingVideo = getByTestId('floating-video');
		fireEvent.mouseDown(floatingVideo); // Line Coverage
		fireEvent.mouseUp(floatingVideo);
		fireEvent.mouseMove(floatingVideo);
		fireEvent.scroll(b, { target: { scrollY: 1900 } });
		screen.logTestingPlaygroundURL();
		expect(b).toBeTruthy();
	});
});
