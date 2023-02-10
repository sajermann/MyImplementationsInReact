import Credits from './Credits';
import { OtherComponents } from './OtherComponents';
import { TableOfContents } from './TableOfContents';

export default function Sidebar() {
	return (
		<aside className="flex flex-col w-full gap-3 max-h-full sticky top-3 self-start overflow-y-auto">
			<TableOfContents />
			<OtherComponents />
			<Credits />
		</aside>
	);
}
