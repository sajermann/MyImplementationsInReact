import { Link } from 'react-router-dom';

import MenuSettings from '../MenuSettings';
import { MenuAccessOptionsMobile } from '../MenuAccessOptionsMobile';
import { Nav } from '../Nav';

export function Header() {
	return (
		<Nav>
			<div className="w-full flex flex-wrap justify-between items-center mx-auto">
				<MenuAccessOptionsMobile />
				<Link to="/" className="flex items-center">
					<h1 className="text-xl whitespace-nowrap font-bold">
						My Implementations In React
					</h1>
				</Link>
				<MenuSettings />
			</div>
		</Nav>
	);
}
