import React from "react";
import "./results.css";

export default class Results extends React.Component {
  render() {
    const results = this.props.results;
    return (
      <div>
          <div className="results">
              {results.current_date}
          </div>
          <div className="results">
              {results.date_range}
          </div>
        <div id="desc" className="results">
            {results.description}
        </div>
        <div className="results">
            {results.compatibility}
        </div>
        <div className="results">{results.color}</div>
        <div className="results">
              {results.lucky_number}
          </div>
          <div className="results">
              {results.lucky_time}
          </div>
          <div className="results">
              {results.mood}
          </div>
      </div>
    );
  }
}
