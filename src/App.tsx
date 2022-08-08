import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Poc from './Pages/Poc';
import Routes from './Pages/Routes';

function App() {
	return (
		<BrowserRouter>
			<Poc />
			<Routes />
		</BrowserRouter>
	);
}

export default App;
