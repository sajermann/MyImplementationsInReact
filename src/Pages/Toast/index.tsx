import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import Section from '~/Components/Section';
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
			<Section heading="Toast">
				{`${translate('IMPLEMENTS_COMPONENT')} Toast ${translate(
					'USING_THE_LIB'
				)} react-hot-toast`}
			</Section>
			<Section subHeading={translate('INSTALLATION_OF_LIB')}>
				<CodeBlock>npm i react-hot-toast;</CodeBlock>
			</Section>

			<Section subHeading={translate('CODES')}>
				<div className="flex gap-2">
					<QuickAccessGithub name="Checkbox" />
				</div>
			</Section>

			<Section subHeading="Toast">
				<ComponentBlock>
					<Button colorStyle="Success" onClick={() => handleError('success')}>
						{translate('SUCCESS')}
					</Button>
					<Button colorStyle="Secondary" onClick={() => handleError('error')}>
						{translate('ERROR')}
					</Button>
					<Button colorStyle="Warning" onClick={() => handleError('warning')}>
						{translate('WARNING')}
					</Button>
					<Button colorStyle="Primary" onClick={() => handleError('info')}>
						{translate('INFO')}
					</Button>
				</ComponentBlock>
			</Section>
		</Main>
	);
}
