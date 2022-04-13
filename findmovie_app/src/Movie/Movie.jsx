import React from "react";
import './Movie.css'



export default ({movieData}) => {

    return (
        
        <div className="movie--container">
            <div className="movie--cover">
                 <img src={`https://image.tmdb.org/t/p/w200${movieData.poster_path}`} />
            </div>
            <div className="movie--info" >  
                <h2 className="movie--title">{movieData.title}</h2>
                <p className="movie--overview" >{movieData.overview}</p>
            </div>
        </div>
    )

}