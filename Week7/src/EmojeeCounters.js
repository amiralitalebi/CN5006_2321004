import React, { useState, useEffect } from "react";
import Love from "./Love.png";
import Sad from "./Sad.png";
import Like from "./Like.png";

function EmojeeCounter({ pic }) {
    const [picSrc, setPicSrc] = useState(Love);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (pic === "Love") setPicSrc(Love);
        else if (pic === "Sad") setPicSrc(Sad);
        else if (pic === "Like") setPicSrc(Like);
    }, [pic]);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div className="section">
            <h1>{pic} Counter</h1>
            <button className="button" onClick={handleClick}>
                {count}
                <img src={picSrc} alt={pic} />
            </button>
        </div>
    );
}

export default EmojeeCounter;
