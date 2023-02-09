import { Routes, Route } from 'react-router-dom';
import { generateGuid } from '@sajermann/utils/Random';

import { useRoutesMenu } from '~/Hooks/UseRoutesMenu';
import { Fragment } from 'react';
import Footer from '../Footer';
import Sidebar from '../Sidebar';

export default function RoutesConfig() {
	const { options } = useRoutesMenu();
	return (
		<div className="w-full 2xl:max-w-[1330px] sm: p-2 gap-5 flex  my-0 mx-auto">
			<div className="w-full flex flex-col gap-2 flex-1">
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
			<div className="hidden w-72 md:flex ">
				<Sidebar />
			</div>
		</div>
	);
}
