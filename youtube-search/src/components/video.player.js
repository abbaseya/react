import React from 'react';

const VideoPlayer = ({video}) => {
	if (!video) {
		return (
			<div className="col-md-8 video-detail">
				<i className="fa fa-circle-o-notch fa-spin fa-fw"></i> loading ..
			</div>
		);
	}
	const id = video.id.videoId;
	const url = `https://youtube.com/embed/${id}`;
	return (
		<div className="col-md-8 video-detail">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<h5>{video.snippet.title}</h5>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
}

export default VideoPlayer;