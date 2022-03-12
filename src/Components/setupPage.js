import React, { Component } from "react";
import { Button } from "reactstrap";
import HoverHint from "./HoverHint";
import "./setupPage.css";

class SetupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "hello world",
            passwordInput: "",
            unlockAnswers: false,
            placeholder: "Secret Password",
        };
        this.handleItems = this.handleItems.bind(this);
        this.handleQuestionsAnswers = this.handleQuestionsAnswers.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEnterKey = this.handleEnterKey.bind(this);
    }

    handleItems() {
        this.props.openPage("clueItems", false);
    }

    handleQuestionsAnswers() {
        this.props.openPage("questionsAnswers", false);
    }

    handleChange(e) {
        let passwordInput = e.target.value;
        this.setState({
            passwordInput: passwordInput.toLowerCase(),
        });
    }
    handleEnterKey(e) {
        if (e.key === "Enter") {
            this.handleSubmit();
        }
    }

    handleSubmit() {
        // If the first part "hello" matches, then the password is correct...
        if (
            this.state.passwordInput.slice(0, 5) ===
            this.state.password.slice(0, 5)
        ) {
            return this.setState({ unlockAnswers: true });
        }
        this.setState({
            passwordInput: "",
            placeholder: "Wrong Password",
        });
        setTimeout(() => {
            this.setState({ placeholder: "Secret Password" });
        }, 3000);
    }

    render() {
        return (
            <>
                {this.state.unlockAnswers}
                <section className="setup-page">
                    <h2 className="text-center">Secret Answer Sheet</h2>
                    <p className="text-left">
                        This app was created for my sons' birthday party. It
                        requires some other materials and setup for adults to
                        give clues throughout the scavenger hunt. To see the
                        questions and answers as a backup or to test as a
                        developer, type in the secret password. The secret
                        password is the most famous first words that are
                        traditionally printed / logged for a developers first
                        program!
                    </p>
                    <div className="d-flex flex-column align-items-center">
                        <div className="d-flex justify-content-center">
                            <input
                                type="password"
                                className="input mr-1"
                                onChange={this.handleChange}
                                onKeyPress={this.handleEnterKey}
                                placeholder={this.state.placeholder}
                                value={this.state.passwordInput}
                            ></input>
                            <Button
                                color="primary"
                                size="lg"
                                style={{
                                    height: 50,
                                    width: 100,
                                    alignSelf: "center",
                                }}
                                onClick={this.handleSubmit}
                            >
                                Submit
                            </Button>
                        </div>
                        <HoverHint hint="H**** W****" />
                    </div>
                </section>
                {this.state.unlockAnswers ? (
                    <Button
                        color="primary"
                        size="lg"
                        block
                        onClick={this.handleQuestionsAnswers}
                    >
                        View / print Questions and Answers
                    </Button>
                ) : null}
            </>
        );
    }
}

export default SetupPage;
