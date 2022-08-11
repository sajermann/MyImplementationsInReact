import { useState } from 'react';
import { Button } from '../components';
import Drawler from '../components/Drawler';
import styles from './styles.module.css';

// import { Button, Loading } from '@sajermann/ui-react';
// import '@sajermann/ui-react/index.css';
// import '../../build/index.css';

function App() {
	const [isOpen, setIsOpen] = useState(false);
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
				onClick={() => setIsOpen(true)}
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
			<Drawler
				// disabledSaveButton={selectedRows.length === 0}
				side="full"
				isOpen={isOpen}
				setIsOpen={e => setIsOpen(e)}
				title="Listagem"
				isLoading={isLoading}
				onSave={handleSave}
				inSuccess={{
					success,
					setSuccess,
					setIsOpen,
				}}
				inFailed={{
					failed,
					setFailed,
				}}
			>
				<div>Bruno</div>
			</Drawler>
		</div>
	);
}

export default App;
