import axios from 'axios';

const API_KEY = '84bcc623df04ae60276627ccec1227c9';
const API_ENDPOINT = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, country='us') {
	const url = `${API_ENDPOINT}&q=${city},${country}`;
	const promise = axios.get(url);
	return {
		type: FETCH_WEATHER,
		payload: promise
	}
}