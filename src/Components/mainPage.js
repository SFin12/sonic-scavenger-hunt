import React from "react";
import "./mainPage.css";
import Sonic from "./Animations/sonic";
import Amy from "./Animations/amy";
import Shadow from "./Animations/shadow";
import Silver from "./Animations/silver";
import Knuckles from "./Animations/knuckles";
import Computer from "./Animations/computer";
import Underwear from "./Animations/underwere";
import Blaze from "./Animations/blaze";
import Eggman from "./Animations/eggman";
import Megaphone from "./Animations/megaphone";
import Engine from "./Animations/engine";
import Keys from "./Animations/keys";
import Satelite from "./Animations/satelite";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    window.qNa = [
      [
        //0 (sonic)
        "First you all need to find Sonic's shoes so he can run as fast as possible. Hmm, where would you put your shoes Sonic? See anything on them?",
        "767",
        "Good, you found the shoes!... ",
        "Hmm that doesn't seem right, are you sure you have Sonic's shoes? Type the number on the shoes.",
      ],
      [
        //1 (sonic) speed or s
        "Now we need to find out what the 767 means. HEY! STOP WATCHING SONIC AND PAY ATTENTION! Ask an adult and let me know what they say. Hurry, I'm going to be sick watching Sonic run in circles!",
        "speed of sound",
        "That's right, we need Sonic to run the speed of sound to get across the country to Dr. Eggman's lab...",
        "Hmm that doesn't seem right, ask another adult or try typing it in again. SONIC PLEASE STOP!",
      ],
      [
        //2 (amy) how many keys?
        "Now the trick is to find the keys to Dr. Eggman's lab. I know of an unhappy former employee of \
        Dr. Eggman. His name is Dr. Paul Finegan, he might know where the keys are. Amy Rose, I think \
        you should go talk to him. Come back when you find them and tell me how many you have.",
        "3",
        "Awesome, those are his keys!",
        "Hmm I don't think those are his keys, keep looking.",
      ],
      [
        //3 computer code?
        "When you get to the lab, look for his main computer. Once you find it, you will need to bring it back here and type in the password that's on the back of it.",
        "2468",
        "Perfect, now we can use his own technology against him!",
        "I think you have the wrong computer, look around some more.",
      ],
      [
        //4 (shadow) megaphone
        "Shadow, we are going to need your skills. To create the Sonic Boom we are going to \
        need a giant megaphone to create the sound wave. Go to the Army Depot to find one. Let \
        me know what color you get when you come back. I'm very particular about what color \
        parts I use.",
        "white",
        "Oh good, that's my favorite color! Nice and clean.",
        "Ugh, I don't like that color, I can't use it. Try again.",
      ],
      [
        //5 (silver) corvette engine size
        "Silver, why don't you take the lead on this one. We need an engine to power everything. \
        I think a Corvette engine should be enough power. SILVER, are you listening? Go ask Jason the Mechanic what type \
        of engine that is in a corvette...Silver, HELLO???",
        "V8",
        "That should do the trick. I bet you and your team can find one in the junk yard outside \
        your base. Have Knuckles lead the way, he's got an eye for these sorts of things.",
        "What?! This guy knows nothing. Go ask someone else.",
      ],
      [
        //6 y/n
        "Did you find the engine?",
        "yes",
        "Great!",
        "It's a simple question, yes or no. Why are you still here then?",
      ],
      [
        //7 engine part number
        "Let's get this Sonic Boom machine built. Let's double check the part number first.",
        "7V8",
        "Yup, that's the one.",
        "Uhhhh, I said Corvette engine not scooter. Try typing that again.",
      ],
      [
        //8 bunny parts identification
        "Hey Bunny, I got something in my eye and need your help to identify the correct parts.\
        Is this the computer?",
        "yes",
        "Ok good.",
        "Are you sure?",
      ],
      [
        //9 underwear
        "Are these the keys?",
        "no",
        "Whoops, that wasn't supposed to happen. I better put those in the hamper.",
        "Huh, why do they have such a funny smell?",
      ],
      [
        //10 (blaze) satelite, response = print eggman
        "Finally, I got the dirt out of my eye. It's time to get the satellite online. Blaze \
        you're a tech genious, go find Director Lucketta for the location of the satellite. Once \
        you find it, enter the coordinates you find on the back. Just don't burn anything down!",
        "95655",
        "Alright, the satellite is online! Well this is strange, we are getting a message... it \
        looks like it is coming from.... Dr. Eggman!",
        "I tried inputting those coordinates but it didn't work. Check again.",
      ],
      [
        //11 build sonic blaster
        "We better hurry, we don't have a lot of time left. Squirrel, start handing me the parts and I'll put them together.",
        "none",
        "Okay, I think I have it all together. All we need to do is start it up and direct the sonic blast toward \
        Dr. Egggman's ship.",
      ],
    ];
    window.eggmanText =
      "I'm coming for you Sonic! You and all your little friends! With my robots I will rule the \
      WORLD!... \nWait a second, are guys celebrating a birthday party?\n...psst you have to press Enter";
    window.currentArr = 11;
    window.question = 0;
    window.answer = 1;
    window.response = 2;
    window.wrongAnswer = 3;

    this.state = {
      text: window.qNa[window.currentArr][window.question],
      inputValue: "",
      inputClass: "visible",
      itemsLeftToBuild: 5,
    };
    this.handleClick = this.handleClick.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.build = this.build.bind(this);
    this.handleInputVisibility = this.handleInputVisibility.bind(this);
  }

  updateValue(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleClick() {
    if (
      this.state.inputValue[0] &&
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
      }, responseLength * 215);
    } else if (this.state.inputValue[0]) {
      const wrongAnswerLength =
        window.qNa[window.currentArr][window.wrongAnswer].length;
      this.setState({
        inputValue: "",
        text: window.qNa[window.currentArr][window.wrongAnswer],
        inputClass: "hidden",
      });
      setTimeout(() => {
        this.setState({
          text: window.qNa[window.currentArr][window.question],
          inputClass: "visible",
        });
      }, wrongAnswerLength * 170);
    } else {
      this.setState({
        inputValue: "",
        text: "So... were you going to tell me something?",
        inputClass: "hidden",
      });

      setTimeout(() => {
        this.setState({
          text: window.qNa[window.currentArr][window.question],
          inputClass: "visible",
        });
      }, 6000);
    }
  }

  handleInputVisibility() {
    this.setState({ inputClass: "hidden" });
  }

  build() {
    if (this.state.itemsLeftToBuild > 1) {
      this.setState({ itemsLeftToBuild: this.state.itemsLeftToBuild - 1 });
      return;
    }
    this.setState({ text: window.qNa[window.currentArr][window.response] });
    this.props.openPage("endPage");
  }

  render() {
    //if the current text is matches a specific part of the story, show the correct character
    let characterAnimation;
    switch (this.state.text) {
      case window.qNa[0][window.response]:
        characterAnimation = <Sonic />;
        break;
      case window.qNa[1][window.question]:
        characterAnimation = <Sonic />;
        break;
      case window.qNa[2][window.question]:
        characterAnimation = <Amy />;
        break;
      case window.qNa[4][window.question]:
        characterAnimation = <Shadow />;
        break;
      case window.qNa[5][window.question]:
        characterAnimation = <Silver />;
        break;
      case window.qNa[5][window.response]:
        characterAnimation = <Knuckles />;
        break;
      case window.qNa[8][window.question]:
        characterAnimation = <Computer />;
        break;
      case window.qNa[9][window.question]:
        characterAnimation = <Underwear />;
        break;
      case window.qNa[10][window.question]:
        characterAnimation = <Blaze />;
        break;
      case window.qNa[10][window.response]:
        characterAnimation = null;
        setTimeout(() => {
          this.setState({
            text: window.eggmanText,
          });
        }, 14000);
        break;
      case window.eggmanText:
        characterAnimation = <Eggman />;
        setTimeout(() => {
          this.setState({
            text: "",
            inputClass: "hidden",
          });
        }, 500);
        break;
      case window.qNa[11][window.question]:
        setTimeout(() => {
          this.setState({
            inputClass: "hidden",
            inputValue: true,
          });
        }, 10);
        characterAnimation = (
          <div>
            <Megaphone build={this.build} />
            <Engine build={this.build} />
            <Keys build={this.build} />
            <Satelite build={this.build} />
            <Computer build={this.build} />
          </div>
        );

        break;
      default:
        characterAnimation = null;
        break;
    }
    return (
      <div>
        <p>{this.state.text}</p>

        {characterAnimation}
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
