import React from "react";
import "./eggman.css";
import eggman from "../../Images/eggman.png";

class Eggman extends React.Component {
  constructor(props) {
    super(props);
    this.print = this.print.bind(this);
    this.state = {
      currentClass: "hidden",
    };
  }
  print() {
    this.setState({ currentClass: "showing" });
    setTimeout(() => {
      window.print();
    }, 10);
  }

  render() {
    return (
      <div className="active">
        <img
          className={this.state.currentClass}
          id="eggman"
          src={eggman}
          alt="amy dancing"
          onLoad={this.print}
        />
      </div>
    );
  }
}

export default Eggman;
