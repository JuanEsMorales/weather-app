export const getWeatherFrom = async (query = 'Buenos Aires') => {
	const url = `/api/test?q=${query}`
  return fetch(url).then(res => res.json())
};
