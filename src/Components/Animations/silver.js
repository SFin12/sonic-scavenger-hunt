import React from "react";
import "./silver.css";
import silver from "../../Images/silver.gif";

class Silver extends React.Component {
  render() {
    return (
      <div className="active">
        <img className="silver" id="silver" src={silver} alt="amy dancing" />
      </div>
    );
  }
}

export default Silver;
