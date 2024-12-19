import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayData from "./DisplayData";

export default function DsplyBk_fncCompt() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/allbooks")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mt-5">
      <h3 className="text-center">All Books</h3>
      {books.length > 0 ? (
        <DisplayData books={books} />
      ) : (
        <p className="text-center mt-3">No books found.</p>
      )}
    </div>
  );
}
