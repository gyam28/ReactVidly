import React, { Component } from "react";
import { getGames } from "../services/gamesProvider";

class Games extends Component {
  state = { games: getGames() };

  handleDelete(game) {
    const games = this.state.games.filter(g => g._id !== game._id);
    this.setState({ games });
  }

  render() {
    return (
      <div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Price</th>
              <th scope="col">Used Price</th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>
            {this.state.games.map(game => (
              <tr>
                <td>{game.title} </td>
                <td>{game.genre} </td>
                <td>{game.price} </td>
                <td>{game.usedPrice} </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(game)}
                    type="button"
                    class="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Games;
