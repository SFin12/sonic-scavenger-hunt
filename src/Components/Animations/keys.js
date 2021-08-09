import React from "react";
import "./keys.css";
import keys from "../../Images/keys.png";

class Keys extends React.Component {
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
          className="keys"
          id="keys"
          src={keys}
          alt="amy dancing"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Keys;
