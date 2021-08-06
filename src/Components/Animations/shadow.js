import React from "react";
import "./shadow.css";
import shadow from "../../Images/shadow.gif";

class Shadow extends React.Component {
  render() {
    return (
      <div className="active">
        <img className="shadow" id="shadow" src={shadow} alt="amy dancing" />
      </div>
    );
  }
}

export default Shadow;
