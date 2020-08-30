import React from 'react';
import './css/index.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/universal/Navbar';
import Footer from './components/universal/Footer';
import HomePage from './components/HomePage';

const App = () => {
	return (
		<Switch>
			<Route exact path='/'>
				<Navbar />
				<HomePage />
				<Footer />
			</Route>
		</Switch>
	);
};

export default App;
