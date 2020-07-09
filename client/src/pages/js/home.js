import React, { Component } from "react";
import "../css/home.css";
import { connect } from "react-redux";
import { getAllSong } from "../../redux/actions/song";
import Player from "../../component/js/player";
import SongGrid from "../../component/js/songgrid";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      playIndex: 0,
    };
    this.audioInstance = null;
    this.play = true;
  }

  setPlayIndex = (e) => {
    this.setState({ playIndex: e });
  };

  getAudioInstance = (instance) => {
    this.audioInstance = instance;
  };

  onPlayHandler = () => (this.play = true);
  onPauseHandler = () => (this.play = false);

  componentDidMount() {
    this.props.getAllSong();
  }

  render() {
    const { data: songData } = this.props.song;
    let a = Object.values(songData);
    const user = this.props.user;
    return (
      <div className="homes">
        <img
          src="https://i.ibb.co/rsPZqRW/lantern.jpg"
          alt="jumbotron"
          className="jumbo-tron"
        />
        <div className="rectangle"></div>
        <div className="row justify-content-center">
          <p className="summary-home">Connect on DumbSound</p>
        </div>
        <div className="row justify-content-center">
          <p className="summary-tambahan-home">
            Discover, Stream, and share a constantly expanding mix of music from
            emerging and major artists around the globe
          </p>
        </div>

        <div className="row justify-content-center">
          <p className="extend-text">Start your music journey now</p>
        </div>

        <SongGrid
          a={a}
          setPlayIndex={this.setPlayIndex}
          playIndex={this.state.playIndex}
          audioInstance={this.audioInstance}
          play={this.play}
        />
        {this.props.isLogin && user.data.status ? (
          <Player
            music={songData}
            setPlayIndex={this.setPlayIndex}
            getAudioInstance={this.getAudioInstance}
            playIndex={this.state.playIndex}
            onPlayHandler={this.onPlayHandler}
            onPauseHandler={this.onPauseHandler}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    song: state.song,
    user: state.user,
    isLogin: state.user.isLogin,
  };
};

export default connect(mapStateToProps, { getAllSong })(Home);
