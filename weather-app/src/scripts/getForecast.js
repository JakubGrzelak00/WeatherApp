import axios from "axios";

export async function getTemp() {
  const URL =
    "http://api.weatherapi.com/v1/forecast.json?key=e81c801b8aab4b40b48142318211710&q=Lodz&days=4";
  let temp = [];
  const response = await axios.get(URL);
  temp[0] = response.data.current.temp_c;
  for (let i = 1; i < 4; i++) {
    temp[i] = response.data.forecast.forecastday[i - 1].day.maxtemp_c;
  }
  console.log(temp);
  return temp;
}
