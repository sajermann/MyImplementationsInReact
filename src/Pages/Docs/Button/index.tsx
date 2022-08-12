import { useState } from 'react';
import { Button } from '../../../components';

export default function ButtonDocs() {
	const [isLoading, setIsLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [failed, setFailed] = useState(false);

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
		<div>
			<Button
				disabled={isLoading}
				colorStyle="Transparent"
				id="bruno"
				type="button"
				onClick={() => handleSave()}
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
				Save
			</Button>
		</div>
	);
}
