import Accordion from './components/Accordion';
import { GlobalStyles } from './GlobalStyles.tsx';
import Card from './components/Card';

function App() {
	return (
		<>
			<GlobalStyles />
			<div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 10 }}>
				<h2>Accordions</h2>
				<Accordion closedFixed>
					<Accordion.Header>HEADER - ACCORDION FECHADO</Accordion.Header>
				</Accordion>
				<Accordion openFixed>
					<Accordion.Header>HEADER</Accordion.Header>
					<Accordion.Content>Accordion Aberto</Accordion.Content>
				</Accordion>

				<hr />
				<Card title={'Testando Card'}>testando</Card>
			</div>
		</>
	);
}

export default App;
