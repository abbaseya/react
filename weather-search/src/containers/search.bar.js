import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {DropdownButton, MenuItem} from 'react-bootstrap';

import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			city: '',
			country: 'us'
		};
		this.onSubmit = this.onSubmit.bind(this);
		this.onChangeCity = this.onChangeCity.bind(this);
		this.onChangeCountry = this.onChangeCountry.bind(this);
	}
	onSubmit(e) {
		e.preventDefault();
		this.props.fetchWeather(this.state.city, this.state.country);
		this.setState({
			city: ''
		});
	}
	onChangeCity(e) {
		this.setState({
			city: e.target.value
		});
	}
	onChangeCountry(e) {
		this.setState({
			country: e.target.getAttribute('data-code')
		});
	}
	render() {
		return (
			<form onSubmit={this.onSubmit} className="input-group">
				<span className="input-group-btn">
					<DropdownButton id="country" title={this.state.country.toUpperCase()}>
						<MenuItem href="#" data-code="au" onClick={this.onChangeCountry}>AU</MenuItem>
						<MenuItem href="#" data-code="ca" onClick={this.onChangeCountry}>CA</MenuItem>
						<MenuItem href="#" data-code="cn" onClick={this.onChangeCountry}>CN</MenuItem>
						<MenuItem href="#" data-code="de" onClick={this.onChangeCountry}>DE</MenuItem>
						<MenuItem href="#" data-code="fr" onClick={this.onChangeCountry}>FR</MenuItem>
						<MenuItem href="#" data-code="eg" onClick={this.onChangeCountry}>EG</MenuItem>
						<MenuItem href="#" data-code="es" onClick={this.onChangeCountry}>ES</MenuItem>
						<MenuItem href="#" data-code="gb" onClick={this.onChangeCountry}>GB</MenuItem>
						<MenuItem href="#" data-code="it" onClick={this.onChangeCountry}>IT</MenuItem>
						<MenuItem href="#" data-code="jp" onClick={this.onChangeCountry}>JP</MenuItem>
						<MenuItem href="#" data-code="ru" onClick={this.onChangeCountry}>RU</MenuItem>
						<MenuItem href="#" data-code="us" onClick={this.onChangeCountry}>US</MenuItem>
					</DropdownButton>
				</span>
				<input
					className="form-control"
					placeholder="Get a five-day forcast in your favorite cities"
					value={this.state.city}
					onChange={this.onChangeCity}
					/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-default">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatch(dispatch) {
	return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatch)(SearchBar);