import React from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "../css/player.css";

const MusicPlayer = ({
  music,
  playIndex,
  getAudioInstance,
  onPlayHandler,
  onPauseHandler,
}) => {
  const x = Object.values(music);
  const playlist = x.map((music) => ({
    name: music.title,
    singer: music.Artist.name,
    cover: music.thumbnail,
    musicSrc: music.attachment,
  }));

  return (
    <div>
      <ReactJkMusicPlayer
        mode="full"
        audioLists={playlist}
        defaultPlayIndex={0}
        autoPlay={false}
        showDownload={false}
        showThemeSwitch={false}
        toggleMode={false}
        responsive={false}
        glassBg={true}
        playIndex={playIndex}
        getAudioInstance={getAudioInstance}
        onAudioPlay={onPlayHandler}
        onAudioPause={onPauseHandler}
      />
      ,
    </div>
  );
};

export default MusicPlayer;

// class App extends Component {

//   constructor(){
//     super()
//     this.state = {
//         playIndex: 0
//     }
//     this.audioInstance = null
//     this.play = true
// }

//   setPlayIndex = (e) => {
//     this.setState({playIndex: e})
//   }

//   getAudioInstance = (instance) => {
//     this.audioInstance = instance;
//   };

//   onPlayHandler = () => this.play = true;
//   onPauseHandler = () => this.play = false;

//   componentDidMount(){
//     this.props.getMusics()
//   }

//   render(){
//     let { open } = this.props;
//     const { data: listMusic } = this.props.music;

//     return (
//       <div>

//       {
//           <Jumbotron ids={1} />
//       }
//       {
//           open ?
//           ( <>
//               <MusicList music={listMusic}
// setPlayIndex={this.setPlayIndex}
// playIndex={this.state.playIndex}
// audioInstance={this.audioInstance}
// play={this.play}
//               />

// <MusicPlayer
// music={listMusic}
// setPlayIndex={this.setPlayIndex}
// playIndex={this.state.playIndex}
// getAudioInstance={this.getAudioInstance}
// onPlayHandler={this.onPlayHandler}
// onPauseHandler={this.onPauseHandler}
//               />
//             </>
//           ) :
//           (<MusicListGuest />   )
//       }

//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//       music: state.music
//   };
// };

// export default connect(mapStateToProps, { getMusics })(App);
