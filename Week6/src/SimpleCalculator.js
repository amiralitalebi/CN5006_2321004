// Copyright © 2024 Amirali Talebi. All rights reserved.
// Importing necessary CSS for styling
import './App.css';
import React from 'react';

// Creating a functional component named Calculator
function Calculator() {
    // Function to perform calculations based on user input
    function calculate() {
        // Getting the values from the input fields and dropdown
        const num1 = parseFloat(document.getElementById('num1').value); // First number
        const num2 = parseFloat(document.getElementById('num2').value); // Second number
        const operator = document.getElementById('operator').value; // Selected operator
        
        let result = 0; // Initialising the result variable

        // Performing the calculation based on the selected operator
        switch (operator) {
            case '+': // For addition
                result = num1 + num2;
                break;
            case '-': // For subtraction
                result = num1 - num2;
                break;
            case '*': // For multiplication
                result = num1 * num2;
                break;
            case '/': // For division
                result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero'; // Checking for division by zero
                break;
            default: // Handling invalid operators
                result = 'Invalid Operation';
        }
        
        // Displaying the result in the paragraph with id 'result'
        document.getElementById('result').innerText = `Result: ${result}`;
    }

    // Rendering the calculator component
    return (
        <div style={{ padding: '20px', border: '8px solid #ccc', width: '300px', background: 'lightgreen' }} className="App">
            <h2>Simple Calculator</h2>
            <input type="number" id="num1" placeholder="First Number" style={{ width: '100%', marginBottom: '10px' }} />
            <select id="operator" style={{ width: '100%', marginBottom: '10px' }}>
                <option value="+">Add</option>
                <option value="-">Subtract</option>
                <option value="*">Multiply</option>
                <option value="/">Divide</option>
            </select>
            <input type="number" id="num2" placeholder="Second Number" style={{ width: '100%', marginBottom: '10px' }} />
            <button onClick={calculate} style={{ width: '100%', padding: '10px', marginBottom: '10px' }}>
                Calculate
            </button>
            <p id="result" style={{ fontWeight: 'bold', fontSize: '16px' }}>Result:</p>
        </div>
    );
}

// Exporting the Calculator component for use in other files
export default Calculator;
