import React from "react";
import "./tails.css";
import tails from "../../Images/tails.gif";

class Tails extends React.Component {
  render() {
    return (
      <div className="active">
        <img className="tails" id="tails" src={tails} alt="amy dancing" />
      </div>
    );
  }
}

export default Tails;
