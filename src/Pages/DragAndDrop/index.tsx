import { CodeBlock } from '~/Components/CodeBlock';
import { BrawlStar } from '~/Components/DragAndDrop/BrawlStars';
import { Main } from '~/Components/Main';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { Section } from '~/Components/Section';
import { useTranslation } from '~/Hooks/UseTranslation';

export function DragAndDropPage() {
	const { translate } = useTranslation();
	return (
		<Main data-content="content-main">
			<Section title="Drag and Drop" variant="h1">
				{`${translate('IMPLEMENTS_COMPONENT')} Drag and Drop ${translate(
					'USING_THE_LIB'
				)} dnd-kit`}
			</Section>
			<Section title={translate('INSTALLATION_OF_LIB')} variant="h2">
				<CodeBlock>npm i @dnd-kit/core;</CodeBlock>
			</Section>
			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2 bg-dark-400">
					<QuickAccessGithub name="Drag And Drop" />
				</div>
			</Section>
			<Section title="Brawl Stars" variant="h2">
				<BrawlStar />
			</Section>
		</Main>
	);
}
