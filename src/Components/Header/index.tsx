import { Link } from 'react-router-dom';

import MenuSettings from '../MenuSettings';
import MenuAccessOptions from '../MenuAccessOptions';
import { Nav } from '../Nav';

export default function Header() {
	return (
		<Nav>
			<div className="w-full flex flex-wrap justify-between items-center mx-auto">
				<MenuAccessOptions />
				<Link to="/" className="flex items-center !bg-dark-700">
					<h1 className="text-xl whitespace-nowrap font-bold text-white">
						My Implementations In React
					</h1>
				</Link>
				<MenuSettings />
			</div>
		</Nav>
	);
}
