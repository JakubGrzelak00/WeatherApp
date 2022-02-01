import axios from "axios";

async function getForecast(city) {
  const URL =
    "http://api.weatherapi.com/v1/forecast.json?key=e81c801b8aab4b40b48142318211710&q=" +
    city +
    "&days=3";

  const response = await axios.get(URL);

  return response;
}

export async function getTemp(city) {
  if (city === "") {
    city = "New York";
  }
  let response = [];
  try {
    response = await getForecast(city);
  } catch (error) {
    console.log(error.message);
    if (error.response.status === 400) {
      alert("City Not Found, Try Using Only English Letters");
    }
    return;
  }

  let temp = [];
  const forecast = response.data.forecast.forecastday;
  for (let i = 0; i < 3; i++) {
    temp[i] = [
      forecast[i].date,
      forecast[i].day.maxtemp_c,
      forecast[i].day.daily_chance_of_rain,
      response.data.location.name + ", " + response.data.location.country,
    ];
  }
  return temp;
}

export async function getLocation(city) {
  const response = await getForecast(city);

  const location =
    response.data.location.name + ", " + response.data.location.country;
  return location;
}
