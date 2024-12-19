import React, { useState } from "react";
import Happy from "./Happy.png";
import Sad from "./Sad.png";
import Like from "./Like.png";

function DynamicEmoji() {
    const [input, setInput] = useState("");
    const [emoji, setEmoji] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);

        if (e.target.value === "Happy") setEmoji(Happy);
        else if (e.target.value === "Sad") setEmoji(Sad);
        else if (e.target.value === "Like") setEmoji(Like);
        else setEmoji("");
    };

    return (
        <div className="section">
            <h1>Dynamic Emoji Selector</h1>
            <input
                type="text"
                value={input}
                onChange={handleChange}
                placeholder="Type Happy, Sad, or Like"
            />
            {emoji && <img src={emoji} alt="emoji" />}
        </div>
    );
}

export default DynamicEmoji;
