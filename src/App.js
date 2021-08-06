import React from "react";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import IntroPage from "./Components/introPage";
import MainPage from "./Components/mainPage";
import StartingPage from "./Components/startingPage";
import Timer from "./Components/Animations/timer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startingPage: true,
      introPage: false,
      mainPage: false,
      endPage: false,
      timer: false,
    };

    this.openPage = this.openPage.bind(this);
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Sonic Adventure</h1>
        </header>
        <div>
          {this.state.startingPage ? (
            <StartingPage openPage={this.openPage} />
          ) : null}
          {this.state.introPage ? <IntroPage openPage={this.openPage} /> : null}
          {this.state.mainPage ? <MainPage /> : null}
        </div>
        <div>
          <Timer isActive={this.state.timer} />
        </div>
      </div>
    );
  }
}

export default App;
