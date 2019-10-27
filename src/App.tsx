import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import './App.css';
import { history } from './History';
import LineChartPage from './LineChart/LineChartPage';
import HomePage from './Home/HomePage';
import Layout from './Layout/Layout';
import { UrlConstants } from './constants/UrlConstants';
import BarChartPage from './BarChart/BarChartPage';

const App: React.FC = () => {
  	return (
		<div className="App">
			<Layout
				history={history}
			>
				<Router history={history}>
					<Switch>
						<Route exact={true} path={UrlConstants.home} component={HomePage} />
						<Route exact={true} path={UrlConstants.lineChart} component={LineChartPage} />
						<Route exact={true} path={UrlConstants.barChart} component={BarChartPage} />
					</Switch>
				</Router>
			</Layout>
    	</div>
  	);
}

export default App;
