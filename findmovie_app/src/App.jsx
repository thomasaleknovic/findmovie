import { useState } from 'react'
import React from 'react';
import './App.css';
import tmdb from './API/tmdb';
import Movie from './Movie/Movie';

function App() {

  const [featuredData, setFeaturedData] = useState();
  const [showMovie, setShowMovie] = useState(false);
  const buttonClick = () => {
    return (
      setShowMovie(true),
      changeMovie()
      
    )
  
  };

  const changeMovie = async () => {
      let movies = await tmdb.getMovieList();
      let netflixMovies = movies.filter(i=>i.slug === 'netflixMovies');
      let randomChosen = Math.floor(Math.random() * (netflixMovies[0].items.results.length -1));
      let chosen = netflixMovies[0].items.results[randomChosen]
      setFeaturedData(chosen)
  }

  return (

    <div>
      <div className='header--question'>
        <img src='./assets/shuffle.svg' alt='shuffle_logo' width={90}></img>
        <p>Não sabe o que assistir?</p>
      </div>

      {showMovie &&
        <div className='main--movie'>
          {featuredData &&
              <Movie movieData={featuredData} />
          }
        </div>
      }

      <div className='button--find'>
        <button onClick={buttonClick}>
          <img src='./assets/shuffle.svg' width={30}></img>
          <span>Encontrar filme</span>
        </button>
        <p>Clique em "Encontrar filme" que traremos informações de algum filme para você assistir hoje.</p>
      </div>
      
    </div>
  )
}

export default App
