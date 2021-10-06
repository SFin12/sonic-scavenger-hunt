import React, { Component } from "react";
import "./introPage.css";

class IntroPage extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.openPage("mainPage");
  }

  render() {
    return (
      <div>
        <p>
          Dr. Eggman has escaped Mushroom planet and is on his way to Earth! We
          must stop him or he will destroy the Earth with his robot army!
        </p>
        <p>
          We need to build a Sonic Boom machine to blast Dr. Eggman back to
          Mushroom planet. I need your help to get all the parts to build the
          machine before he gets to Earth. You will all need to work together to
          find all the parts. Each time you find a part, bring it back to me so
          I can start building it. Hurry, we have less than an hour!
        </p>
        <button onClick={this.handleClick}>Got it!</button>
      </div>
    );
  }
}

export default IntroPage;
