import React, { Component } from "react";
import "./blaze.css";
import blaze from "../../Images/blaze.gif";

class Blaze extends Component {
  render() {
    return (
      <div className="active">
        <img className="blaze" id="blaze" src={blaze} alt="amy dancing" />
      </div>
    );
  }
}

export default Blaze;
