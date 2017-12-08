import React from 'react';
import {GoogleMapLoader, GoogleMap} from 'react-google-maps';

export default (props) => {
	return (
		<div>
			<GoogleMapLoader
				containerElement={
					<div style={{
						height: '200px'
					}}
					/>
				}
				googleMapElement={
					<GoogleMap
						defaultZoom={12}
						defaultCenter={{
							lat: props.lat,
							lng: props.lon
						}}
						defaultOptions={{
							streetViewControl: false,
							scaleControl: false,
							mapTypeControl: false,
							panControl: true,
							zoomControl: true,
							rotateControl: false,
							fullscreenControl: false
						}}
						/>
				}
				/>
		</div>
	);
}