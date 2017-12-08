import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search.bar';
import VideoPlaylist from './components/video.playlist';
import VideoPlayer from './components/video.player';

const API_KEY = 'AIzaSyBK4bFJb52gIWZUS23y-Rd7O54zZEDk4M0';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};
		this.search('ahmed abbas folio');
	}
	search(keyword) {
		YTSearch({
			key: API_KEY,
			term: keyword
		}, (res) => {
			this.setState({
				videos: res,
				selectedVideo: res[0]
			});
		});
	}
	render() {
		const search = _.debounce((keyword) => this.search(keyword), 300);
		return (
			<div>
				<SearchBar onSearch={search} />
				<VideoPlayer video={this.state.selectedVideo} />
				<VideoPlaylist
					onSelect={selected => this.setState({
						selectedVideo: selected
					})}
					videos={this.state.videos}
					/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
