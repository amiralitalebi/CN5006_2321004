import React, { useState } from "react";
import axios from "axios";

export default function AddBook() {
  const [state, setState] = useState({
    booktitle: "",
    author: "",
    formate: "",
    Topic: "",
    PubYear: 1990,
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/addbooks", state)
      .then((res) => alert("Book added successfully!"))
      .catch((err) => alert("Error adding book."));
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center">Add a New Book</h3>
      <form onSubmit={onSubmit} className="mt-4">
        <div className="form-group mb-3">
          <label>Book Title:</label>
          <input
            type="text"
            name="booktitle"
            className="form-control"
            value={state.booktitle}
            onChange={handleChange}
            placeholder="Enter book title"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Author:</label>
          <input
            type="text"
            name="author"
            className="form-control"
            value={state.author}
            onChange={handleChange}
            placeholder="Enter author's name"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Topic:</label>
          <select
            name="Topic"
            className="form-select"
            value={state.Topic}
            onChange={handleChange}
            required
          >
            <option value="">Select a topic</option>
            <option value="Programming">Programming</option>
            <option value="AI">AI</option>
            <option value="Data Science">Data Science</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label>Format:</label>
          <div>
            <label className="form-check-label me-3">
              <input
                type="radio"
                name="formate"
                value="Hard Copy"
                className="form-check-input"
                onChange={handleChange}
                required
              />{" "}
              Hard Copy
            </label>
            <label className="form-check-label">
              <input
                type="radio"
                name="formate"
                value="Electronic Copy"
                className="form-check-input"
                onChange={handleChange}
              />{" "}
              Electronic Copy
            </label>
          </div>
        </div>
        <div className="form-group mb-3">
          <label>Publication Year:</label>
          <input
            type="number"
            name="PubYear"
            className="form-control"
            value={state.PubYear}
            onChange={handleChange}
            min="1980"
            max="2025"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Add Book
        </button>
      </form>
    </div>
  );
}
