import { PlayIcon, PauseIcon, RotateCcwIcon } from 'lucide-react';
import { useEffect } from 'react';
import { Button } from '~/Components/Button';
import { useCountdown } from '~/Hooks/UseCountdown';

import { testIdOnlyDev } from '~/Utils/ShowInDevelopment';

export function CountdownDemo() {
	const { timers, togglePlayPause, restart, addTimer, deleteTimer } =
		useCountdown();
	useEffect(() => {
		addTimer({ milliseconds: 10000 });

		addTimer({ milliseconds: 10, id: '10' });
		return () => {
			deleteTimer(timers[0]?.id);
		};
	}, []);
	return (
		<div className="flex flex-col gap-1">
			{timers.map(timer => (
				<div className="flex items-center gap-4" key={timer.id}>
					<div className="p-2 px-4 flex gap-4">
						<div className="flex flex-col gap-1 items-center">
							<span>Time</span>
							<span>{timer.timeLeft}</span>
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
					</div>
				</div>
			))}
		</div>
	);
}
