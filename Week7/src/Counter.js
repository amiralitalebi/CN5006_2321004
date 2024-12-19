import React, { useState } from "react";

function HookControlledButtonState() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div className="section">
            <h1>Click Counter</h1>
            <button className="button" onClick={handleClick}>
                Click me! {count}
            </button>
        </div>
    );
}

export default HookControlledButtonState;
