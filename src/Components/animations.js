import React from "react";
import "./animations.css";
import sonicSpeed from "../Images/sonicSpeed.gif";

class Animations extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    if (this.props.isActive) {
    }
  }

  render() {
    let tempClass = "inactive";
    if (this.props.isActive) {
      tempClass = "active";
    }
    return (
      <div className={tempClass}>
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

export default Animations;
