<script>
  import { getWeatherFrom } from '../services/weather'
  import WeatherFooter from '../components/weather-footer.svelte';
	import WeatherIcon from '../components/weather-icon.svelte';
  const weatherPromise = getWeatherFrom('Barcelona')
  
</script>
<section>
  {#await weatherPromise then weather}
    <h1>{weather.localtionName}</h1>
    <h2>{weather.temperature}°</h2>
    <h3>{weather.conditionText}</h3>
    <WeatherFooter />
    <WeatherIcon icon={weather.conditionIcon} condition={weather.conditionText} />
  {/await}
</section>

<style>
  h1 {
    font-weight: 300;
    color: #333;
    text-transform: uppercase;
  }
  h2 {
    font-weight: 300;
    font-size: 120px;
    color: #333;
  }
  h3 {
    font-weight: 600;
    position: absolute;
    top: 25px;
    transform: rotate(-90deg);
    right: 0px;
  }
  section {
    padding: 16px;
  }
</style>