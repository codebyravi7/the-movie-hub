import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // http://api.themoviedb.org/3/trending/all/week?api_key=2b867b5f23f784527c965fcd9204df19&language=en-US
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); //bcoz fetchUrl is from outside of box whenever it changes th code runs again...

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      settrailerUrl("");
    } else {
      // https://www.youtube.com/watch?v=ErreReijBbU
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlParms = new URLSearchParams(new URL(url).search);
          settrailerUrl(urlParms.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>

      {/* container */}
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
