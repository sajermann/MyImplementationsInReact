import { useState } from 'react';

import { CodeBlock } from '~/Components/CodeBlock';
import { Button } from '~/Components/Button';
import Section from '~/Components/Section';
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
			<Section heading={translate('BUTTONS')}>
				{`${translate('IMPLEMENTS_COMPONENT')} ${translate(
					'BUTTON'
				)} ${translate('USING_THE_MY_SELF_LIB')} @sajermann/react-button.`}
			</Section>
			<Section subHeading={translate('INSTALLATION_OF_LIB')}>
				<CodeBlock>npm i @sajermann/react-button;</CodeBlock>
			</Section>

			<Section subHeading={translate('CODES')}>
				<div className="flex gap-2">
					<QuickAccessGithub name="Button" />
				</div>
			</Section>

			<Section subHeading={translate('VARIANTS')}>
				<ComponentBlock>
					<Button className={styles.btn}>Default</Button>
					<Button
						className={styles.btn}
						colorStyle="Secondary"
						variant="Outlined"
					>
						Outlined
					</Button>
					<Button className={styles.btn} colorStyle="Success" variant="Option">
						Option
					</Button>
				</ComponentBlock>
			</Section>

			<Section subHeading={translate('COLOR_STYLE')}>
				<ComponentBlock>
					<Button className={styles.btn} colorStyle="Primary">
						Primary
					</Button>
					<Button className={styles.btn} colorStyle="Secondary">
						Secondary
					</Button>
					<Button className={styles.btn} colorStyle="Success">
						Success
					</Button>
					<Button className={styles.btn} colorStyle="Warning">
						Warning
					</Button>
				</ComponentBlock>
			</Section>

			<Section subHeading={translate('ICONS')}>
				<ComponentBlock>
					<Button
						className={styles.btn}
						colorStyle="Success"
						startIcon={<Icons.WhatsappLogo width="30px" />}
					>
						Whats
					</Button>
					<Button
						className={styles.btn}
						colorStyle="Primary"
						endIcon={<Icons.TelegramLogo width="30px" />}
					>
						Telegram
					</Button>
					<Button
						className={styles.btn}
						colorStyle="Secondary"
						startIcon={<Icons.YoutubeLogo width="30px" />}
						endIcon={<Icons.YoutubeLogo width="30px" />}
					>
						Youtube
					</Button>
				</ComponentBlock>
			</Section>

			<Section subHeading={translate('WITH_FEEDBACKS')}>
				<div className={styles.blockH3}>
					<h3>{translate('LOADING_OPTIONS')}</h3>
					<ComponentBlock>
						<Button
							disabled
							colorStyle="Primary"
							className={styles.btn}
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
							colorStyle="Secondary"
							variant="Outlined"
							className={styles.btn}
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
							colorStyle="Success"
							variant="Option"
							className={styles.btn}
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
							colorStyle="Warning"
							className={styles.btn}
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
							colorStyle="Primary"
							className={styles.btn}
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
							colorStyle="Success"
							variant="Outlined"
							className={styles.btn}
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
							colorStyle="Warning"
							className={styles.btn}
							onClick={handleSave}
							withFeedback={{
								loadingOptions: {
									isLoading,
								},
								successOptions: {
									success,
									customIcon: (
										<Icons.TrendUp>
											<animate
												attributeName="opacity"
												values="0;1;0"
												dur="1s"
												repeatCount="indefinite"
											/>
										</Icons.TrendUp>
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
							colorStyle="Primary"
							className={styles.btn}
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
							colorStyle="Secondary"
							variant="Outlined"
							className={styles.btn}
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
							colorStyle="Warning"
							className={styles.btn}
							onClick={handleSaveFailed}
							withFeedback={{
								loadingOptions: {
									isLoading,
								},
								failedOptions: {
									failed,
									customIcon: (
										<Icons.TrendDown>
											<animate
												attributeName="opacity"
												values="0;1;0"
												dur="1s"
												repeatCount="indefinite"
											/>
										</Icons.TrendDown>
									),
								},
							}}
						>
							Custom Icon
						</Button>
					</ComponentBlock>
				</div>
			</Section>

			<Section subHeading={translate('OTHERS')}>
				<div className={styles.blockH3}>
					<h3>{translate('WIDTHS')}</h3>
					<ComponentBlock>
						<Button
							style={{ width: '250px', height: '50px' }}
							disabled={isLoading}
							colorStyle="Primary"
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
						>
							{translate('FIXED_ONLY_ICON')}
						</Button>
						<Button
							style={{ width: '250px', height: '50px' }}
							disabled={isLoading}
							colorStyle="Secondary"
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
							style={{ width: '250px', height: '50px' }}
							disabled={isLoading}
							colorStyle="Success"
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
							style={{ minWidth: '50px', height: '50px' }}
							disabled={isLoading}
							colorStyle="Success"
							variant="Outlined"
							onClick={handleSave}
							withFeedback={{
								loadingOptions: {
									isLoading,
								},
								successOptions: {
									success: true,
								},
							}}
							endIcon={<Icons.WhatsappLogo width="30px" />}
						/>
						<Button
							style={{ minWidth: '50px', height: '50px' }}
							disabled={isLoading}
							colorStyle="Secondary"
							variant="Outlined"
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
							endIcon={<Icons.YoutubeLogo width="30px" />}
						/>
						<Button
							style={{ minWidth: '50px', height: '50px', borderRadius: '50%' }}
							disabled={isLoading}
							colorStyle="Primary"
							variant="Outlined"
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
							endIcon={<Icons.TelegramLogo width="30px" />}
						/>
					</ComponentBlock>
				</div>
				<div className={styles.blockH3}>
					<h3>{translate('CUSTOMIZATIONS')}</h3>
					<ComponentBlock>
						<Button variant="Outlined" className={styles.custom}>
							Custom 1
						</Button>
						<Button variant="Outlined" className={styles.custom2}>
							Custom 2
						</Button>
					</ComponentBlock>
				</div>
			</Section>
		</Main>
	);
}
