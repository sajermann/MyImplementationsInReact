import { useState } from 'react';
import { Button } from '../components';
import Drawer from '../components/Drawer';
import Header from '../ComponentsInternal/Header';
import { DarkModeProvider } from '../Hooks/DarkMode';
import styles from './styles.module.css';

// import { Button, Loading } from '@sajermann/ui-react';
// import '@sajermann/ui-react/index.css';
// import '../../build/index.css';

function App() {
	return (
		<DarkModeProvider>
			<Header />
		</DarkModeProvider>
	);
}

export default App;
