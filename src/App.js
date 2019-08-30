import React from "react";
import Movies from "./components/movies.jsx";
import NavBar from "./components/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import NotFound from "./components/notfound";
import MovieForm from "./components/movieForm";
import "./App.css";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerform";
import NewMovieForm from "./components/newmovieform.jsx";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <div className="content">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/movies/:id" component={NewMovieForm} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/movies" component={Movies} />
            <Route path="/not-found" component={NotFound} />
            <Redirect exact from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
