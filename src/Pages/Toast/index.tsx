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
	const { customReactHotToast, customReactToastify } = useToast();

	return (
		<Main data-content="content-main">
			<Section title="Toast" variant="h1">
				{`${translate('IMPLEMENTS_COMPONENT')} Toast ${translate(
					'USING_THE_LIB',
				)} react-hot-toast / react-toastify`}
			</Section>
			<Section
				title={translate('INSTALLATION_OF_LIB')}
				variant="h2"
				className="flex flex-col gap-2"
			>
				<CodeBlock>npm i react-hot-toast;</CodeBlock>
				<CodeBlock>npm i react-toastify;</CodeBlock>
			</Section>

			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2 bg-dark-400">
					<QuickAccessGithub name="Toast" />
				</div>
			</Section>

			<Section title="react-hot-toast" variant="h2">
				<ComponentBlock>
					<Button
						colorStyle="success"
						onClick={() =>
							customReactHotToast(`Toast ${translate('SUCCESS')}`, {
								type: 'success',
							})
						}
					>
						{translate('SUCCESS')}
					</Button>
					<Button
						colorStyle="secondary"
						onClick={() =>
							customReactHotToast(`Toast ${translate('ERROR')}`, {
								type: 'error',
							})
						}
					>
						{translate('ERROR')}
					</Button>
					<Button
						colorStyle="warning"
						onClick={() =>
							customReactHotToast(`Toast ${translate('WARNING')}`, {
								type: 'warning',
							})
						}
					>
						{translate('WARNING')}
					</Button>
					<Button
						onClick={() =>
							customReactHotToast(`Toast ${translate('INFO')}`, {
								type: 'info',
							})
						}
					>
						{translate('INFO')}
					</Button>
					<Button
						variant="outlined"
						onClick={() =>
							customReactHotToast(`Toast ${translate('DEFAULT')}`, {
								type: 'default',
								id: 'default',
							})
						}
					>
						{translate('DEFAULT')}
					</Button>
				</ComponentBlock>
			</Section>

			<Section title="react-toastify" variant="h2">
				<ComponentBlock>
					<Button
						colorStyle="success"
						onClick={() =>
							customReactToastify(translate('SUCCESS'), { type: 'success' })
						}
					>
						{translate('SUCCESS')}
					</Button>
					<Button
						colorStyle="secondary"
						onClick={() =>
							customReactToastify(translate('ERROR'), { type: 'error' })
						}
					>
						{translate('ERROR')}
					</Button>
					<Button
						colorStyle="warning"
						onClick={() =>
							customReactToastify(translate('WARNING'), { type: 'warning' })
						}
					>
						{translate('WARNING')}
					</Button>
					<Button
						onClick={() =>
							customReactToastify(translate('INFO'), { type: 'info' })
						}
					>
						{translate('INFO')}
					</Button>
					<Button
						variant="outlined"
						onClick={() =>
							customReactToastify(translate('DEFAULT'), {
								type: 'default',
								id: 'default',
							})
						}
					>
						{translate('DEFAULT')}
					</Button>
				</ComponentBlock>
			</Section>
		</Main>
	);
}
