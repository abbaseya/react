import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesSpots, SparklinesBars} from 'react-sparklines';

function average(data) {
	return _.round(_.sum(data)/data.length);
}

export default (props) => {
	return (
		<div>
			<Sparklines width={180} height={120} data={props.data}>
				{/*<SparklinesLine color={props.color} />*/}
				<SparklinesReferenceLine type="avg" />
				{/*<SparklinesSpots />*/}
				<SparklinesBars style={{ fill: props.color, fillOpacity: ".4" }} />
			</Sparklines>
			<div>{average(props.data)} {props.units}</div>
		</div>
	);
}