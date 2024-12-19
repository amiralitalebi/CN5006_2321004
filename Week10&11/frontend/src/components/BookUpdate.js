import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function BookUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState({
    booktitle: "",
    author: "",
    formate: "",
    Topic: "",
    PubYear: 1990,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/getbook/${id}`)
      .then((res) => setState(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/updatebook/${id}`, state)
      .then((res) => {
        alert(res.data.message);
        navigate("/DisplayBooksF1");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mt-5">
      <h3>Update Book</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group mb-3">
          <label>Book Title:</label>
          <input
            type="text"
            name="booktitle"
            className="form-control"
            value={state.booktitle}
            onChange={handleChange}
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
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Book
        </button>
      </form>
    </div>
  );
}
