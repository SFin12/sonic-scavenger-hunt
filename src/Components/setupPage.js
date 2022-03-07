import React, { Component } from "react";
import { Button } from "reactstrap";
import "./setupPage.css";

class SetupPage extends Component {
    constructor(props) {
        super(props);

        this.handleItems = this.handleItems.bind(this);
        this.handleQuestionsAnswers = this.handleQuestionsAnswers.bind(this);
    }

    handleItems() {
        this.props.openPage("clueItems", false);
    }

    handleQuestionsAnswers() {
        this.props.openPage("questionsAnswers", false);
    }

    render() {
        return (
            <>
                <section className="setup-page">
                    <h2>Setup Instructions</h2>
                    <ul>
                        <li>Estimated completion time 25 - 45 minutes.</li>
                        <li>
                            Items needed
                            <ul>
                                <li>
                                    Several adults to act as characters that
                                    hold clues.
                                </li>
                                <li>A printer</li>
                            </ul>
                        </li>
                        <li>Print the clue items and hide them.</li>
                        <li>
                            Print question and answer sheet to understand and
                            assist with the treasure hunt.
                        </li>
                    </ul>
                </section>
                <Button
                    color="primary"
                    size="lg"
                    block
                    onClick={this.handleItems}
                >
                    Print Clue Items
                </Button>
                <Button
                    color="primary"
                    size="lg"
                    block
                    onClick={this.handleQuestionsAnswers}
                >
                    Print Questions and Answers
                </Button>
            </>
        );
    }
}

export default SetupPage;
