import React, {Component} from "react";

import Row from "../row/row";
import {PlanetList} from "../sw-components/item-lists";
import PlanetDetails from "../sw-components/planet-details";

class PlanetsPage extends Component {

	state = {
		selectedItem: null
	};

	onItemSelected = (selectedItem) => this.setState({selectedItem});

	render() {
		return (
				<Row left={<PlanetList onItemSelected={this.onItemSelected} />}
						 right={<PlanetDetails itemId={this.state.selectedItem} />} />
		);
	}
};

export default PlanetsPage;