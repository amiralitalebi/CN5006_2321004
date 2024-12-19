// Person.js
// © Amirali Talebi 2024
// This module defines a Person class with a constructor and method to retrieve person info

// Define the student class with properties for name, age, and email
class student {
    constructor(name, age, email) {
        // Initialize properties with values passed to constructor
        this.name = name;
        this.age = age;
        this.email = email;
    }

    // Method to return a formatted string of person's information
    getPersonInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
    }
}

// Exporting the student class to make it available in other modules
module.exports = student;
