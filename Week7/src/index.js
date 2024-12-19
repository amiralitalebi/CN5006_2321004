import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HookControlledButtonState from "./Counter";
import EmojeeCounter from "./EmojeeCounters";
import DynamicEmoji from "./DynamicEmoji";

ReactDOM.render(
    <React.StrictMode>
        <div className="App">
            <HookControlledButtonState />
            <EmojeeCounter pic="Love" />
            <EmojeeCounter pic="Sad" />
            <EmojeeCounter pic="Like" />
            <DynamicEmoji />
        </div>
    </React.StrictMode>,
    document.getElementById("root")
);
