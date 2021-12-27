import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Spinner from "../components/Spinner/Spinner";
import MovieDetailsStyles from "./MovieDetails.module.css";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true)
  console.log(movieId);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWQ5MGU0OGQ3MjM4MGY5NTBmYjMwMTBiOGViMTE5NSIsInN1YiI6IjYxYzRlNTY5MzNhZDhmMDA0Mzk5MzE0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LZJSfmBSfltJWO4RhanKEskwKhEcIfjcU4HWGc7eIWk",
        "Content-type": "application/json;charset=utf-8",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setMovie(res);
        setIsLoading(false)
      });
  }, [movieId]);

  if (isLoading) {
    return(
      <Spinner/>
    )
  }

  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <div
      className={`${MovieDetailsStyles.details__container} ${MovieDetailsStyles.movie__details}`}
    >
      <img
        src={imageUrl}
        alt={movie.title}
        className={`${MovieDetailsStyles.movie__image} ${MovieDetailsStyles.col}`}
      />
      <div className={MovieDetailsStyles.col}>
        <p className={MovieDetailsStyles.first__item}>
          <strong>Tittle:</strong> {movie.title}
        </p>
        <p>
          {" "}
          <strong>Genres: </strong>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
