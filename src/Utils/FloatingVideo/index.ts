/* eslint-disable no-param-reassign */
type TOnIntersectionObserverProps = {
	entry: IntersectionObserverEntry;
	videoRef: React.MutableRefObject<HTMLVideoElement | null>;
	floatingSide: 'left' | 'right';
};

export function onIntersectionObserver({
	entry,
	videoRef,
	floatingSide,
}: TOnIntersectionObserverProps) {
	console.log('aquiiiii');
	if (entry.intersectionRatio <= 0 && !document.pictureInPictureElement) {
		if (videoRef.current) {
			videoRef.current.style.zIndex = '9999';
			videoRef.current.style.position = 'fixed';
			videoRef.current.style.bottom = '10px';
			videoRef.current.style[floatingSide] = '10px';
		}
	} else if (videoRef.current) {
		videoRef.current.style.position = 'static';
		videoRef.current.style.zIndex = '1';
	}
}

type THandleMouseDownProps = {
	event: React.MouseEvent;
	videoRef: React.MutableRefObject<HTMLVideoElement | null>;
	disableDraggable?: boolean;
	setDragging: (data: boolean) => void;
	setMousePos: (data: { x: number; y: number }) => void;
};
export function handleMouseDown({
	event,
	videoRef,
	disableDraggable,
	setDragging,
	setMousePos,
}: THandleMouseDownProps) {
	if (!videoRef.current || disableDraggable) return;
	setDragging(true);
	setMousePos({
		x: event.clientX - videoRef.current.offsetLeft,
		y: event.clientY - videoRef.current.offsetTop,
	});
}

type THandleMouseMoveProps = {
	event: MouseEvent;
	videoRef: React.MutableRefObject<HTMLVideoElement | null>;
	dragging: boolean;
	mousePos: { x: number; y: number };
	setPosition: (data: { x: number; y: number }) => void;
};
export function handleMouseMove({
	event,
	dragging,
	videoRef,
	mousePos,
	setPosition,
}: THandleMouseMoveProps) {
	if (dragging && videoRef.current) {
		const { clientX, clientY } = event;
		const { offsetWidth, offsetHeight } = videoRef.current;
		const maxX = window.innerWidth - offsetWidth;
		const maxY = window.innerHeight - offsetHeight;

		const x = Math.min(Math.max(clientX - mousePos.x, 0), maxX);
		const y = Math.min(Math.max(clientY - mousePos.y, 0), maxY);

		setPosition({ x, y });
	}
}
