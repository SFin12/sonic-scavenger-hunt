import React, { Component } from "react";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import SetupPage from "./Components/setupPage";
import IntroPage from "./Components/introPage";
import MainPage from "./Components/mainPage";
import StartingPage from "./Components/startingPage";
import Timer from "./Components/Animations/timer";
import EndPage from "./Components/endPage";
import QuestionsAnswers from "./Components/questionsAnswers";
import ClueItems from "./Components/clueItems";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startingPage: true,
            questionsAnswers: false,
            clueItems: false,
            introPage: false,
            mainPage: false,
            endPage: false,
            timer: false,
            reverse: false,
            setup: false,
            restart: "",
        };

        this.openPage = this.openPage.bind(this);
        this.reverse = this.reverse.bind(this);
        this.restart = this.restart.bind(this);
    }

    openPage(page, timer = true) {
        for (let prop in this.state) {
            this.setState({ [prop]: false });
        }
        this.setState({
            [page]: true,
            timer: timer,
        });
    }

    reverse() {
        this.setState({ reverse: true });
    }

    restart() {
        window.location.reload(true);
    }

    render() {
        return (
            <div className="App">
                <Navbar>
                    <NavbarBrand>
                        <span onClick={this.restart}>Restart</span>
                        {this.state.mainPage ? null : (
                            <span
                                className="nav-setup"
                                onClick={() => this.openPage("setup", false)}
                            >
                                Setup Instructions
                            </span>
                        )}
                    </NavbarBrand>
                </Navbar>
                <header className="App-header">
                    <h1>Sonic Adventure</h1>
                </header>
                <div className="main">
                    {this.state.setup ? (
                        <SetupPage
                            openPage={this.openPage}
                            restart={this.restart}
                        />
                    ) : null}
                    {this.state.startingPage ? (
                        <StartingPage openPage={this.openPage} />
                    ) : null}
                    {this.state.questionsAnswers ? (
                        <QuestionsAnswers restart={this.restart} />
                    ) : null}
                    {this.state.clueItems ? (
                        <ClueItems restart={this.restart} />
                    ) : null}
                    {this.state.introPage ? (
                        <IntroPage openPage={this.openPage} />
                    ) : null}
                    {this.state.mainPage ? (
                        <MainPage openPage={this.openPage} />
                    ) : null}
                    {this.state.endPage ? (
                        <EndPage reverse={this.reverse} />
                    ) : null}
                </div>
                <div>
                    <Timer
                        isActive={this.state.timer}
                        reverse={this.state.reverse}
                    />
                </div>
            </div>
        );
    }
}

export default App;
