import { Routes, Route } from 'react-router-dom';
import { generateGuid } from '@sajermann/utils/Random';

import { useRoutesMenu } from '~/Hooks/UseRoutesMenu';
import { Fragment } from 'react';
import Footer from '../Footer';
import Sidebar from '../Sidebar';

export default function RoutesConfig() {
	const { options } = useRoutesMenu();
	return (
		<div className="flex max-w-[1330px] p-2 gap-5 my-0 mx-auto">
			<div className="flex flex-col w-full gap-2">
				<Routes>
					{options.map(route => (
						<Fragment key={generateGuid()}>
							<Route
								key={generateGuid()}
								path={route.path}
								element={route.element}
							/>
							{route.subs &&
								route.subs.map(subMenu => (
									<Route
										key={generateGuid()}
										path={subMenu.path}
										element={subMenu.element}
									/>
								))}
						</Fragment>
					))}
				</Routes>
				<Footer />
			</div>
			<Sidebar />
		</div>
	);
}
