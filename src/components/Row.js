import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './Row.scss';

function Row({title, fetchUrl, isPoster}) {

  const baseUrl = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);

    }
    fetchData();
  }, []);

  return (
    <div className='row'>
      <h2 className="row__title">{title}</h2>
      <div className="row__images">
        {movies.map((movie) => (
          <div key={movie.id}>
            {isPoster ? (
            <img src={`${baseUrl}/${movie.poster_path}`} 
                 alt="{movie?.name || movie?.original_title}" 
                 className="row__image" 
            />
            ) : (
              <img src={`${baseUrl}/${movie.backdrop_path}`} 
                 alt="{movie?.name || movie?.original_title}" 
                 className="row__image" 
              />
            )}
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Row;