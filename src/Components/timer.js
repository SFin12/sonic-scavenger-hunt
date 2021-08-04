import React from "react";
import spaceship from "../Images/drEggmanShip.png";
import earth from "../Images/earth.png";
import "./timer.css";
import Countdown from "react-countdown";

class Timer extends React.Component {
  render() {
    let space;
    let ship;
    let countdown;
    if (this.props.isActive) {
      space = "space";
      ship = "ship";
      countdown = "countdown";
    } else {
      space = "space hide";
      ship = "ship paused";
      countdown = "countdown stopped";
    }

    // Random component
    const Completionist = () => (
      <span className={countdown}>
        Our plan failed! He has arrived on Earth!
      </span>
    );

    // Renderer callback with condition
    const renderer = ({ hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <Completionist />;
      } else {
        // Render a countdown
        return (
          <span className={countdown}>
            {hours}:{minutes}:{seconds}
          </span>
        );
      }
    };
    return (
      <div className={space}>
        <Countdown date={Date.now() + 360000} renderer={renderer} />
        <img className="earth" src={earth} alt="earth" />
        <img className={ship} src={spaceship} alt="Dr. Eggman" />;
      </div>
    );
  }
}

export default Timer;
