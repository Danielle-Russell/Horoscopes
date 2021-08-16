import "./App.css";
import React from "react";
import Menu from "./Menu";
import Results from "./Results";

class App extends React.Component {
  state = {
    sign: "Capricorn",
    json: {},
  };

  updateSign = (sign) => {
    this.setState({
      sign: sign,
    });
  };

  fetchData() {
    const URL = `https://aztro.sameerkumar.website/?sign=${this.state.sign}&day=today`;
    fetch(URL, { method: "POST" })
      .then((response) => response.json())
      .then((json) => this.setState({ json }));
  }

  componentDidUpdate() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        <h1>Daily Horoscope</h1>
        <div className="three">
          <div>Lucky Number: {this.state.json.lucky_number}</div>

          <div>
            Select Your Star Sign:
            <Menu updateSign={this.updateSign} />
          </div>
          <div>Lucky Time: {this.state.json.lucky_time}</div>
        </div>
        <Results results={this.state.json} />
      </div>
    );
  }
}

export default App;
