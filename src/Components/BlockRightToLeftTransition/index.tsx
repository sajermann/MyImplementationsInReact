import { motion } from 'framer-motion';

type Props = {
	show: boolean;
	children: React.ReactNode;
	width: string | number;
};

export function BlockRightToLeftTransition({ show, children, width }: Props) {
	return (
		<motion.div
			animate={{ width: show ? width : 0 }}
			transition={{ duration: 1, origin: 100 }}
			style={{ overflow: 'hidden' }}
		>
			{children}
		</motion.div>
	);
}
