import { useState } from 'react';
import { Button } from '../components';
import Drawler from '../components/Drawler';
import styles from './styles.module.css';

// import { Button, Loading } from '@sajermann/ui-react';
// import '@sajermann/ui-react/index.css';
// import '../../build/index.css';

function App() {
	const [isOpenTop, setIsOpenTop] = useState(false);
	const [isOpenLeft, setIsOpenLeft] = useState(false);
	const [isOpenRight, setIsOpenRight] = useState(false);
	const [isOpenFull, setIsOpenFull] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [failed, setFailed] = useState(false);
	const [darkMode, setDarkMode] = useState(false);

	function delay(delayMs: number): Promise<void> {
		return new Promise(resolve => {
			setTimeout(() => resolve(), delayMs);
		});
	}

	async function handle() {
		setIsLoading(true);
		await delay(3000);
		setIsLoading(false);
		setSuccess(true);
	}
	async function handleSave() {
		setIsLoading(true);
		await delay(1001);

		setIsLoading(false);
		setSuccess(true);
	}

	return (
		<div
			style={{
				background: darkMode ? 'black' : 'white',
				width: '98vw',
				height: '98vh',
				margin: 'auto',
				gap: '10px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<button type="button" onClick={() => setDarkMode(!darkMode)}>
				Dark Mode
			</button>
			<Button
				disabled={isLoading}
				colorStyle="Primary"
				id="bruno"
				type="button"
				onClick={() => setIsOpenLeft(true)}
				withFeedback={{
					isLoading,
					inSuccess: {
						setSuccess,
						success,
					},
					inFailed: {
						setFailed,
						failed,
					},
				}}
			>
				Open Left
			</Button>
			<Button
				disabled={isLoading}
				colorStyle="Secondary"
				id="bruno"
				type="button"
				onClick={() => setIsOpenRight(true)}
				withFeedback={{
					isLoading,
					inSuccess: {
						setSuccess,
						success,
					},
					inFailed: {
						setFailed,
						failed,
					},
				}}
			>
				Open Right
			</Button>
			<Button
				disabled={isLoading}
				colorStyle="Success"
				id="bruno"
				type="button"
				onClick={() => setIsOpenFull(true)}
				withFeedback={{
					isLoading,
					inSuccess: {
						setSuccess,
						success,
					},
					inFailed: {
						setFailed,
						failed,
					},
				}}
			>
				Open Full
			</Button>
			<Button
				colorStyle="Warning"
				id="bruno"
				type="button"
				onClick={() => setIsOpenTop(true)}
			>
				Open Top
			</Button>
			<Drawler
				side="left"
				percentage={10}
				isOpen={isOpenLeft}
				setIsOpen={e => setIsOpenLeft(e)}
			>
				<div>left</div>
			</Drawler>
			<Drawler
				side="right"
				percentage={30}
				isOpen={isOpenRight}
				setIsOpen={e => setIsOpenRight(e)}
				disableBackdrop
			>
				<div>left</div>
			</Drawler>
			<Drawler
				side="bottom"
				percentage={10}
				isOpen={isOpenFull}
				disableEsc
				setIsOpen={e => setIsOpenFull(e)}
			>
				<div>
					<Button
						disabled={isLoading}
						colorStyle="Success"
						id="ss"
						type="button"
						onClick={() => setIsOpenFull(false)}
					>
						Close Full
					</Button>
				</div>
			</Drawler>
			<Drawler
				side="top"
				disableClickOnBackdrop
				percentage={90}
				isOpen={isOpenTop}
				setIsOpen={e => setIsOpenTop(e)}
			>
				<div style={{ backgroundColor: 'black', height: '100%' }}>
					<Button
						disabled={isLoading}
						colorStyle="Success"
						id="ss"
						type="button"
						onClick={() => setIsOpenTop(false)}
					>
						Close Full
					</Button>
				</div>
			</Drawler>
		</div>
	);
}

export default App;
