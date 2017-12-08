import React from 'react';

const VideoItem = ({video, onSelect}) => {
	const thumbnail = video.snippet.thumbnails.default.url;
	return (
		<li className="list-group-item" onClick={e => onSelect(video)}>
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={thumbnail} />
				</div>
				<div className="media-body">
					<div className="media-heading">
						{video.snippet.title}
					</div>
				</div>
			</div>
		</li>
	);
}

export default VideoItem;