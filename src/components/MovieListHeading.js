// MovieListHeading.js

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const MovieListHeading = (props) => {
  return (
    <div className="col d-flex justify-content-between align-items-center">
      <Link to={props.to}>
        <h1>{props.heading}</h1>
      </Link>
      <Link to="/about" style={{ fontSize: "1.25em" }}>
        About
      </Link>{" "}
    </div>
  );
};

export default MovieListHeading;
