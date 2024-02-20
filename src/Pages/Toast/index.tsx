import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import { Section } from '~/Components/Section';
import { ComponentBlock } from '~/Components/ComponentBlock';
import { CodeBlock } from '~/Components/CodeBlock';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { Button } from '~/Components/Button';
import { useToast } from '~/Hooks/UseToast';

export function ToastPage() {
	const { translate } = useTranslation();
	const { customToast } = useToast();

	function handleError(type: 'error' | 'info' | 'success' | 'warning') {
		customToast({ msg: translate('I_AM_TOAST'), type });
	}

	return (
		<Main data-content="content-main">
			<Section title="Toast" variant="h1">
				{`${translate('IMPLEMENTS_COMPONENT')} Toast ${translate(
					'USING_THE_LIB'
				)} react-hot-toast`}
			</Section>
			<Section title={translate('INSTALLATION_OF_LIB')} variant="h2">
				<CodeBlock>npm i react-hot-toast;</CodeBlock>
			</Section>

			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2 bg-dark-400">
					<QuickAccessGithub name="Checkbox" />
				</div>
			</Section>

			<Section title="Toast" variant="h2">
				<ComponentBlock>
					<Button colorStyle="success" onClick={() => handleError('success')}>
						{translate('SUCCESS')}
					</Button>
					<Button colorStyle="secondary" onClick={() => handleError('error')}>
						{translate('ERROR')}
					</Button>
					<Button colorStyle="warning" onClick={() => handleError('warning')}>
						{translate('WARNING')}
					</Button>
					<Button onClick={() => handleError('info')}>
						{translate('INFO')}
					</Button>
				</ComponentBlock>
			</Section>
		</Main>
	);
}
