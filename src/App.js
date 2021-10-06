import React, { Component } from "react";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, NavbarBrand } from 'reactstrap';
import "./App.css";
import IntroPage from "./Components/introPage";
import MainPage from "./Components/mainPage";
import StartingPage from "./Components/startingPage";
import Timer from "./Components/Animations/timer";
import EndPage from "./Components/endPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startingPage: true,
      introPage: false,
      mainPage: false,
      endPage: false,
      timer: false,
      reverse: false,
    };

    this.openPage = this.openPage.bind(this);
    this.reverse = this.reverse.bind(this);
  }

  openPage(page) {
    for (let prop in this.state) {
      this.setState({ [prop]: false });
    }
    this.setState({
      [page]: true,
      timer: true,
    });
  }

  reverse() {
    this.setState({ reverse: true });
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <NavbarBrand>
            <span>Restart</span>
          </NavbarBrand>
        </Navbar>
        <header className="App-header">
          <h1>Sonic Adventure</h1>
        </header>
        <div className="main">
          {this.state.startingPage ? (
            <StartingPage openPage={this.openPage} />
          ) : null}
          {this.state.introPage ? <IntroPage openPage={this.openPage} /> : null}
          {this.state.mainPage ? <MainPage openPage={this.openPage} /> : null}
          {this.state.endPage ? <EndPage reverse={this.reverse} /> : null}
        </div>
        <div>
          <Timer isActive={this.state.timer} reverse={this.state.reverse} />
        </div>
      </div>
    );
  }
}

export default App;
