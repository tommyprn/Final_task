import React, { Component } from "react";
import "../css/home.css";
import { connect } from "react-redux";
import { getAllSong } from "../../redux/actions/song";
// import { Link } from "react-router-dom";

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
        <p className="summary-home">Connect on DumbSound</p>

        <p className="summary-tambahan-home">
          Discover, Stream, and share a constantly expanding mix of music from
          emerging and major artists around the globe
        </p>

        <div className="thumbnail-song-home">
          <div className="row justify-content-start">
            {a.map((song) => {
              return (
                //   <Link to="/detail" key={tvseries.id}>
                <div>
                  <img
                    className="timbul"
                    src={song.thumbnail}
                    alt="Singles thumbnail"
                  />
                  <p></p>
                  <p>{song.title}</p>
                  <p className="release-year">{song.year}</p>
                </div>
                //   </Link>
              );
            })}
          </div>
        </div>
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
