import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import Spinner from "../Spinner/Spinner";
import MoviesStyles from "./Movies.module.css";
import { useQuery } from "../hooks/useQuery";
import InfiniteScroll from "react-infinite-scroll-component";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true)

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    const searchUrl = search
      ? "https://api.themoviedb.org/3/search/movie?query=" +
        search +
        "&page=" +
        page
      : "https://api.themoviedb.org/3/discover/movie?page=" + page;

    fetch(searchUrl, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWQ5MGU0OGQ3MjM4MGY5NTBmYjMwMTBiOGViMTE5NSIsInN1YiI6IjYxYzRlNTY5MzNhZDhmMDA0Mzk5MzE0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LZJSfmBSfltJWO4RhanKEskwKhEcIfjcU4HWGc7eIWk",
        "Content-type": "application/json;charset=utf-8",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setMovies((prevMovies) => prevMovies.concat(res.results));
        setHasMore(res.page < res.total_pages);
        setIsLoading(false);
        console.log(movies);
      });
  }, [search, page]);

  return (
    <>
      <InfiniteScroll
        dataLength={movies.length}
        hasMore={hasMore}
        loader={<Spinner/>}
        next={() => setPage((prevPage) => prevPage + 1)}
      >
        <div className={MoviesStyles.movies__grid}>
          {movies.map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Movies;
