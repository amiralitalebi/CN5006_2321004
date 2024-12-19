// myGreetingApp.js
// © Amirali Talebi 2024
// This file defines a simple stateless functional component in React.
// The component displays a greeting message on the screen.

import './App.css';

// Define a stateless functional component named GreetingElement
function GreetingElement() {
    // Set the greeting message to be displayed
    const greeting = 'Hello, Function Component!';
    
    // Return JSX containing a div with the class 'App' and a heading displaying the greeting
    return (
        <div className="App">
            <h1>{greeting}</h1>
        </div>
    );
}

// Export the GreetingElement component for use in other files
export default GreetingElement;
