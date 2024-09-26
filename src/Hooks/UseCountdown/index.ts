import { useState, useRef, useEffect } from 'react';

interface Timer {
	id: string;
	milliseconds: number;
	onComplete?: () => void;
	isPaused: boolean;
	isOver: boolean;
	timeLeft: number;
	percentage: number;
}

const PARAMETER_TIME = 10;

type AddTimerProps = {
	milliseconds: number;
	onComplete?: () => void;
	id?: string;
};

export function useCountdown() {
	const [timers, setTimers] = useState<Timer[]>([]);
	const timerRefs = useRef<{ [id: string]: NodeJS.Timeout }>({});

	function addTimer({
		milliseconds,
		onComplete,
		id = `timer-${Date.now()}`,
	}: AddTimerProps) {
		const timer: Timer = {
			id,
			milliseconds,
			onComplete,
			isPaused: false,
			isOver: false,
			timeLeft: milliseconds,
			percentage: 100,
		};
		setTimers(prevTimers => [...prevTimers, timer]);

		timerRefs.current[id] = setInterval(() => {
			setTimers(prevTimers =>
				prevTimers.map(prevTimer => {
					if (prevTimer.id === id) {
						if (!prevTimer.isPaused) {
							const timeLeft = prevTimer.timeLeft - PARAMETER_TIME;
							const percentage = (timeLeft / milliseconds) * 100;

							if (timeLeft <= 0) {
								clearInterval(timerRefs.current[id]);
								onComplete?.();
								return {
									...prevTimer,
									timeLeft: 0,
									percentage: 0,
									isPaused: true,
									isOver: true,
								};
							}

							return {
								...prevTimer,
								timeLeft,
								percentage,
							};
						}
					}
					return prevTimer;
				}),
			);
		}, PARAMETER_TIME);
	}

	function togglePlayPause(id: string) {
		setTimers(prevTimers =>
			prevTimers.map(prevTimer => {
				if (prevTimer.id !== id || prevTimer.isOver) {
					return prevTimer;
				}

				const isRunning = !prevTimer.isPaused;

				if (isRunning) {
					console.log({ isRunning });
					clearInterval(timerRefs.current[id]);
				} else {
					timerRefs.current[id] = setInterval(() => {
						setTimers(currentTimers =>
							currentTimers.map(currentTimer => {
								if (currentTimer.id === id && !currentTimer.isPaused) {
									const timeLeft = currentTimer.timeLeft - PARAMETER_TIME;
									const percentage =
										(timeLeft / currentTimer.milliseconds) * 100;

									if (timeLeft <= 0) {
										clearInterval(timerRefs.current[id]);
										currentTimer.onComplete?.();
										return {
											...currentTimer,
											timeLeft: 0,
											percentage: 0,
											isPaused: true,
											isOver: true,
										};
									}

									return {
										...currentTimer,
										timeLeft,
										percentage,
									};
								}
								return currentTimer;
							}),
						);
					}, PARAMETER_TIME);
				}

				return {
					...prevTimer,
					isPaused: isRunning,
				};
			}),
		);
	}

	function restart(id: string) {
		setTimers(prevTimers =>
			prevTimers.map(item => {
				if (item.id === id) {
					return {
						...item,
						timeLeft: item.milliseconds,
						percentage: 100,
						isOver: false,
					};
				}
				return item;
			}),
		);
	}

	function deleteTimer(id: string) {
		setTimers(prevTimers => prevTimers.filter(item => item.id !== id));
	}

	useEffect(
		() => () => {
			Object.values(timerRefs.current).forEach(timer => clearInterval(timer));
		},
		[],
	);

	return { timers, addTimer, togglePlayPause, deleteTimer, restart };
}
