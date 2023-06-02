import { motion, useInView } from 'framer-motion';
import { DetailedHTMLProps, HTMLAttributes, useEffect, useRef } from 'react';

type Props = Omit<
	DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
	'style'
> & {
	type?: 'fade' | 'fromLeft' | 'fromRight' | 'fromTop' | 'fromBottom';
	duration?: number;
};

export function AnimateInView({
	type = 'fade',
	duration = 1.5,
	...props
}: Props) {
	const ref = useRef<HTMLDivElement | null>(null);
	const inViewRef = useRef<HTMLDivElement | null>(null);
	const inView = useInView(inViewRef, { once: true });

	useEffect(() => {
		if (ref.current && inView) {
			ref.current.style.height = `${ref.current.scrollHeight}px`;
		}
	}, [inView]);

	const animations = {
		fade: {
			hidden: { opacity: 0 },
			visible: { opacity: 1, transition: { duration } },
		},
		fromLeft: {
			hidden: { x: '-100%' },
			visible: { x: 0, transition: { duration } },
		},
		fromRight: {
			hidden: { x: '100%' },
			visible: { x: 0, transition: { duration } },
		},
		fromBottom: {
			hidden: { y: '100%' },
			visible: { y: 0, transition: { duration } },
		},
		fromTop: {
			hidden: { y: '-100%' },
			visible: { y: 0, transition: { duration } },
		},
	};

	const slideAnimation = animations[type] || animations.fade;

	return (
		<div ref={inViewRef} style={{ overflow: 'hidden' }} {...props}>
			<motion.div
				ref={ref}
				initial="hidden"
				animate={inView ? 'visible' : 'hidden'}
				variants={slideAnimation}
			>
				{props.children}
			</motion.div>
		</div>
	);
}
