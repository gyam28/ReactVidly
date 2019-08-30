import { Component } from "react";

class MovieInfo extends Component {
  state = {
    movie: this.props.movie
  };

  render() {
    const {
      _id,
      title,
      genre,
      numberInStock,
      dailyRentalRate
    } = this.state.movie;
    return <div />;
  }
}

export default MovieInfo;
