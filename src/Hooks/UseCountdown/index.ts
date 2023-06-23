import { useEffect, useRef, useState } from 'react';

type CountdownProps = {
	milliseconds: number;
	onComplete: () => void;
};

const useCountdown = ({ milliseconds, onComplete }: CountdownProps) => {
	const intervalRef = useRef<NodeJS.Timeout>();
	const [timeLeft, setTimeLeft] = useState(milliseconds);
	const [percentage, setPercentage] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const initialMilliseconds = useRef(milliseconds);
	const isCompleteRef = useRef(false);

	const pauseCountdown = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}
		setIsPaused(true);
	};

	const resumeCountdown = () => {
		setIsPaused(false);
	};

	const toggleCountdown = () => {
		if (isPaused) {
			resumeCountdown();
		} else {
			pauseCountdown();
		}
	};

	useEffect(() => {
		setTimeLeft(milliseconds);
		initialMilliseconds.current = milliseconds;
		isCompleteRef.current = false;
	}, [milliseconds]);

	useEffect(() => {
		if (!isPaused) {
			intervalRef.current = setInterval(() => {
				setTimeLeft(prevTimeLeft => {
					const newTimeLeft = prevTimeLeft - 10;
					const newPercentage =
						((initialMilliseconds.current - newTimeLeft) /
							initialMilliseconds.current) *
						100;
					setPercentage(newPercentage);

					if (newTimeLeft <= 0) {
						clearInterval(intervalRef.current);
						setTimeLeft(0);
						if (!isCompleteRef.current) {
							onComplete();
							isCompleteRef.current = true;
						}
					}

					return newTimeLeft;
				});
			}, 10);
		} else {
			clearInterval(intervalRef.current);
		}

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [isPaused, onComplete]);

	return { timeLeft, percentage, isPaused, toggleCountdown };
};

export default useCountdown;
