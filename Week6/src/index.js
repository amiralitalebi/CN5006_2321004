// Copyright © 2024 Amirali Talebi. All rights reserved.
// Importing React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from './SimpleCalculator'; // Importing the Calculator component

// Creating the root element to render the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the Calculator component within the StrictMode for better error handling
root.render(
    <React.StrictMode>
        <Calculator />
    </React.StrictMode>
);
