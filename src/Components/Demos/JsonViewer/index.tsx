import { JsonViewer } from '~/Components/JsonViewer';

export function JsonViewerDemo() {
	return (
		<JsonViewer
			value={[
				{
					id: 1,
					name: 'Bartholome',
					isActive: false,
				},
			]}
		/>
	);
}
