import React from "react";
import "./amy.css";
import amyRose from "../../Images/amyRose.gif";

class Amy extends React.Component {
  render() {
    return (
      <div className="active">
        <img className="amy running" id="amy" src={amyRose} alt="amy dancing" />
      </div>
    );
  }
}

export default Amy;
