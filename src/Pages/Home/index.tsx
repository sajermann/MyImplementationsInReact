import { useState } from 'react';
import { Airplane } from 'phosphor-react';
import { Button } from '../../Components/Button';
import styles from './styles.module.css';
import delay from './delay';

export default function Home() {
	const [newItem, setNewItem] = useState('');
	const [list, setList] = useState(['Bruno', 'Marcia']);
	const [isLoading, setIsLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [failed, setFailed] = useState(false);

	async function handle() {
		setIsLoading(true);
		await delay(3000);
		setIsLoading(false);
		setSuccess(true);
	}

	return (
		<div className={styles.container}>
			<Button
				type="button"
				colorStyle="Primary"
				onClick={() => {
					console.log('s');
				}}
			>
				Clique aqui
			</Button>
			<Button
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
				startIcon={<Airplane />}
			>
				Clique aqui
			</Button>
			<Button
				colorStyle="Warning"
				type="button"
				onClick={handle}
				withFeedback={{
					isLoading: true,
					inSuccess: {
						setSuccess,
						success,
					},
					inFailed: {
						setFailed,
						failed,
					},
				}}
				endIcon={<Airplane />}
			>
				Clique aqui
			</Button>
			<Button
				colorStyle="Success"
				type="button"
				onClick={handle}
				withFeedback={{
					isLoading,
				}}
				style={{ minWidth: 600 }}
			>
				Clique aqui
			</Button>

			<Button
				colorStyle="Success"
				type="button"
				onClick={handle}
				withFeedback={{
					isLoading,
				}}
				endIcon={<Airplane />}
			/>

			<Button
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
				endIcon={<Airplane />}
			/>

			<Button
				colorStyle="Transparent"
				type="button"
				onClick={handle}
				withFeedback={{
					isLoading,
				}}
			>
				<Airplane />
				Clique aqui
			</Button>
		</div>
	);
}
