import React, { useState } from "react";
import Button from "./Button";
import "./Calculator.css";

function KeyPadComponent() {
    const [text1, setText] = useState("");
    const [showImage, setShowImage] = useState(false);

    const ClickHandle = (e) => {
      if (e.target.value === "C") {
        setText(""); // Clear input
      } else if (e.target.value === "=") {
        try {
          setText(eval(text1)); // Evaluate the entered expression
        } catch (error) {
          setText("Error");
        }
      } else if (e.target.value === "Square") {
        try {
          const result = Math.pow(Number(text1), 2); // Compute the square
          setText(result.toString());
        } catch (error) {
          setText("Error");
        }
      } else {
        setText(text1 + e.target.value); // Append button value to input
      }
    };
    

    return (
        <div className="Calculator">
            <div className="screen-row">
                <input type="text" readOnly value={text1} />
            </div>
            <div>
                <Button label="(" ClickHandle={ClickHandle} />
                <Button label="CE" ClickHandle={ClickHandle} />
                <Button label=")" ClickHandle={ClickHandle} />
                <Button label="C" ClickHandle={ClickHandle} />
                
            </div>
            <div>
                <Button label="1" ClickHandle={ClickHandle} />
                <Button label="2" ClickHandle={ClickHandle} />
                <Button label="3" ClickHandle={ClickHandle} />
                <Button label="+" ClickHandle={ClickHandle} />
            </div>
            <div>
                <Button label="4" ClickHandle={ClickHandle} />
                <Button label="5" ClickHandle={ClickHandle} />
                <Button label="6" ClickHandle={ClickHandle} />
                <Button label="-" ClickHandle={ClickHandle} />
            </div>
            <div>
                <Button label="7" ClickHandle={ClickHandle} />
                <Button label="8" ClickHandle={ClickHandle} />
                <Button label="9" ClickHandle={ClickHandle} />
                <Button label="*" ClickHandle={ClickHandle} />
            </div>
            <div>
                <Button label="." ClickHandle={ClickHandle} />
                <Button label="0" ClickHandle={ClickHandle} />
                <Button label="=" ClickHandle={ClickHandle} />
                <Button label="/" ClickHandle={ClickHandle} />
            </div>
            <div>
                <Button label="Show Me" ClickHandle={ClickHandle} />
            </div>
            {showImage && (
                <div className="image-container">
                    <img
                        src="/me.jpeg"
                        alt="Me"
                        className="profile-picture"
                    />
                </div>
            )}
        </div>
    );
}

export default KeyPadComponent;
