import { useLocation } from 'react-router-dom';
import PrevAndNext from '../PrevAndNext';
import TableOfContents from '../TableOfContents';

export default function Sidebar() {
	const location = useLocation();

	if (location.pathname === '/') {
		return null;
	}

	return (
		<aside className="flex flex-col w-full gap-3 max-h-full sticky top-3 self-start overflow-y-auto">
			<TableOfContents />
			<PrevAndNext />
		</aside>
	);
}
