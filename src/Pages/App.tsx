import { useState } from 'react';
// import { Button, Loading } from '@sajermann/ui-react';
import { Button as Batata2 } from '../Components';
import { Button } from '../../build';
import styles from './styles.module.css';
// import '@sajermann/ui-react/index.css';
import '../../build/index.css';

function App() {
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
			<Batata2
				disabled={isLoading}
				colorStyle="Secondary"
				id="bruno"
				type="button"
				onClick={handle}
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
				Clique aqui
			</Batata2>
			<Button
				disabled={isLoading}
				colorStyle="Warning"
				type="button"
				onClick={handle}
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
				Clique aqui
			</Button>
			<Button
				disabled={isLoading}
				colorStyle="Primary"
				id="bruno"
				type="button"
				onClick={handle}
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
				Clique aqui
			</Button>
			<Button
				disabled={isLoading}
				colorStyle="Success"
				id="bruno"
				type="button"
				onClick={handle}
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
				Clique aqui
			</Button>
		</div>
	);
}

export default App;
