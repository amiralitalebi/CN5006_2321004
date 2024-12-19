// index.js
// © Amirali Talebi 2024
// This is the main script to execute functions and modules for exercises 1 to 4

// Exercise 1: Function to display employee info
function EmployeeInfo(name, Salary) {
    // Displaying a welcome message with name and salary information
    console.log("Welcome " + name + ". Your monthly Salary is " + Salary);
}
console.log("This is my first program");

// Declaring variables for employee name and salary
var EmpName = "John";
var EmpSalary = 50000;

// Calling the EmployeeInfo function with predefined variables
EmployeeInfo(EmpName, EmpSalary);

// Exercise 2: Arrow function to display skills
const EmpSkills = (skills) => {
    // Displaying skill expertise message
    console.log("Expert in " + skills);
};

// Calling EmpSkills function with "Java" as the skill
EmpSkills("Java");

// Exercise 3: Importing StudentInfo and Person modules
const student = require('./StudentInfo');
const Person = require('./Person');

// Calling and displaying functions from StudentInfo module
console.log("Student Name: " + student.getName());    // Display student name
console.log("Campus Location: " + student.Location()); // Display campus location
console.log("Date of Birth: " + student.dob);          // Display DOB
console.log("Grade: " + student.Studentgrade(55));     // Display student grade based on marks

// Creating and displaying an instance of the Person class
const person1 = new Person("Jim", 30, "jim@gmail.com");
console.log("Using Person Module:", person1.getPersonInfo()); // Display person info

// Exercise 4: Using Node.js core 'os' module to get system info
const os = require("os");
const util = require('util');

// Displaying various system information
console.log("Temporary Directory: " + os.tmpdir());
console.log("Hostname: " + os.hostname());
console.log("OS: " + os.platform() + ", Release: " + os.release());
console.log("Uptime: " + (os.uptime() / 3600).toFixed(2) + " hours");
console.log("User Info: " + util.inspect(os.userInfo()));
console.log("Total Memory: " + (os.totalmem() / 1e9).toFixed(2) + " GB");
console.log("Free Memory: " + (os.freemem() / 1e9).toFixed(2) + " GB");
console.log("CPU Info: " + util.inspect(os.cpus()));
console.log("Network Interfaces: " + util.inspect(os.networkInterfaces()));

console.log("Program end");
