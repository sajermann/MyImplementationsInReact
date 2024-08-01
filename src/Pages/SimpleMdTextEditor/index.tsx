import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import { Section } from '~/Components/Section';
import { ComponentBlock } from '~/Components/ComponentBlock';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { SimpleMdTextEditor } from '~/Components/SimpleMdTextEditor';

export function SimpleMdTextEditorPage() {
	const { translate } = useTranslation();

	return (
		<Main data-content="content-main">
			<Section title={translate('SIMPLE_MD_TEXT_EDITOR')} variant="h1">
				{`${translate('IMPLEMENTS_COMPONENT')} ${translate('SIMPLE_MD_TEXT_EDITOR')} ${translate(
					'WITHOUT_USING_LIB',
				)}`}
				.
			</Section>

			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2 bg-dark-400">
					<QuickAccessGithub name="EditorText" />
				</div>
			</Section>

			<Section title="Normal" variant="h2">
				<ComponentBlock>
					<SimpleMdTextEditor />
				</ComponentBlock>
			</Section>
		</Main>
	);
}
