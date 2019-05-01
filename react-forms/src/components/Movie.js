import React, { Fragment } from "react";

const Movie = props => {
  const { title, director, hasOscars, IMDbRating } = props;
  return (
    <Fragment>
      <h2>{title}</h2>
      <p>directed by: {director}</p>
      <p>IMDbRating: {IMDbRating}</p>
      {hasOscars && <h4>Award winning movie</h4>}
    </Fragment>
  );
};

export default Movie;
