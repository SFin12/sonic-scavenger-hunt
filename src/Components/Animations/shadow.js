import React, { Component } from "react";
import "./shadow.css";
import shadow from "../../Images/shadow.gif";

class Shadow extends Component {
  render() {
    return (
      <div className="active">
        <img className="shadow" id="shadow" src={shadow} alt="amy dancing" />
      </div>
    );
  }
}

export default Shadow;
