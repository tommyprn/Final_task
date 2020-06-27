import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/js/header";
import Home from "./pages/js/home";
import AddArtist from "./pages/js/artist";
import AddSong from "./pages/js/song";
import Login from "./component/js/login";
import Register from "./component/js/register";
import Plan from "./pages/js/plan";
import Transaction from "./pages/js/transaction";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />

          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/register">
              <Register />
            </Route>

            <Route exact path="/upgrade-plan">
              <Plan />
            </Route>

            <Route exact path="/transaction">
              <Transaction />
            </Route>

            <Route exact path="/song">
              <AddSong />
            </Route>

            <Route exact path="/artist">
              <AddArtist />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
