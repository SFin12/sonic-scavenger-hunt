import React from "react";
import "./bunny.css";
import bunny from "../../Images/bunny.gif";

class Bunny extends React.Component {
  render() {
    return (
      <div className="active">
        <img className="bunny" id="bunny" src={bunny} alt="amy dancing" />
      </div>
    );
  }
}

export default Bunny;
