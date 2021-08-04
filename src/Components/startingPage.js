import React from "react";
import sonicOne from "../Images/sonicOne.png";
import "./startingPage.css";

class StartingPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.openPage("introPage");
  }

  render() {
    return (
      <div>
        <h3>Help Sonic and his friends save the world from Dr. Eggman!</h3>
        <img src={sonicOne} alt="Sonic with his finger pointing to the sky" />
        <div>
          <button onClick={this.handleClick}>Start</button>
        </div>
      </div>
    );
  }
}

export default StartingPage;
