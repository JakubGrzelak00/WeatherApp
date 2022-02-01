import React, { Component } from "react";
import { getTemp } from "../scripts/getForecast";
import { getLocation } from "../scripts/getForecast";
import Card from "./card";
import Input from "./input";

class Forecast extends Component {
  state = {
    temp: [],
    city: "",
    location: "Choose a City",
  };

  async componentDidMount() {
    const temp = await getTemp(this.state.city);
    this.setState({ temp });
  }

  handleChange = (value) => {
    this.setState({ city: value });
  };

  handleSearch = async () => {
    const temp = await getTemp(this.state.city);
    const location = await getLocation(this.state.city);
    this.setState({ temp });
    this.setState({ location });
  };

  render() {
    const { temp } = this.state;
    return (
      <div className="d-flex flex-column justify-content-center">
        <div style={{ width: "60%", alignSelf: "center" }}>
          <Input
            onSearch={this.handleSearch}
            city={this.state.city}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ alignSelf: "center", marginTop: "5%" }}>
          <p>{this.state.location}</p>
        </div>
        <div className="d-flex flex-row justify-content-center flex-wrap">
          {temp.map((position) => (
            <Card
              key={position[0]}
              date={position[0]}
              temp={position[1]}
              chanceOfRain={position[2]}
            ></Card>
          ))}
        </div>
      </div>
    );
  }
}

export default Forecast;
