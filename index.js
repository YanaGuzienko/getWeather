const ref = document.querySelector('#root');

class Weather {
  constructor() {}

  async fetch(city) {
    try {
      const response = await fetch(`https://goweather.herokuapp.com/weather/${city}`);
      if (!response.ok) throw response.status;
      const result = await response.json();

      return result.temperature;
    } catch (error) {
      console.log('error', error);
    }
  }
}

const weather = new Weather();

async function getWeather(city) {
  try {
    const result = await weather.fetch(city);

    ref.insertAdjacentHTML('afterbegin', `Температура воздуха в городе ${city} ${result}`);
    return `Температура воздуха в городе ${city} - ${result}`;
  } catch (error) {
    console.log(error);
  }
}

getWeather('Kyiv');
