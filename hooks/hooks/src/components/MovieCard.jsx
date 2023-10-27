import React from "react";

const MovieCard = ({title, description, posterUrl, rating}) => {
    return(
    <>
        <h1>Title: {title}</h1>
        <p>Descreption: {description}</p>
        <p>Poster URL: {posterUrl}</p>
        <p>Rating: {rating}</p>
    
    </>
)}

export default MovieCard;