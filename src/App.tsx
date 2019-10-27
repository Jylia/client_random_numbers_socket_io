import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import './App.css';
import { history } from './History';
import LineChartPage from './LineChart/LineChartPage';
import HomePage from './Home/HomePage';
import Layout from './Layout/Layout';

const App: React.FC = () => {
  	return (
		<div className="App">
			<Layout
				history={history}
			>
				<Router history={history}>
					<Switch>
						<Route exact={true} path='/' component={HomePage} />
						<Route exact={true} path="/line-chart" component={LineChartPage} />
					</Switch>
				</Router>
			</Layout>
    	</div>
  	);
}

export default App;
