// Code developed by Amirali Talebi 2024

// Step 1: Load required modules
var express = require("express");  // Import the express module
var fs = require("fs");            // Import the file system module for file operations
var bodyParser = require("body-parser"); // Import body-parser to handle form submissions

// Step 2: Initialize the Express application
var app = express();

// Step 3: Use middleware for body parsing
app.use(bodyParser.urlencoded({ extended: true }));

// Step 4: Create a simple GET endpoint
app.get('/', function(req, res) {
    res.send("Hello, this is my first Express application"); // Response for root URL
});

// Step 5: Start the server on port 5000
app.listen(5000, function() {
    console.log("Server is running on port 5000");
});

// Exercise 2: Additional routes
app.get('/about', function(req, res) {
    res.send("This is a basic Express application"); // Response for /about URL
});

// Route with parameters
app.get('/users/:userId/books/:bookId', function(req, res) {
    res.send(req.params); // Send back the parameters as a response
});

// Exercise 3: Creating Student.json file
// Content of Student.json
/*
{
    "Student1": {
        "name": "Jonhthon",
        "Age": "33",
        "Qualification": "BSC",
        "Email": "std123@gm.com",
        "id": 1
    },
    "Student2": {
        "name": "David",
        "Age": "23",
        "Qualification": "HNC",
        "Email": "Abc@gm.com",
        "id": 2
    },
    "Student3": {
        "name": "Emily",
        "Age": "25",
        "Qualification": "Alevel",
        "Email": "email@gm.com",
        "id": 3
    }
}
*/

// Step 6: Read the Student.json file
app.get('/GetStudents', function(req, res) {
    fs.readFile(__dirname + "/" + "Student.json", 'utf8', function(err, data) {
        if (err) {
            res.status(500).send('Error reading file'); // Error handling for file read
        } else {
            res.json({ 
                'status': true, 
                'Status_Code': 200,
                'requested at': new Date().toISOString(),
                'requrl': req.url,
                'request Method': req.method,
                'studentdata': JSON.parse(data) 
            }); // Respond with JSON data
        }
    });
});

// Step 7: Search for a specific student by ID
app.get('/GetStudentid/:id', (req, res) => {
    fs.readFile(__dirname + "/" + "Student.json", 'utf8', function(err, data) {
        var students = JSON.parse(data); // Parse the JSON data
        var student = students["Student" + req.params.id]; // Access specific student
        if (student) {
            res.json(student); // Respond with student data if found
        } else {
            res.status(404).json({ 'status': false, 'message': 'Student not found' }); // Not found response
        }
    });
});

// Step 8: Serve HTML form for student info
app.get('/studentinfo', function(req, res) {
    res.sendFile('StudentInfo.html', { root: __dirname }); // Serve the HTML file
});

// Step 9: Handle form submission
app.post('/submit-data', function(req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName + ' ';
    var Age = req.body.myAge + ' Gender: ' + req.body.gender + ' ';
    var Qual = ' Qualification: ' + (Array.isArray(req.body.Qual) ? req.body.Qual.join(', ') : req.body.Qual);
    
    console.log(req.body.Qual); // Log qualifications
    res.send({
        status: true,
        message: 'Form Details',
        data: {
            name: name,
            age: Age,
            Qualification: Qual,
        }
    }); // Respond with form data
});

// Copyright Amirali Talebi 2024
