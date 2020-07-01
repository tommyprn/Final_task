import React, { Component } from "react";
import "../css/songgrid.css";

class SongGrid extends Component {
  render() {
    return (
      <div className="thumbnail-song">
        <div className="row justify-content-start">
          {this.props.a.map((song, i) => {
            return (
              <div className="thumbnail-container" key={i}>
                <img
                  className="song-box"
                  src={song.thumbnail}
                  alt="Singles thumbnail"
                  onClick={() => {
                    this.props.setPlayIndex(i);
                    if (this.props.audioInstance)
                      this.props.play
                        ? this.props.audioInstance.pause()
                        : this.props.audioInstance.play();
                  }}
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
    );
  }
}

export default SongGrid;
