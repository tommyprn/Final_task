import React, { Component } from "react";
import "../css/artist.css";
import { connect } from "react-redux";
import { postSong } from "../../redux/actions/song";
import { getAllArtist } from "../../redux/actions/artist";
import { Form } from "react-bootstrap";

class AddSong extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }

  handleChange = (event) => {
    const { data } = this.state;
    this.setState({
      data: { ...data, [event.target.name]: event.target.value },
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postSong(this.state.data);
    this.setState({ data: {} });
  };

  componentDidMount() {
    this.props.getAllArtist();
  }

  render() {
    const { data } = this.state;
    const { data: dataArtist } = this.props.artist;

    return (
      <form className="form-add-episode" onSubmit={this.handleSubmit}>
        <p className="judul-add-episode">Add Artist</p>
        <div>
          <input
            name="title"
            value={data.title ? data.title : ""}
            type="text"
            className="custom-input"
            placeholder="Song title"
            onChange={this.handleChange}
          />
        </div>

        <div>
          <input
            name="year"
            value={data.year ? data.year : ""}
            type="text"
            className="custom-input"
            placeholder="Year release"
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group-basic">
          <input
            name="thumbnail"
            value={data.thumbnail ? data.thumbnail : ""}
            type="text"
            className="custom-input"
            placeholder="Thumbnail Link"
            onChange={this.handleChange}
          />
        </div>

        <Form.Control
          as="select"
          name="artistId"
          value={data.artistId}
          onChange={this.handleChange}
          placeholder="Artist"
          className="category-add-film"
        >
          {dataArtist.map((artist) => {
            return <option value={artist.id}>{artist.name}</option>;
          })}
        </Form.Control>

        <div className="form-group-basic">
          <input
            name="attachment"
            value={data.attachment ? data.attachment : ""}
            type="text"
            className="custom-input"
            placeholder="Songs link"
            onChange={this.handleChange}
          />
        </div>

        <button className="tombol-save-episode" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    song: state.song,
    artist: state.artist,
  };
};

export default connect(mapStateToProps, { getAllArtist, postSong })(AddSong);
