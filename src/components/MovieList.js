import React from "react";
import { useNavigate } from "react-router-dom";

const MovieList = ({ movies, onMovieClick }) => {
  let navigate = useNavigate();

  const handleClick = (movieId) => {
    onMovieClick(movieId); // Call the passed function with the movie ID
    navigate("/"); // Navigate to the home page
  };

  return (
    <>
      {movies.map((movie, index) => (
        <div
          key={index}
          className="image-container d-flex flex-column align-items-center m-3"
        >
          <a href={`/movie/${movie.id}`}>
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            ) : (
              <div>No Poster Available</div>
            )}
          </a>
          <a href={`/movie/${movie.id}`} className="movie-title">
            {movie.title}
          </a>
          <br />
          <p>Vote Average: {movie.vote_average.toFixed(2)}</p>
          <p>Release Date: {movie.release_date}</p>
        </div>
      ))}
    </>
  );
};

export default MovieList;
