import { Fragment, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { generateGuid } from '@sajermann/utils/Random';

import { useRoutesMenu } from '~/Hooks/UseRoutesMenu';
import Sidebar from '../Sidebar';

export default function RoutesConfig() {
	const { options } = useRoutesMenu();
	const location = useLocation();

	return (
		<div className="w-full 2xl:max-w-[1330px] p-2 gap-5 flex  my-0 mx-auto">
			<div className="w-full flex flex-col h-full gap-2 flex-1">
				<Suspense fallback={<p>Loading...</p>}>
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
				</Suspense>
			</div>
			{location.pathname !== '/' && (
				<div className="hidden min-w-[18rem] w-72 max-w-[18rem] md:flex">
					<Sidebar />
				</div>
			)}
		</div>
	);
}
