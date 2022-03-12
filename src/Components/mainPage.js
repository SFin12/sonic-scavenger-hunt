import React, { Component } from "react";
import "./mainPage.css";
import { dialog } from "./info";
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

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialog: dialog,
            currentArr: 0,
            text: "",
            inputValue: "",
            inputClass: "visible",
            itemsLeftToBuild: 5,
        };
        this.handleClick = this.handleClick.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.build = this.build.bind(this);
        this.handleInputVisibility = this.handleInputVisibility.bind(this);
    }
    componentDidMount() {
        this.setState({ text: dialog[this.state.currentArr].question });
    }

    updateValue(e) {
        this.setState({ inputValue: e.target.value.toLowerCase() });
    }

    handleClick() {
        if (
            this.state.inputValue[0] === dialog[this.state.currentArr].answer[0]
        ) {
            this.setState({
                inputValue: "",
                text: this.state.dialog[this.state.currentArr].response,
                inputClass: "hidden",
                currentArr: this.state.currentArr + 1,
            });
            const responseLength =
                this.state.dialog[this.state.currentArr].response.length;
            console.log("first: " + dialog[this.state.currentArr].answer);

            setTimeout(() => {
                this.setState({
                    text: this.state.dialog[this.state.currentArr].question,
                    inputClass: "visible",
                });
            }, responseLength * 215);
        } else if (this.state.inputValue[0]) {
            const wrongAnswerLength =
                this.state.dialog[this.state.currentArr].wrongAnswer.length;
            this.setState({
                inputValue: "",
                text: this.state.dialog[this.state.currentArr].wrongAnswer,
                inputClass: "hidden",
            });
            console.log(
                "second: " +
                    this.state.inputValue +
                    " " +
                    dialog[this.state.currentArr].answer
            );
            setTimeout(() => {
                this.setState({
                    text: this.state.dialog[this.state.currentArr].question,
                    inputClass: "visible",
                });
            }, wrongAnswerLength * 170);
        } else {
            this.setState({
                inputValue: "",
                text: "So... were you going to tell me something?",
                inputClass: "hidden",
            });
            console.log("third: " + this.state.currentArr);
            setTimeout(() => {
                this.setState({
                    text: this.state.dialog[this.state.currentArr].response,
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
            this.setState({
                itemsLeftToBuild: this.state.itemsLeftToBuild - 1,
            });
            return;
        }
        this.setState({
            text: this.state.dialog[this.state.currentArr].response,
        });
        this.props.openPage("endPage");
    }

    render() {
        //if the current text is matches a specific part of the story, show the correct character
        let characterAnimation;
        switch (this.state.text) {
            case this.state.dialog[0].response:
                characterAnimation = <Sonic />;
                break;
            case this.state.dialog[1].question:
                characterAnimation = <Sonic />;
                break;
            case this.state.dialog[2].question:
                characterAnimation = <Amy />;
                break;
            case this.state.dialog[4].question:
                characterAnimation = <Shadow />;
                break;
            case this.state.dialog[5].question:
                characterAnimation = <Silver />;
                break;
            case this.state.dialog[5].response:
                characterAnimation = <Knuckles />;
                break;
            case this.state.dialog[8].question:
                characterAnimation = <Computer />;
                break;
            case this.state.dialog[9].question:
                characterAnimation = <Underwear />;
                break;
            case this.state.dialog[10].question:
                characterAnimation = <Blaze />;
                break;
            case this.state.dialog[10].response:
                characterAnimation = null;
                setTimeout(() => {
                    this.setState({
                        text: this.state.dialog[10].eggmanText,
                    });
                }, 14000);
                break;
            case this.state.dialog[10].eggmanText:
                characterAnimation = <Eggman />;
                setTimeout(() => {
                    this.setState({
                        text: "",
                        inputClass: "hidden",
                    });
                }, 500);
                break;
            case this.state.dialog[11].question:
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
            <div className="main">
                <p>{this.state.text}</p>

                {characterAnimation}
                <div className={this.state.inputClass}>
                    <input
                        className="input"
                        id="input"
                        type="text"
                        placeholder="part / answer"
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
