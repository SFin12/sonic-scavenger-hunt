import React, { Component } from "react";
import "./knuckles.css";
import knuckles from "../../Images/knuckles.gif";

class Knuckles extends Component {
  render() {
    return (
      <div className="active">
        <img
          className="knuckles"
          id="knuckles"
          src={knuckles}
          alt="amy dancing"
        />
      </div>
    );
  }
}

export default Knuckles;
