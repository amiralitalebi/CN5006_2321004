import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function DeleteBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const deleteBook = () => {
    axios
      .post(`http://localhost:5000/deleteBook/${id}`)
      .then((res) => {
        alert(res.data);
        navigate("/DisplayBooksF1");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mt-5">
      <h3>Are you sure you want to delete this book?</h3>
      <button className="btn btn-danger me-3" onClick={deleteBook}>
        Yes, Delete
      </button>
      <button className="btn btn-secondary" onClick={() => navigate("/DisplayBooksF1")}>
        Cancel
      </button>
    </div>
  );
}
