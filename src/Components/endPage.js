/* eslint-disable no-multi-str */
import React, { Component } from "react";

import "./endPage.css";

class EndPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            machineOn: false,
            countdown: 10,
            tempClass: "active",
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.countdown === 1) {
            this.setState({
                machineOn: true,
                tempClass: "hidden",
                countdown: ")))",
            });
            this.props.reverse();
        } else {
            this.setState({ countdown: this.state.countdown - 1 });
        }
    }

    render() {
        return (
            <div>
                <p>
                    {!this.state.machineOn ? (
                        "Okay, I think I have it all together. All we need to do is start it\
          up and direct the sonic blast toward  Dr. Egggman's ship. \n Try pressing the activation button several times."
                    ) : (
                        <h2>
                            "We did it, the sound wave is pushing him back to
                            Mushroom Planet!"
                        </h2>
                    )}
                </p>

                <div className="finalCount">
                    <div className="numbers">{this.state.countdown}</div>
                </div>

                <button
                    className={this.state.tempClass}
                    onClick={this.handleClick}
                >
                    Activate
                </button>
            </div>
        );
    }
}

export default EndPage;
