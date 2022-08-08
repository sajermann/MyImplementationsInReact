import { useEffect, useState } from 'react';
import delay from './delay';

export default function PageA() {
	const [loading, setLoading] = useState(true);

	async function load() {
		await delay(3000);
		setLoading(false);
	}
	useEffect(() => {
		load();
	}, []);
	return loading ? <p>Carregando...</p> : <p>Página A</p>;
}
