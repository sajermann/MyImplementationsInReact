import { useState } from 'react';
import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import { Section } from '~/Components/Section';
import { ComponentBlock } from '~/Components/ComponentBlock';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { TextEditor } from '~/Components/TextEditor';

export function TextEditorPage() {
	const { translate } = useTranslation();
	const [checked, setChecked] = useState(false);
	const [errorMode, setErrorMode] = useState(false);

	return (
		<Main data-content="content-main">
			<Section title={translate('TEXT_EDITOR')} variant="h1">
				{`${translate('IMPLEMENTS_COMPONENT')} ${translate('TEXT_EDITOR')}`}
			</Section>

			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2 bg-dark-400">
					<QuickAccessGithub name="EditorText" />
				</div>
			</Section>

			<Section title="Normal" variant="h2">
				<ComponentBlock>
					<TextEditor />
				</ComponentBlock>
			</Section>
		</Main>
	);
}
