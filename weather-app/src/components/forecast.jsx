import React, { Component } from "react";
import { getTemp } from "../scripts/getForecast";

class Forecast extends Component {
  state = {
    temp: [],
  };
  async componentDidMount() {
    this.setState({ temp: await getTemp() });
  }
  render() {
    const temp = this.state.temp;
    return (
      <div>
        {temp.map((t) => (
          <p>{t + " "}</p>
        ))}
      </div>
    );
  }
}

export default Forecast;
