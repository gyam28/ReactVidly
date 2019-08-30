import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/pagination";
import ListGroup from "./common/listgroup";
import MoviesTable from "./moviesTable";
import { Link } from "react-router-dom";
import _ from "lodash";
import Searchbox from "./search";

class Movies extends Component {
  state = {
    movies: [],
    likedMovies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" }
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = movieId => {
    let movies = this.state.movies.filter(movie => movie._id !== movieId);
    this.setState({ movies });
  };

  handleLikeToggle = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].isLiked = !movies[index].isLiked;

    this.setState({ movies });
  };

  handlePageChange = pag => {
    this.setState({ currentPage: pag });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      searchQuery,
      movies: allMovies
    } = this.state;

    console.log(this.state.searchQuery);
    console.log(this.state.selectedGenre);

    let filtered = allMovies;
    if (searchQuery) {
      filtered = allMovies.filter(m =>
        m.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (selectedGenre && selectedGenre._id) {
      filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);
    }

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    const { totalCount, data: movies } = this.getPagedData();

    const { history } = this.props;

    return totalCount === 0 ? (
      <h3> There are no movies in the database</h3>
    ) : (
      <div className="col">
        <Link
          to="/movies/new"
          className="btn btn-primary"
          style={{ marginBottom: 20 }}
        >
          New Movie
        </Link>
        <h3> {"Showing " + totalCount + " movies in the database."}</h3>

        <div className="row">
          <div className="col col-2">
            <ListGroup
              items={this.state.genres}
              onItemSelect={this.handleGenreSelect}
              selectedItem={this.state.selectedGenre}
            />
          </div>

          <div className="col">
            <Searchbox value={searchQuery} onChange={this.handleSearch} />
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onDelete={this.handleDelete}
              onLikeToggle={this.handleLikeToggle}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
