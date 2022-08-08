import { Link, useHistory } from 'react-router-dom';

export default function Poc() {
	const history = useHistory();
	return (
		<header>
			<p>
				<Link to="/A">page A</Link>
			</p>
			<p>
				<Link to="/B">page B</Link>
			</p>
			<p>
				{/* <Link to="/C">page C</Link> */}
				<button type="button" onClick={() => history.push('/C')}>
					Ir pra C
				</button>
			</p>
		</header>
	);
}
