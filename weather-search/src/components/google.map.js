import React from 'react';
import {GoogleMapLoader, GoogleMap} from 'react-google-maps';

export default (props) => {
	return (
		<div>
			<GoogleMapLoader
				containerElement={
					<div style={{
						height: '130px'
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
				<div className="text-primary"><strong>{props.city}</strong></div>
		</div>
	);
}