import React, { Component } from "react";
import "../css/plan.css";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { addTransaction } from "../../redux/actions/transaction";

class Plan extends Component {
  constructor(props) {
    super(props);

    this.state = { data: {} };
  }

  handleChange = (event) => {
    this.setState({ data: event.target.files[0] });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.addTransaction(this.state.data, this.props.user.data.id);
    this.setState({ data: {} });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="premium">
        <div className="upgrade-plan">
          <h2>Upgrade Plan Premium</h2>
          <p></p>
          <p>
            Upgrade plan now and enjoy over 12000 music from around the world{" "}
            <span className="dumb">DUMB</span>
            SOUND
          </p>
          <p className="dumbsound">
            DUMB<span className="dumbsound-phone">SOUND: 0981312323</span>
          </p>
          <form className="form-add-transaction" onSubmit={this.handleSubmit}>
            <Form.Group controlId="form-basic" className="nomor-id">
              <Form.Control />
            </Form.Group>
            <label className="bukti-trf">
              <input
                type="file"
                name="attachment"
                value={data.attachment ? data.attachment : ""}
                onChange={this.handleChange}
              />
              Attach Transfer Proof
            </label>
            <p></p>
            {/* <img src={"http://localhost:5000/public/" + this.state.data.name} /> */}

            <button type="submit" className="kirim">
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    transaction: state.transaction,
    user: state.user,
  };
};

export default connect(mapStateToProps, { addTransaction })(Plan);
