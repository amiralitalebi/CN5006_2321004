// myGreetingProp.js
// © Amirali Talebi 2024
// Functional component that accepts properties to display a customizable message.

import './App.css';

// Define the functional component, accepting `props` as an argument
function GreetingElementwithProp(props) {
    const greeting = 'Hello! Let\'s start learning function components...';
    console.log("prop is", props.msg); // Log the `msg` property to the console

    return (
        <div className="App">
            <h1>{props.msg}</h1> {/* Display the `msg` property in an h1 element */}
        </div>
    );
}

// Export the component so it can be imported elsewhere
export default GreetingElementwithProp;
