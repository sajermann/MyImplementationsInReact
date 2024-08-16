import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import { Section } from '~/Components/Section';
import { ComponentBlock } from '~/Components/ComponentBlock';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { FloatingVideo } from '~/Components/FloatingVideo';

export function FloatingVideoPage() {
	const { translate } = useTranslation();

	return (
		<Main data-content="content-main">
			<Section title={translate('FLOATING_VIDEO')} variant="h1">
				{`${translate('IMPLEMENTS_COMPONENT')} ${translate(
					'FLOATING_VIDEO',
				)} ${translate('WITHOUT_USING_LIB')}`}
			</Section>

			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2 bg-dark-400">
					<QuickAccessGithub name="Floating Video" />
				</div>
			</Section>

			<Section title={translate('DRAGGABLE')} variant="h2">
				<span className="italic">{translate('NOTE_FLOATING_VIDEO')}</span>
				<ComponentBlock>
					<FloatingVideo src="https://cdn.arnellebalane.com/videos/original-video.mp4" />
				</ComponentBlock>
			</Section>

			<Section title={translate('DISABLED_DRAGGABLE')} variant="h2">
				<ComponentBlock>
					<FloatingVideo
						src="https://cdn.arnellebalane.com/videos/original-video.mp4"
						disableDraggable
						floatingSide="left"
					/>
				</ComponentBlock>
			</Section>

			<div>
				{Array.from({ length: 100 }, (_, i) => i).map(i => (
					<p key={`${new Date().toISOString()}+${i}`}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut error,
						ex molestiae distinctio ducimus voluptatum autem repudiandae. Vitae
						iste sit suscipit officiis eius accusamus. Amet non magni
						praesentium quo? Enim.
					</p>
				))}
			</div>
		</Main>
	);
}
