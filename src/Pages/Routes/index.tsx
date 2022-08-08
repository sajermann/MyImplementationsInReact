import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import PageA from '../PageA';
import PageB from '../PageB';
import PageC from '../PageC';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact>
				<Home />
			</Route>
			<Route path="/A" exact>
				<PageA />
			</Route>
			<Route path="/B" exact>
				<PageB />
			</Route>
			<Route path="/C" exact>
				<PageC />
			</Route>
		</Switch>
	);
}
