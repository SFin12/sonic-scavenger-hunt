import React from "react";
import spaceship from "../../Images/drEggmanShip.png";
import earth from "../../Images/earth.png";
import "./timer.css";
import Countdown from "react-countdown";
import SoundWave from "./soundWave";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let space;
    let ship;
    let countdown;
    if (this.props.isActive) {
      space = "stars";
      ship = "ship";
      countdown = "countdown";
    } else {
      space = "space hide";
      ship = "ship paused";
      countdown = "countdown stopped";
    }
    if (this.props.reverse) {
      ship = "ship reverse";
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
        <div className="twinkling">
          <div className={countdown}>
            <Countdown
              className={countdown}
              date={Date.now() + 2700000}
              renderer={renderer}
            />
          </div>
          <img className="earth" src={earth} alt="earth" />

          <img className={ship} src={spaceship} alt="Dr. Eggman" />
        </div>
      </div>
    );
  }
}

export default Timer;
