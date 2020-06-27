import React, { Component } from "react";
import "../css/home.css";
import { connect } from "react-redux";
import { getAllSong } from "../../redux/actions/song";
import ReactJkMusicPlayer from "react-jinke-music-player";

class Home extends Component {
  componentDidMount() {
    this.props.getAllSong();
  }

  render() {
    const { data: songData } = this.props.song;
    let a = Object.values(songData);
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

        <div className="thumbnail-song">
          <div className="row justify-content-start">
            {a.map((song) => {
              return (
                <div className="thumbnail-container">
                  <img
                    className="song-box"
                    src={song.thumbnail}
                    alt="Singles thumbnail"
                  />
                  <div className="detail-container">
                    <div className="flex-text">
                      <p>{song.title}</p>
                      <p className="release-year">{song.year}</p>
                    </div>
                    <p className="artist-name">{song.Artist.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <ReactJkMusicPlayer
          mode="full"
          // audioLists={playlist}
          defaultPlayIndex={0}
          autoPlay={false}
          showDownload={false}
          showThemeSwitch={false}
          toggleMode={false}
          responsive={false}
          showMiniModeCover={true}
          showDestroy={true}
          showReload={false}
          // playIndex={playIndex}
          onAudioPlay={(audioInfo) => {}}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    song: state.song,
  };
};

export default connect(mapStateToProps, { getAllSong })(Home);
