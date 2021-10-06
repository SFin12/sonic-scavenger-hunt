import React, { Component } from "react";
import "./engine.css";
import engine from "../../Images/engine.png";

class Engine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempClass: "active",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ tempClass: "hidden" });
    this.props.build();
  }

  render() {
    return (
      <div className={this.state.tempClass}>
        <img
          className="engine"
          id="engine"
          src={engine}
          alt="amy dancing"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Engine;
