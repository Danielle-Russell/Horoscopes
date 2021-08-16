import React from "react";
import "./results.css";

export default class Results extends React.Component {
  render() {
    const results = this.props.results;
    return (
      <div>
        <div className="first-row">
          <div className="results">Date Range: {results.date_range}</div>
          <div id="desc" className="results">
            Mood: {results.mood}
          </div>
          <div className="results">Color: {results.color}</div>
        </div>
        <div className="second-row">
        <div className="results">{results.description}</div>
        <div id="circle" className="results">Soulmate: <span>{results.compatibility}</span></div>
        </div>
      </div>
    );
  }
}
