import { useState } from "react";

export default function HoverHint({ hint }) {
    const [hover, setHover] = useState("Hint");

    const handleHover = (e) => {
        console.log(e.type);
        e.type === "mouseenter" ? setHover(hint) : setHover("Hint");
    };

    return (
        <p
            style={{ color: "gray" }}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            {hover}
        </p>
    );
}
