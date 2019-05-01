import React from "react";

class MovieForm extends React.Component {
  state = {
    title: "",
    director: "",
    IMDbRating: "5",
    hasOscars: false
  };

  handleChange = event => {
    let { name, value } = event.target;

    if (name === "hasOscars") value = !this.state.hasOscars;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, director, hasOscars, IMDbRating } = this.state;
    const movie = {
      title,
      director,
      hasOscars,
      IMDbRating
    };

    this.props.addMovie(movie);
    this.setState({
      title: "",
      director: "",
      hasOscars: false,
      IMDbRating: "5"
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Add a movie</h1>
        <form onSubmit={this.handleSubmit}>
          <label>title</label>
          <input
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />

          <label>director</label>
          <input
            type="text"
            name="director"
            onChange={this.handleChange}
            value={this.state.director}
          />

          <label>IMDb Rating</label>
          <input
            name="IMDbRating"
            type="text"
            onChange={this.handleChange}
            value={this.state.IMDbRating}
          />

          <label>has oscars?</label>
          <input
            name="hasOscars"
            type="checkbox"
            onChange={this.handleChange}
            checked={this.state.hasOscars}
          />

          <input type="submit" value="Add" />
        </form>
      </React.Fragment>
    );
  }
}

export default MovieForm;
