import React from "react";
import { Link } from "react-router-dom";
import MovieStyles from "./Movie.module.css";

const Movie = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  return (
    <>
      <div className={MovieStyles.movie__card}>
        <Link to={"/movies/" + movie.id}>
          <img src={imageUrl} alt="" className={MovieStyles.movie__image} />
          <div>{movie.title}</div>
        </Link>
      </div>
    </>
  );
};

export default Movie;
