import React, { Component } from "react";
import soundWave from "../../Images/soundWave.gif";

class SoundWave extends Component {
  render() {
    return (
      <div className="soundWave">
        <img className="left" src={soundWave} alt="sound wave" />
      </div>
    );
  }
}

export default SoundWave;
