import { useTranslation } from '~/Hooks/UseTranslation';
import { Main } from '~/Components/Main';
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { BrawlStar } from '~/Components/DragAndDrop/BrawlStars';

export function DragAndDropPage() {
	const { translate } = useTranslation();
	return (
		<Main data-content="content-main">
			<Section title="Drag and Drop" variant="h1">
				{translate('IMPLEMENTS_DRAG_AND_DROP')}
			</Section>
			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2">
					<QuickAccessGithub name="Drag And Drop" />
				</div>
			</Section>
			<Section title="Brawl Stars" variant="h2">
				<BrawlStar />
			</Section>
		</Main>
	);
}
