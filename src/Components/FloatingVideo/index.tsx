/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef, useState } from 'react';
import {
	handleMouseDown,
	handleMouseMove,
	onIntersectionObserver,
} from '~/Utils/FloatingVideo';
import { testIdOnlyDev } from '~/Utils/ShowInDevelopment';

interface FloatingVideoProps {
	src: string;
	disableDraggable?: boolean;
	floatingSide?: 'left' | 'right';
}

export function FloatingVideo({
	src,
	disableDraggable,
	floatingSide = 'right',
}: FloatingVideoProps) {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [dragging, setDragging] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

	const handleMouseUp = () => {
		setDragging(false);
	};

	const handleMouseMoveInternal = (event: MouseEvent) =>
		handleMouseMove({ event, dragging, mousePos, setPosition, videoRef });

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => onIntersectionObserver({ entry, videoRef, floatingSide }),
			{
				threshold: [0],
			},
		);

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		window.addEventListener('mousemove', handleMouseMoveInternal);

		return () => {
			observer.disconnect();
			window.removeEventListener('mousemove', handleMouseMoveInternal);
		};
	}, [dragging]);

	useEffect(() => {
		if (position.x === 0 && position.y === 0) return;
		if (videoRef.current && dragging) {
			videoRef.current.style.left = `${position.x}px`;
			videoRef.current.style.top = `${position.y}px`;
		}
	}, [position, dragging]);

	return (
		<div ref={containerRef}>
			<video
				{...testIdOnlyDev('floating-video')}
				className="w-96"
				ref={videoRef}
				controls
				muted
				onMouseDown={event =>
					handleMouseDown({
						event,
						setDragging,
						setMousePos,
						videoRef,
						disableDraggable,
					})
				}
				onMouseUp={handleMouseUp}
				onMouseOut={handleMouseUp}
			>
				<source src={src} type="video/mp4" />
			</video>
		</div>
	);
}
