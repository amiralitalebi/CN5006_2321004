// Amirali Talebi © 2024
// Importing CSS for styling
import './App.css';

// Defining a functional component that changes the background color upon button click
function AppColor(props) {   
    // Function that changes the background color and shows an alert with the entered name
    function greetUser(e) { 
        // Setting the body background color to the color specified in the button's value
        document.body.style.background = e.target.value; 
        // Displaying an alert with the name entered in the input box
        alert("Welcome, " + document.getElementById(props.color).value); 
    }

    // Returning the JSX for the component
    return ( 
        <div className="App" style={{ backgroundColor: 'powderblue', color: 'black' }}> 
            <h1>{props.heading}</h1> 
            <p style={{ color: 'blue', font: '30px Arial' }}>How to create a functional component with a button.</p> 
            <label className="label" id="lbl">{props.lbl}</label> 
            {/* Input field to enter name */}
            <input id={props.color} type="text" /> 
            {/* Button to trigger the greetUser function and change background color */}
            <button value={props.color} onClick={greetUser}>Colour me {props.color}</button> 
        </div> 
    ); 
}

// Exporting the component to be used in index.js
export default AppColor;
