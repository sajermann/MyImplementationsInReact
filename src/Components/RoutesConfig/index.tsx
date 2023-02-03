import { Routes, Route } from 'react-router-dom';
import { generateGuid } from '@sajermann/utils/Random';

import { useRoutesMenu } from '~/Hooks/UseRoutesMenu';
import Footer from '../Footer';
import Sidebar from '../Sidebar';

export default function RoutesConfig() {
	const { options } = useRoutesMenu();
	return (
		<div className="flex max-w-[1330px] p-2 gap-5 my-0 mx-auto">
			<div className="flex flex-col min-w-[495px]">
				<Routes>
					{options.map(item => (
						<Route
							key={generateGuid()}
							path={item.path}
							element={item.element}
						/>
					))}
				</Routes>
				<Footer />
			</div>
			<Sidebar />
		</div>
	);
}
