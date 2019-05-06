import React from "react";
//import logo from "./logo.svg";
//import "./App.css";

const scaleName = {
  c: "Celisius",
  f: "Fahrenheit"
};

const toCelsius = tempFahrenheit => ((tempFahrenheit - 32) * 5) / 9;

const toFahrenheit = tempCelsius => (tempCelsius * 9) / 5 + 32;

function convertTemp(temperature, func) {
  const temp = parseFloat(temperature);
  if (Number.isNaN(temp)) {
    return "";
  }
  const converted = func(temp);
  const rounded = Math.round(converted * 1000) / 1000;
  return rounded.toString();
}

const BoilingVerdict = ({ temperature }) =>
  temperature >= 100 ? (
    <h2>Water is Boiling</h2>
  ) : (
    <h2>Water is not boiling</h2>
  );

class TempueratureInput extends React.Component {
  constructor(props) {
    super(props);
    this.hanldeChange = this.hanldeChange.bind(this);
  }

  hanldeChange(e) {
    this.props.toTemperatureChange(e.target.value);
  }

  render() {
    return (
      <fieldset>
        <legend>
          Please neter temperature in {scaleName[this.props.scale]}
        </legend>
        <input
          type="text"
          value={this.props.temperature}
          onChange={this.hanldeChange}
        />
      </fieldset>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "", scale: "c" };

    this.handleCelsisu = this.handleCelsisu.bind(this);
    this.handleFahrenheit = this.handleFahrenheit.bind(this);
  }

  handleCelsisu(temperature) {
    this.setState({ temperature, scale: "c" });
  }

  handleFahrenheit(temperature) {
    this.setState({ temperature, scale: "f" });
  }

  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "f" ? convertTemp(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? convertTemp(temperature, toFahrenheit) : temperature;
    console.log(fahrenheit);
    return (
      <div>
        <TempueratureInput
          scale="c"
          temperature={celsius}
          toTemperatureChange={this.handleCelsisu}
        />
        <TempueratureInput
          scale="f"
          temperature={fahrenheit}
          toTemperatureChange={this.handleFahrenheit}
        />
        <BoilingVerdict temperature={temperature} />
      </div>
    );
  }
}

export default App;
