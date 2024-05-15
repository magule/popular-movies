// App.js
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import MovieDetails from "./components/MovieDetails";
import About from "./components/About";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => {
  const [movies, setMovies] = useState([]);

  const getPopularMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=b9755085a1372f833a8f6b6a50c5bf19`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      setMovies(responseJson.results);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <Router>
      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHeading heading="Popular Movies" to="/" />
        </div>
        <Jumbotron />
        <hr />
        <div className="row">
          <Routes>
            <Route path="/" element={<MovieList movies={movies} />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
