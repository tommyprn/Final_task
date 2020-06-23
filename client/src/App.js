import React, { Component } from "react";
import "./App.css";
import Header from "./component/js/header";
import Home from "./pages/js/home";
import AddArtist from "./pages/js/artist";
import AddSong from "./pages/js/song";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <AddArtist />
      </div>
    );
  }
}
export default App;
