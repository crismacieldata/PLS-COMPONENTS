import { GlobalStyles } from './GlobalStyles.tsx';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
	return (
		<>
			<GlobalStyles />
			<div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 10 }}>
				<Header />
				<hr />
				<Menu />
			</div>
		</>
	);
}

export default App;
