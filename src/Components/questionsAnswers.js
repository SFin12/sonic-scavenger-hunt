import React, { Component } from "react";
import { dialog } from "./info";

export default class QuestionsAnswers extends Component {
    componentDidMount() {
        console.log("qna");
        window.print();
        this.props.restart();
    }

    render() {
        return (
            <>
                <div className="main">
                    {dialog.map((question) => (
                        <>
                            <p>{question.question}</p>
                            <p>{question.answer}</p>
                        </>
                    ))}
                </div>
            </>
        );
    }
}
