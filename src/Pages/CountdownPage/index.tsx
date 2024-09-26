import { useTranslation } from '~/Hooks/UseTranslation';
import { Main } from '~/Components/Main';
import { Section } from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { useCountdown } from '~/Hooks/UseCountdown';
import { PauseIcon, PlayIcon, RotateCcwIcon, TrashIcon } from 'lucide-react';
import { Button } from '~/Components/Button';
import { ContainerInput } from '~/Components/ContainerInput';
import { Label } from '~/Components/Label';
import { Input } from '~/Components/Input';
import { useState } from 'react';
import { ComponentBlock } from '~/Components/ComponentBlock';
import { testIdOnlyDev } from '~/Utils/ShowInDevelopment';

export function CountdownPage() {
	const { translate } = useTranslation();
	const { timers, addTimer, togglePlayPause, deleteTimer, restart } =
		useCountdown();
	const [milliseconds, setMilliseconds] = useState('');

	return (
		<Main data-content="content-main">
			<Section title="Countdown" variant="h1">
				{`${translate('IMPLEMENTS_COMPONENT')} Countdown ${translate(
					'WITHOUT_USING_LIB',
				)}`}
			</Section>
			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2  bg-dark-400">
					<QuickAccessGithub name="Countdown" />
				</div>
			</Section>

			<Section title={translate('IMPLEMENTS')} variant="h2">
				<ComponentBlock className="flex flex-col gap-4">
					<div className="flex gap-4 items-end">
						<ContainerInput>
							<Label htmlFor="label">{translate('MILLISECONDS')}</Label>
							<Input
								{...testIdOnlyDev('input-milliseconds')}
								type="number"
								value={milliseconds}
								onChange={({ target }) => setMilliseconds(target.value)}
								placeholder={translate('MILLISECONDS')}
								id="label"
							/>
						</ContainerInput>
						<Button
							variant="outlined"
							colorStyle="mono"
							onClick={() =>
								addTimer({
									milliseconds: Number(milliseconds),
								})
							}
						>
							{translate('ADD')}
						</Button>
					</div>

					{timers.map(timer => (
						<div className="flex items-center gap-4" key={timer.id}>
							<div className="border rounded p-2 px-4 flex gap-4">
								<div className="flex flex-col gap-1 items-center">
									<span>{translate('TIME_LEFT')}</span>
									<span>{timer.timeLeft}</span>
								</div>
								<div className="flex flex-col gap-1 items-center">
									<span>{translate('PERCENT_LEFT')}</span>
									<span>{timer.percentage.toFixed(2)}%</span>
								</div>
								<div className="flex flex-col gap-1 items-center">
									<span>%</span>
									<span>{(100 - timer.percentage).toFixed(2)}%</span>
								</div>

								<div className="flex flex-col gap-1 items-center">
									<span>Play/Pause</span>
									{!timer.isOver && (
										<Button
											{...testIdOnlyDev(
												`button-${timer.isPaused ? 'play' : 'pause'}`,
											)}
											variant="outlined"
											colorStyle="mono"
											iconButton="squared"
											onClick={() => togglePlayPause(timer.id)}
										>
											{timer.isPaused ? <PlayIcon /> : <PauseIcon />}
										</Button>
									)}
									{timer.isOver && (
										<Button
											{...testIdOnlyDev(`button-restart`)}
											variant="outlined"
											colorStyle="mono"
											iconButton="squared"
											onClick={() => restart(timer.id)}
										>
											<RotateCcwIcon />
										</Button>
									)}
								</div>

								<div className="flex flex-col gap-1 items-center">
									<span>{translate('REMOVE')}</span>
									<Button
										{...testIdOnlyDev(`button-remove`)}
										variant="outlined"
										colorStyle="mono"
										iconButton="squared"
										onClick={() => deleteTimer(timer.id)}
									>
										<TrashIcon />
									</Button>
								</div>
							</div>
						</div>
					))}
				</ComponentBlock>
			</Section>
		</Main>
	);
}
