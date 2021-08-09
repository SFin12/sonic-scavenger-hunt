import React from "react";
import "./satelite.css";
import satelite from "../../Images/satelite.png";

class Satelite extends React.Component {
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
          className="satelite"
          id="satelite"
          src={satelite}
          alt="amy dancing"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Satelite;
