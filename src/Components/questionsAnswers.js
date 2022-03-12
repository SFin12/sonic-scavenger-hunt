import React, { Component } from "react";
import { dialog } from "./info";

export default class QuestionsAnswers extends Component {
    componentDidMount() {
        console.log("qna");
        window.print();
    }

    render() {
        return (
            <>
                <div className="main">
                    {dialog.map((question, i) => (
                        <div className="mb-4 text-left">
                            <div className="mb-1">
                                <p
                                    className="d-inline"
                                    style={{ color: "rgb(220,180,0)" }}
                                >
                                    Q {i + 1}:{" "}
                                </p>
                                <p className="mb-1 d-inline">
                                    {question.question}
                                </p>
                            </div>
                            <span>
                                <p
                                    className="d-inline"
                                    style={{ color: "green" }}
                                >
                                    A:{" "}
                                </p>
                                <p className="d-inline">{question.answer}</p>
                            </span>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}
