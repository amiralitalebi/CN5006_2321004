// Amirali Talebi © 2024
// Importing the necessary libraries and components
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppColor from './AppbackgroundColor'; // Importing AppColor component
import reportWebVitals from './reportWebVitals';

// Rendering the AppColor component three times with different color properties
ReactDOM.render(
  <React.StrictMode>
    <AppColor heading="This is the first element" lbl="Name:" color="green" />
    <AppColor heading="This is the second element" lbl="Name:" color="blue" />
    <AppColor heading="This is the third element" lbl="Name:" color="yellow" />
  </React.StrictMode>,
  // Specifying the target DOM element
  document.getElementById('root')
);

// Measuring and reporting performance (optional)
reportWebVitals();
