import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		};
	}
	render() {
		return (
			<div className="search-bar col-md-8">
				<input
					value={this.state.term}
					onChange={e => this.onChange(e.target.value)}
					placeholder="Enter Keyword .."
					className="form-control"
				 	/>
			</div>
		);
	}
	onChange(keyword) {
		this.setState({
			term: keyword
		});
		this.props.onSearch(keyword);
	}
}

export default SearchBar;