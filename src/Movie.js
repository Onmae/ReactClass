import React from "react";
import "./Movie.css";

function Movie(props) {
  const { img, title, rating, summary } = props;
  return (
    <div className="movie__container">
      <img src={img} alt="" />
      <div>{title}</div>
      <div>{rating}</div>
      <div>{summary}</div>
    </div>
  );
}

export default Movie;
