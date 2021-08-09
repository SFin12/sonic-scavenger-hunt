import React from "react";
import "./silver.css";
import silver from "../../Images/silver.gif";
import corvette from "../../Images/corvette.gif";

class Silver extends React.Component {
  render() {
    return (
      <div className="active">
        <img className="silver" id="silver" src={silver} alt="amy dancing" />

        <img
          className="corvette blurred"
          src={corvette}
          alt="corvette driving"
        />
      </div>
    );
  }
}

export default Silver;
