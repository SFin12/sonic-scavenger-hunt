import React from "react";
import "./mainPage.css";
import Animations from "./animations";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    window.qNa = [
      [
        "First you all need to find Sonic's shoes so he can run as fast as possible. Hmm, where would you put your shoes Sonic?",
        "767",
        "Good, you found the shoes!... ",
        "Hmm that doesn't seem right, are you sure you have Sonic's shoes? Maybe you typed it in wrong.",
      ],
      [
        "Now we need to find out what the 767 means. Ask an adult and let me know what they say. Hurry, I'm going to be sick watching Sonic run in circles!",
        "sound",
        "That's right, we need Sonic to run the speed of sound to get across the country to Dr. Eggman's lab...",
        "Hmm that doesn't seem right, ask another adult or try typing it in again. SONIC PLEASE STOP!",
      ],
      [
        "Now the trick is to find the keys to Dr. Eggman's lab. I know of an unhappy former employee of \
        Dr. Eggman. His name is Dr. Paul Finegan, he might know where the keys are. Amy Rose, you're sweet, \
        you should talk to him. Come back when you find them and tell me how many you have.",
        "3",
        "Awesome, those are his keys!",
        "Hmm I don't think those are his keys, keep looking.",
      ],
      [
        "When you get to the lab, look for his main computer. Once you find it, you will need to bring it back here and type in the password that's on the back of it.",
        "2468",
        "Perfect, now we can use his own technology against him!",
        "I think you have the wrong computer, look around some more.",
      ],
      [
        "Ok Shadow we are going to need your skills. To create the Sonic Boom we are going to \
        need a giant megaphone to create the sound wave. Go to the Army Depot to find one. Let \
        me know what color you get when you come back. I'm very particular about what color \
        parts I use.",
        "white",
        "Oh good, that's my favorite color! Nice and clean.",
        "Ugh, I don't like that color, I can't use it. Try again.",
      ],
      [
        "Silver, why don't you take the lead on this one. We need an engine to power everything. \
        I think a Corvette engine should be enough power. Go ask Jason the Mechanic what type \
        of engine that is.",
        "V8",
        "That should do the trick. I bet you and your team can find one in the junk yard outside \
        your base. Have Knuckles lead the way, he's got an eye for these sorts of things.",
        "What?! This guy knows nothing. Go ask someone else.",
      ],
      [
        "Did you find the engine?",
        "yes",
        "Great!",
        "It's a simple question, yes or no. Why are you still here then?",
      ],
      [
        "Let's get this Sonic Boom built. Let's double check the part number first.",
        "7V8",
        "Yup, that's the one.",
        "Uhhhh, I said Corvette not a scooter. Try typing that again.",
      ],
    ];
    window.currentArr = 0;
    window.question = 0;
    window.answer = 1;
    window.response = 2;
    window.wrongAnswer = 3;

    this.state = {
      text: window.qNa[window.currentArr][window.question],
      inputValue: "",
      inputClass: "visible",
    };
    this.handleClick = this.handleClick.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleClick() {
    if (
      this.state.inputValue[0].toLowerCase() ===
      window.qNa[window.currentArr][window.answer][0].toLowerCase()
    ) {
      this.setState({
        inputValue: "",
        text: window.qNa[window.currentArr][window.response],
        inputClass: "hidden",
      });
      const responseLength =
        window.qNa[window.currentArr][window.response].length;

      window.currentArr += 1;

      setTimeout(() => {
        this.setState({
          text: window.qNa[window.currentArr][window.question],
          inputClass: "visible",
        });
      }, responseLength * 225);
    } else {
      const wrongAnswerLength =
        window.qNa[window.currentArr][window.wrongAnswer].length;
      this.setState({
        inputValue: "",
        text: window.qNa[window.currentArr][window.wrongAnswer],
        inputClass: "hidden",
      });
      console.log(wrongAnswerLength);
      setTimeout(() => {
        this.setState({
          text: window.qNa[window.currentArr][window.question],
          inputClass: "visible",
        });
      }, wrongAnswerLength * 170);
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.text}</p>
        <Animations isActive={window.currentArr === 1 ? true : false} />
        <div className={this.state.inputClass}>
          <input
            className="input"
            id="input"
            type="text"
            placeholder="part"
            onChange={this.updateValue}
            value={this.state.inputValue}
          />
          <button onClick={this.handleClick}>Submit</button>
        </div>
      </div>
    );
  }
}

export default MainPage;
