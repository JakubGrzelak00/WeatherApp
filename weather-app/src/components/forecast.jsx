import axios from "axios";
import React, { Component } from "react";

class Forecast extends Component {
  async componentDidMount() {
    const response = await axios.get(
      "http://api.weatherapi.com/v1/current.json?key=e81c801b8aab4b40b48142318211710&q=Lodz&aqi=no"
    );
    console.log(response.data.current);
  }
  render() {
    return <div></div>;
  }
}

export default Forecast;
