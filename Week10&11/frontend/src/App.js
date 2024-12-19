import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddBook from "./components/AddBook";
import BookUpdate from "./components/BookUpdate";
import DeleteBook from "./components/DeleteBook";
import DsplyBk_fncCompt from "./components/DsplyBk_fncCompt";

export default function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Online Library
          </Link>
          <div>
            <Link to="/" className="btn btn-outline-light me-2">
              Add Book
            </Link>
            <Link to="/DisplayBooksF1" className="btn btn-outline-light">
              View Books
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<AddBook />} />
        <Route path="/edit/:id" element={<BookUpdate />} />
        <Route path="/delete/:id" element={<DeleteBook />} />
        <Route path="/DisplayBooksF1" element={<DsplyBk_fncCompt />} />
      </Routes>
    </Router>
  );
}
