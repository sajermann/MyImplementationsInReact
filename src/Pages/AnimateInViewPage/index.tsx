import { useRef } from 'react';

import { useTranslation } from '~/Hooks/UseTranslation';
import { Main } from '~/Components/Main';
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { useInView } from 'framer-motion';

function Card({ children }: { children: React.ReactNode }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section
			ref={ref}
			style={{
				height: 500,
			}}
		>
			<span
				style={{
					transform: isInView ? 'none' : 'translateX(-200px)',
					opacity: isInView ? 1 : 0,
					transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
					height: 500,
				}}
			>
				{children}
			</span>
		</section>
	);
}

export function AnimateInViewPage() {
	const { translate } = useTranslation();

	return (
		<Main data-content="content-main">
			<Section heading={translate('ANIMATE_IN_VIEW')}>
				{translate('IMPLEMENTS_PRINT_MODE')}
			</Section>
			<Section subHeading={translate('CODES')}>
				<div className="flex gap-2">
					<QuickAccessGithub name="Print" />
				</div>
			</Section>
			<Section subHeading={translate('IMPLEMENTS')}>
				<Card>Animate</Card>
				<Card>when</Card>
				<Card>in</Card>
				<Card>view!</Card>
			</Section>
		</Main>
	);
}
