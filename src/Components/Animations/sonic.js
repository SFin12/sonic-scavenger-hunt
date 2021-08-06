import React from "react";
import "./sonic.css";
import sonicSpeed from "../../Images/sonicSpeed.gif";

class Sonic extends React.Component {
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
