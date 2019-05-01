import React from "react";

class MovieForm extends React.Component {
  state = {
    title: "",
    director: ""
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Add a movie</h1>
        <form>
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

          <input type="submit" value="Add" />
        </form>
      </React.Fragment>
    );
  }
}

export default MovieForm;
