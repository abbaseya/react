import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google.map';

const queryString = require('query-string');

class WeatherList extends Component {
	renderWeather(payload) {
		const parsed = queryString.parse(payload.request.responseURL);
		const geo = decodeURIComponent(parsed.q).split(',');
		const city = geo[0];
		const country = geo[1];
		const data = payload.data;
		if (!data) {
			return (
				<tr key={_.uniqueId()}>
					<td colSpan="4">
						<span className="text-danger">City "{city}" not found in "{country.toUpperCase()}"!</span>
					</td>
				</tr>
			);
		}
		const name = data.city.name;
		const {lat, lon} = data.city.coord;
		const temps = _.map(data.list.map(weather => weather.main.temp), (temp) => temp-273);
		const pressures = data.list.map(weather => weather.main.pressure);
		const humidities = data.list.map(weather => weather.main.humidity);
		return (
			<tr key={_.uniqueId()}>
				<td>
					<GoogleMap lat={lat} lon={lon} city={name} />
				</td>
				<td>
					<Chart data={temps} color="orange" units="°C" />
				</td>
				<td>
					<Chart data={pressures} color="green" units="hPa" />
				</td>
				<td>
					<Chart data={humidities} color="black" units="%" />
				</td>
			</tr>
		);
	}
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temprature (°C)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapState({weather}) {
	return {weather};
}

export default connect(mapState)(WeatherList);