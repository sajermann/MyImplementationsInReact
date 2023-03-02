import { useParams } from 'react-router-dom';

export function Demonstration({ name }: { name: string }) {
	const t = useParams();
	console.log({ t });
	return <div>{name}</div>;
}
