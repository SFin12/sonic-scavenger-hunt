import React from "react";
import "./computer.css";
import computer from "../../Images/computer.png";

class Computer extends React.Component {
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
          className="computer"
          id="computer"
          src={computer}
          alt="computer"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Computer;
