import React, {Component} from 'react';

import Header from '../header/header';
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from '../error-boundry/error-boundry';
import RandomPlanet from '../random-planet/random-planet';
import DummySwapiService from "../../services/dummy-swapi-service";
import {SwapiServiceProvider} from "../swapi-service-context/swapi-service-context";
import {PeoplePage, PlanetsPage, StarshipsPage} from "../pages";

import './app.css';
import 'bootswatch/dist/darkly/bootstrap.min.css';

export default class App extends Component {

	state = {
		swapiService: new SwapiService()
	};

	onServiceChange = () => {
		this.setState( ({swapiService}) =>{
			const Service = swapiService instanceof SwapiService
					? DummySwapiService : SwapiService;
			return {swapiService: new Service()}
		});
	}

	render() {
		const {onServiceChange} = this;

		return (
				<ErrorBoundry>
					<SwapiServiceProvider value={this.state.swapiService}>
						<div className="stardb-app container">
							<Header onServiceChange={onServiceChange}/>
							<RandomPlanet />
							<PeoplePage/>
							<PlanetsPage/>
							<StarshipsPage/>
						</div>
					</SwapiServiceProvider>
				</ErrorBoundry>
		);
	}
}
