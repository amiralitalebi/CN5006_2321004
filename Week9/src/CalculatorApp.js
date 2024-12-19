/**
 * CalculatorApp.js
 * Functional component for the calculator application.
 * Copyright Amirali Talebi 2024
 */

import React, { useState } from "react";
import "./Calculator.css";

const CalculatorApp = () => {
  const [text, setText] = useState("");
  const [showImage, setShowImage] = useState(false); // State to toggle the image

  // Handles button clicks and determines functionality
  const handleClick = (value) => {
    if (value === "C") {
      setText(""); // Clear the input field
    } else if (value === "=") {
      try {
        setText(eval(text).toString()); // Evaluate the input field
      } catch (error) {
        setText("Error"); // Show "Error" for invalid inputs
      }
    } else if (value === "Square") {
      try {
        const result = Math.pow(Number(text), 2); // Compute the square
        setText(result.toString());
      } catch (error) {
        setText("Error");
      }
    } else if (value === "Show Me") {
      setShowImage(true); // Display the image when "Show Me" is clicked
    } else {
      setText(text + value); // Append the button value to the input field
    }
  };

  // Renders individual buttons
  const renderButton = (label) => {
    return (
      <button
        className="ButtonStyle"
        value={label}
        onClick={() => handleClick(label)}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="Calculator">
      {/* Display Screen */}
      <div className="screen-row">
        <input type="text" readOnly value={text} />
      </div>

      {/* Buttons Grid */}
      <div className="buttons-grid">
        {renderButton("C")}
        {renderButton("+")}
        {renderButton("-")}
        {renderButton("*")}
        {renderButton("7")}
        {renderButton("8")}
        {renderButton("9")}
        {renderButton("/")}
        {renderButton("4")}
        {renderButton("5")}
        {renderButton("6")}
        {renderButton("Square")} {/* Square Button */}
        {renderButton("1")}
        {renderButton("2")}
        {renderButton("3")}
        {renderButton("=")}
        {renderButton("0")}
        {renderButton(".")}
        {renderButton("Show Me")} {/* Show Me Button */}
      </div>

      {/* Image Section */}
      {showImage && (
        <div className="image-container">
          <img
            src="/me.jpeg" // Replace with the correct image path
            alt="Me"
            className="profile-picture"
          />
        </div>
      )}
    </div>
  );
};

export default CalculatorApp;
