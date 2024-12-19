// StudentInfo.js
// © Amirali Talebi 2024
// This module exports student information and grading functions

// Define student date of birth as a constant
const dateofBirth = "12/12/1980";

// Function to get the student's name
const getStudentName = () => "Your Name Here";

// Function to get the campus name
const getCampusName = () => "UEL Campus";

// Exporting functions and variables to make them accessible in other modules
exports.getName = getStudentName;
exports.Location = getCampusName;
exports.dob = dateofBirth;

// Function to calculate grade based on marks and export it
exports.Studentgrade = (marks) => {
    if (marks > 50 && marks < 70) return "B grade";
    else return "A grade";
};
