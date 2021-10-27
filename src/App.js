import Header from './compos/Header';
import './styles/main.css';
import Home from './Screens/Home';
import { Route, Switch } from 'react-router';
import Destination from './Screens/Destination';
import Crew from './Screens/Crew';
import Tech from './Screens/Tech';

function App() {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/destination'>
					<Destination />
				</Route>
				<Route exact path='/crew'>
					<Crew />
				</Route>
				<Route exact path='/technology'>
					<Tech />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
