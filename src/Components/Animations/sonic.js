import React, { Component } from "react";
import "./sonic.css";
import sonicSpeed from "../../Images/sonicSpeed.gif";

class Sonic extends Component {
  render() {
    return (
      <div className="active">
        <img
          className="sonic running"
          id="sonic"
          src={sonicSpeed}
          alt="sonic running"
        />
      </div>
    );
  }
}

export default Sonic;
