import React, { Component } from "react";
import "./sonic.css";
import sonicSpeed from "../../Images/sonicSpeed.gif";

class Sonic extends Component {
  render() {
    return (
      <div className="running-box">
        <img
          className="sonic"
          id="sonic"
          src={sonicSpeed}
          alt="sonic running"
        />
      </div>
    );
  }
}

export default Sonic;
