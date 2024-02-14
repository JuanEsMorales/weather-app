import { API_KEY } from '../../../../apiKey.js';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
export async function GET(event) {
  const { searchParams } = event.url
  const query = searchParams.get('q')

  console.log(event.url.searchParams);
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`;
	const response = await fetch(url, options);
	const result = await response.json();
	const { location, current } = result;
	const { country, localtime, name } = location;
	const { condition, humidity, feelslike_c, temp_c, wind_kph, wind_dir, is_day } = current;
	const { icon, text } = condition;
  const body = {
		country,
		localtime,
		localtionName: name,
		humidity,
		feelsLike: feelslike_c,
		temperature: temp_c,
		windSpeed: wind_kph,
		windDir: wind_dir,
		conditionIcon: icon,
		conditionText: text,
		isDay: is_day
	};
  return new Response(JSON.stringify(body))
}