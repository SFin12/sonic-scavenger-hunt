import React, { Component } from "react";
import "./clueItems.css";
import blackMegaPhone from "../Images/black megaphone.png";

export default class ClueItems extends Component {
    render() {
        return (
            <>
                <div className="small-image">
                    <img
                        id="small-image"
                        src={blackMegaPhone}
                        alt="black mega phone"
                    />
                </div>
            </>
        );
    }
}
