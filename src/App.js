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

  componentDidUpdate () {
    this.fetchData();
  }

  render() {
    return (
      <div>
        <h1>Daily Horoscope</h1>
        <Menu updateSign={this.updateSign} />
        <Results results={this.state.json} />
      </div>
    );
  }
}

export default App;
