import { Link } from 'react-router-dom';

import { useDarkModeZustand } from '~/Store/UseDarkMode';
import MenuSettings from '../MenuSettings';
import { MenuAccessOptionsMobile } from '../MenuAccessOptionsMobile';
import { Nav } from '../Nav';
// TODO: Arrumar o sticky, no modal ta zuado tbm
export function Header() {
	const { darkMode, toggleDarkMode } = useDarkModeZustand();
	return (
		<Nav className="backdrop-blur-md z-50 sticky top-0">
			<div className="w-full flex flex-wrap justify-between items-center mx-auto">
				<MenuAccessOptionsMobile />
				<Link to="/" className="flex items-center">
					<h1 className="text-xl whitespace-nowrap font-bold">
						My Implementations In React
					</h1>
				</Link>
				<button onClick={toggleDarkMode}>toggleDarkMode</button>
				<MenuSettings />
			</div>
		</Nav>
	);
}
