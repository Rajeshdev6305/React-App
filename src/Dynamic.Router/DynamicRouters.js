import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DynamicRouter from "../Dynamic.Router/DynamicRouter";
import MoviesDetails from "../Dynamic.Router/MoviesDetails";

function DynamicRouters() {
  return (
    <Router>
      <div
        className="total"
        style={{
          backgroundColor: "orange",
          padding: "15px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <Link to="/movies">Products</Link>
        </div>
      </div>
      <Routes>
        <Route path="/movies" element={<DynamicRouter />} />
        <Route path="/movies/:id" element={<MoviesDetails />} />
      </Routes>
    </Router>
  );
}

export default DynamicRouters;
