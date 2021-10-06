import React, { Component } from "react";
import "./megaphone.css";
import megaphone from "../../Images/megaphone.png";

class Megaphone extends Component {
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
          className="megaphone"
          id="megaphone"
          src={megaphone}
          alt="amy dancing"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Megaphone;
