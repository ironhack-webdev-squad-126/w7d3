import React from "react";
import MoviesList from "./MoviesList";
import MovieForm from "./MovieForm";

class Movies extends React.Component {
  state = {
    movies: [
      {
        title: "The Godfather",
        director: "Francis Coppola",
        hasOscars: true,
        IMDbRating: 9.2
      },
      {
        title: "Star Wars",
        director: "Rian Johnson",
        hasOscars: true,
        IMDbRating: 8.7
      },
      {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        hasOscars: false,
        IMDbRating: 9.3
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <MovieForm />
        <MoviesList movies={this.state.movies} />
      </React.Fragment>
    );
  }
}

export default Movies;
