import React from 'react';
import VideoItem from './video.item';

const VideoPlaylist = (props) => {
	const items = props.videos.map(v => {
		return <VideoItem
			onSelect={props.onSelect}
			key={v.etag}
			video={v}
			/>;
	});
	return (
		<ul className="col-md-4 list-group">
			{items}
		</ul>
	);
}

export default VideoPlaylist;