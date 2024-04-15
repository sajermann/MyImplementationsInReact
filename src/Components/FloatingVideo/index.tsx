/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef, useState } from 'react';

interface FloatingVideoProps {
	src: string;
	disableDraggable?: boolean;
}

export function FloatingVideo({ src, disableDraggable }: FloatingVideoProps) {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [dragging, setDragging] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

	const handleMouseDown = (event: React.MouseEvent) => {
		if (!videoRef.current || disableDraggable) return;
		setDragging(true);
		setMousePos({
			x: event.clientX - videoRef.current.offsetLeft,
			y: event.clientY - videoRef.current.offsetTop,
		});
	};

	const handleMouseUp = () => {
		setDragging(false);
	};

	const handleMouseMove = (event: MouseEvent) => {
		if (dragging && videoRef.current) {
			const { clientX, clientY } = event;
			const { offsetWidth, offsetHeight } = videoRef.current;
			const maxX = window.innerWidth - offsetWidth;
			const maxY = window.innerHeight - offsetHeight;

			const x = Math.min(Math.max(clientX - mousePos.x, 0), maxX);
			const y = Math.min(Math.max(clientY - mousePos.y, 0), maxY);

			setPosition({ x, y });
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.intersectionRatio <= 0 && !document.pictureInPictureElement) {
					if (videoRef.current) {
						videoRef.current.style.position = 'fixed';
						videoRef.current.style.bottom = '10px';
						videoRef.current.style.right = '10px';
					}
				} else if (videoRef.current) {
					videoRef.current.style.position = 'static';
				}
			},
			{ threshold: [0] }
		);

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			observer.disconnect();
			window.removeEventListener('mousemove', handleMouseMove);
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
				className="w-96"
				ref={videoRef}
				controls
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
				onMouseOut={handleMouseUp}
			>
				<source src={src} type="video/mp4" />
			</video>
		</div>
	);
}
