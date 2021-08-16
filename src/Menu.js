import React from "react";
import "./Menu.css";

export default class Menu extends React.Component {

  updateSign = (e) => {
    return this.props.updateSign(e.target.value);
  };
  

  render() {
    return (
      <select onChange={this.updateSign}>
        <option value="Capricorn">Capricorn</option>
        <option value="Aquarius">Aquarius</option>
        <option value="Pisces">Pisces</option>
        <option value="Aries">Aries</option>
        <option value="Taurus">Taurus</option>
        <option value="Gemini">Gemini</option>
        <option value="Cancer">Cancer</option>
        <option value="Leo">Leo</option>
        <option value="Virgo">Virgo</option>
        <option value="Aquarius">Libra</option>
        <option value="Aquarius">Scorpio</option>
        <option value="Aquarius">Saggitarius</option>
      </select>
    );
  }
}
