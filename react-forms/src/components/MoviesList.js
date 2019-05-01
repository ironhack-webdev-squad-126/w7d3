import React, { Fragment } from "react";
import Movie from "./Movie";

const MoviesList = props => {
  return (
    <Fragment>
      {props.movies.map((el, i) => {
        return <Movie key={i} {...el} />;
      })}
    </Fragment>
  );
};

export default MoviesList;
