import React, { Component } from "react";
import "./underwear.css";
import underwear from "../../Images/underwear.jpg";

class Underwear extends Component {
  render() {
    return (
      <div className="active">
        <img
          className="underwear"
          id="underwear"
          src={underwear}
          alt="amy dancing"
        />
      </div>
    );
  }
}

export default Underwear;
