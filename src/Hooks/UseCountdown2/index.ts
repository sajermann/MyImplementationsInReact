import { useState, useRef, useEffect } from 'react';

interface Timer {
	id: string;
	milliseconds: number;
	onComplete: () => void;
	isPaused: boolean;
	timeLeft: number;
	percentage: number;
}

type TimerAction = 'ADD_TIMER' | 'TOGGLE_PLAY_PAUSE';

type TimerState = Timer[];

const useTimerHook = (): [
	TimerState,
	(action: TimerAction, exec?: () => void, id?: string) => void
] => {
	const [timers, setTimers] = useState<TimerState>([]);
	const timerRefs = useRef<{ [id: string]: NodeJS.Timeout }>({});

	const addTimer = (milliseconds: number, onComplete: () => void): void => {
		const id = `timer-${Date.now()}`;
		const timer: Timer = {
			id,
			milliseconds,
			onComplete,
			isPaused: false,
			timeLeft: milliseconds,
			percentage: 100,
		};
		setTimers(prevTimers => [...prevTimers, timer]);

		timerRefs.current[id] = setInterval(() => {
			setTimers(prevTimers =>
				prevTimers.map(prevTimer => {
					if (prevTimer.id === id) {
						const timeLeft = prevTimer.timeLeft - 100;
						const percentage = (timeLeft / milliseconds) * 100;

						if (timeLeft <= 0) {
							clearInterval(timerRefs.current[id]);
							onComplete();
							return {
								...prevTimer,
								timeLeft: 0,
								percentage: 0,
								isPaused: true,
							};
						}

						return {
							...prevTimer,
							timeLeft,
							percentage,
						};
					}
					return prevTimer;
				})
			);
		}, 100);
	};

	const togglePlayPause = (id: string): void => {
		setTimers(prevTimers =>
			prevTimers.map(prevTimer => {
				if (prevTimer.id === id) {
					const isPaused = !prevTimer.isPaused;

					if (isPaused) {
						clearInterval(timerRefs.current[id]);
					} else {
						timerRefs.current[id] = setInterval(() => {
							// Lógica do timer aqui
						}, 100);
					}

					return {
						...prevTimer,
						isPaused,
					};
				}
				return prevTimer;
			})
		);
	};

	useEffect(
		() => () => {
			// Limpar os timers quando o componente é desmontado
			Object.values(timerRefs.current).forEach(timer => clearInterval(timer));
		},
		[]
	);

	return [
		timers,
		(action: TimerAction, exec?: () => void, id?: string) => {
			switch (action) {
				case 'ADD_TIMER':
					if (id) {
						console.warn(
							"O parâmetro 'id' não é necessário para adicionar um novo timer."
						);
					}
					addTimer(5000, exec!);
					break;
				case 'TOGGLE_PLAY_PAUSE':
					if (!id) {
						console.error(
							"O parâmetro 'id' é obrigatório para pausar ou reproduzir um timer."
						);
					}
					togglePlayPause(id!);
					break;
				default:
					console.error(`Ação inválida: ${action}`);
			}
		},
	];
};

export default useTimerHook;
