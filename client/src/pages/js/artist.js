import React, { Component } from "react";
import "../css/artist.css";
import { connect } from "react-redux";
import { postArtist } from "../../redux/actions/artist";

class AddArtist extends Component {
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
    this.props.postArtist(this.state.data);
    this.setState({ data: {} });
  };

  render() {
    const { data } = this.state;

    return (
      <form className="form-add-episode" onSubmit={this.handleSubmit}>
        <p className="judul-add-episode">Add Artist</p>
        <div>
          <input
            name="name"
            value={data.name ? data.name : ""}
            type="text"
            className="custom-input"
            placeholder="Artist Name"
            onChange={this.handleChange}
          />
        </div>

        <div>
          <input
            name="age"
            value={data.age ? data.age : ""}
            type="text"
            className="custom-input"
            placeholder="Age"
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group-basic">
          <input
            name="type"
            value={data.type ? data.linkEp : ""}
            type="text"
            className="custom-input"
            placeholder="Type"
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group-basic">
          <input
            name="debut"
            value={data.debut ? data.debut : ""}
            type="text"
            className="custom-input"
            placeholder="Debut year"
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
    artist: state.artist,
  };
};

export default connect(mapStateToProps, { postArtist })(AddArtist);
