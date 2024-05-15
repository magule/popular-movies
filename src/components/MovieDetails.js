import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=b9755085a1372f833a8f6b6a50c5bf19`,
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details-card">
      <div className="card-header">
        <h2>{movieDetails.title}</h2>
      </div>
      <div className="card-body">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
          className="poster"
        />
        <div className="details">
          <p>
            <strong>Original Title:</strong> {movieDetails.original_title}
          </p>

          <p>
            <strong>Overview:</strong> {movieDetails.overview}
          </p>
          <hr />
          <p>
            <strong>Release Date:</strong> {movieDetails.release_date}
          </p>
          <p>
            <strong>Popularity:</strong> {movieDetails.popularity.toFixed(2)}
          </p>
          <p>
            <strong>Vote Average:</strong>{" "}
            {movieDetails.vote_average.toFixed(2)}
          </p>
          <p>
            <strong>Genres:</strong>{" "}
            {movieDetails.genre_ids && movieDetails.genre_ids.length > 0
              ? movieDetails.genre_ids.map((id) => `#${id}`).join(", ")
              : "No genres available"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
