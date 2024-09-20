import { useState } from 'react';
import { Button } from '~/Components/Button';
import { Section } from '~/Components/Section';
import { ComponentBlock } from '~/Components/ComponentBlock';
import { useTranslation } from '~/Hooks/UseTranslation';
import { CustomLoading } from '~/Components/CustomLoading';
import { Main } from '~/Components/Main';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { Icons } from '~/Components/Icons';
import styles from './styles.module.css';

export function ButtonPage() {
	const [isLoading, setIsLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [failed, setFailed] = useState(false);
	const { translate } = useTranslation();

	function delay(delayMs: number): Promise<void> {
		return new Promise(resolve => {
			setTimeout(() => resolve(), delayMs);
		});
	}

	async function handleSave() {
		setIsLoading(true);
		await delay(3000);
		setIsLoading(false);
		setSuccess(true);
		await delay(2000);
		setSuccess(false);
	}

	async function handleSaveFailed() {
		setIsLoading(true);
		await delay(3000);
		setIsLoading(false);
		setFailed(true);
		await delay(2000);
		setFailed(false);
	}

	return (
		<Main data-content="content-main">
			<Section title={translate('BUTTONS')} variant="h1">
				{`${translate('IMPLEMENTS_COMPONENT')} Button ${translate(
					'WITHOUT_USING_LIB',
				)}`}
			</Section>

			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2 bg-dark-400">
					<QuickAccessGithub name="Button" />
				</div>
			</Section>

			<Section title={translate('VARIANTS')} variant="h2">
				<ComponentBlock>
					<Button variant="default">Default</Button>
					<Button variant="outlined">Outlined</Button>
					<Button variant="option">Option</Button>
				</ComponentBlock>
			</Section>

			<Section title={translate('COLOR_STYLE')} variant="h2">
				<ComponentBlock>
					<Button colorStyle="primary">Primary</Button>
					<Button colorStyle="secondary">Secondary</Button>
					<Button colorStyle="success">Success</Button>
					<Button colorStyle="warning">Warning</Button>
					<Button colorStyle="white">White</Button>
				</ComponentBlock>
			</Section>

			<Section title={translate('VARIANTS_AND_COLOR_STYLE')} variant="h2">
				<ComponentBlock>
					<Button variant="default">Default</Button>
					<Button variant="outlined">Outlined</Button>
					<Button variant="option">Option</Button>

					<Button variant="default" colorStyle="secondary">
						Default
					</Button>
					<Button variant="outlined" colorStyle="secondary">
						Outlined
					</Button>
					<Button variant="option" colorStyle="secondary">
						Option
					</Button>

					<Button variant="default" colorStyle="success">
						Default
					</Button>
					<Button variant="outlined" colorStyle="success">
						Outlined
					</Button>
					<Button variant="option" colorStyle="success">
						Option
					</Button>

					<Button variant="default" colorStyle="warning">
						Default
					</Button>
					<Button variant="outlined" colorStyle="warning">
						Outlined
					</Button>
					<Button variant="option" colorStyle="warning">
						Option
					</Button>
				</ComponentBlock>
			</Section>

			<Section title={translate('ICONS')} variant="h2">
				<ComponentBlock>
					<Button
						colorStyle="success"
						startIcon={<Icons nameIcon="whatsappLogo" width="30px" />}
					>
						Whats
					</Button>
					<Button
						variant="outlined"
						endIcon={<Icons nameIcon="telegramLogo" width="30px" />}
					>
						Telegram
					</Button>
					<Button
						variant="option"
						colorStyle="secondary"
						startIcon={<Icons nameIcon="youtubeLogo" width="30px" />}
						endIcon={<Icons nameIcon="youtubeLogo" width="30px" />}
					>
						Youtube
					</Button>
				</ComponentBlock>
			</Section>

			<Section title={translate('WITH_FEEDBACKS')} variant="h2">
				<div className={styles.blockH3}>
					<h3>{translate('LOADING_OPTIONS')}</h3>
					<ComponentBlock>
						<Button
							disabled
							colorStyle="primary"
							onClick={() => handleSave()}
							withFeedback={{
								loadingOptions: {
									isLoading: true,
								},
							}}
						>
							Default
						</Button>
						<Button
							disabled
							colorStyle="secondary"
							variant="outlined"
							onClick={() => handleSave()}
							withFeedback={{
								loadingOptions: {
									isLoading: true,
									typeLoadingIcon: 'Points',
								},
							}}
						>
							Points
						</Button>
						<Button
							disabled
							colorStyle="success"
							variant="option"
							onClick={() => handleSave()}
							withFeedback={{
								loadingOptions: {
									isLoading: true,
									fullIcon: true,
								},
							}}
						>
							Full Icon
						</Button>
						<Button
							disabled
							colorStyle="warning"
							onClick={() => handleSave()}
							withFeedback={{
								loadingOptions: {
									isLoading: true,
									customIcon: <CustomLoading />,
								},
							}}
						>
							Custom Icon
						</Button>
					</ComponentBlock>
				</div>
				<div className={styles.blockH3}>
					<h3>{translate('SUCCESS_OPTIONS')}</h3>
					<ComponentBlock>
						<Button
							disabled={isLoading}
							onClick={handleSave}
							withFeedback={{
								loadingOptions: {
									isLoading,
								},
								successOptions: {
									success,
								},
							}}
						>
							{translate('SUCCESS')}
						</Button>
						<Button
							disabled={isLoading}
							colorStyle="success"
							variant="outlined"
							onClick={handleSave}
							withFeedback={{
								loadingOptions: {
									isLoading,
								},
								successOptions: {
									success,
									fullIcon: true,
								},
							}}
						>
							Full Icon
						</Button>
						<Button
							disabled={isLoading}
							colorStyle="warning"
							onClick={handleSave}
							withFeedback={{
								loadingOptions: {
									isLoading,
								},
								successOptions: {
									success,
									customIcon: (
										<Icons nameIcon="trendUp">
											<animate
												attributeName="opacity"
												values="0;1;0"
												dur="1s"
												repeatCount="indefinite"
											/>
										</Icons>
									),
								},
							}}
						>
							Custom Icon
						</Button>
					</ComponentBlock>
				</div>
				<div className={styles.blockH3}>
					<h3>{translate('FAILED_OPTIONS')}</h3>
					<ComponentBlock>
						<Button
							disabled={isLoading}
							onClick={handleSaveFailed}
							withFeedback={{
								loadingOptions: {
									isLoading,
								},
								failedOptions: {
									failed,
								},
							}}
						>
							{translate('FAILED')}
						</Button>
						<Button
							disabled={isLoading}
							colorStyle="secondary"
							variant="outlined"
							onClick={handleSaveFailed}
							withFeedback={{
								loadingOptions: {
									isLoading,
								},
								failedOptions: {
									failed,
									fullIcon: true,
								},
							}}
						>
							Full Icon
						</Button>
						<Button
							disabled={isLoading}
							colorStyle="warning"
							onClick={handleSaveFailed}
							withFeedback={{
								loadingOptions: {
									isLoading,
								},
								failedOptions: {
									failed,
									customIcon: (
										<Icons nameIcon="trendDown">
											<animate
												attributeName="opacity"
												values="0;1;0"
												dur="1s"
												repeatCount="indefinite"
											/>
										</Icons>
									),
								},
							}}
						>
							Custom Icon
						</Button>
					</ComponentBlock>
				</div>
			</Section>

			<Section title={translate('OTHERS')} variant="h2">
				<div className={styles.blockH3}>
					<h3>{translate('WIDTHS')}</h3>
					<ComponentBlock>
						<Button
							disabled={isLoading}
							onClick={handleSave}
							withFeedback={{
								loadingOptions: {
									isLoading,
									fullIcon: true,
								},
								successOptions: {
									success,
									fullIcon: true,
								},
							}}
							className="w-64 h-14"
						>
							{translate('FIXED_ONLY_ICON')}
						</Button>
						<Button
							className="w-64 h-10"
							disabled={isLoading}
							colorStyle="secondary"
							onClick={handleSave}
							withFeedback={{
								loadingOptions: {
									isLoading,
								},
								successOptions: {
									success,
								},
							}}
						>
							{translate('FIXED_WITH_ICON')}
						</Button>
						<Button
							className="w-64 h-14"
							disabled={isLoading}
							colorStyle="success"
							onClick={handleSave}
							withFeedback={{
								loadingOptions: {
									isLoading,
								},
								successOptions: {
									success,
								},
							}}
						>
							Ellipsis Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Ea hic molestias aperiam quia nihil quod odit sit accusamus cum
							praesentium, nulla in, ullam obcaecati dolorum possimus ipsa
							commodi quidem voluptatem!
						</Button>
					</ComponentBlock>
				</div>
				<div className={styles.blockH3}>
					<h3>{translate('ICON_BUTTONS')}</h3>
					<ComponentBlock>
						<Button
							iconButton="rounded"
							disabled={isLoading}
							onClick={handleSave}
							withFeedback={{
								loadingOptions: {
									isLoading,
								},
								successOptions: {
									success,
								},
							}}
							endIcon={<Icons nameIcon="telegramLogo" width="30px" />}
						/>
						<Button
							iconButton="squared"
							disabled={isLoading}
							colorStyle="secondary"
							variant="outlined"
							onClick={handleSave}
							withFeedback={{
								loadingOptions: {
									isLoading,
									typeLoadingIcon: 'Points',
								},
								successOptions: {
									success,
								},
							}}
							endIcon={<Icons nameIcon="youtubeLogo" width="30px" />}
						/>
						<Button
							iconButton="rounded"
							disabled={isLoading}
							colorStyle="success"
							variant="option"
							onClick={handleSave}
							withFeedback={{
								loadingOptions: {
									isLoading,
								},
								successOptions: {
									success,
								},
							}}
							endIcon={<Icons nameIcon="whatsappLogo" width="30px" />}
						/>
					</ComponentBlock>
				</div>
				<div className={styles.blockH3}>
					<h3>{translate('CUSTOMIZATIONS')}</h3>
					<ComponentBlock>
						<Button variant="outlined" className={styles.custom}>
							Custom 1
						</Button>
						<Button variant="outlined" className={styles.custom2}>
							Custom 2
						</Button>
					</ComponentBlock>
				</div>
			</Section>
		</Main>
	);
}
