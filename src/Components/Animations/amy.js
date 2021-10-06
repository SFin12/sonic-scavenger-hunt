import React, { Component } from "react";
import "./amy.css";
import amyRose from "../../Images/amyRose.gif";

class Amy extends Component {
  render() {
    return (
      <div className="active">
        <img className="amy running" id="amy" src={amyRose} alt="amy dancing" />
      </div>
    );
  }
}

export default Amy;
