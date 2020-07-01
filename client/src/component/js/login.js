import React from "react";
import "../css/login.css";
import { connect } from "react-redux";
import { login } from "../../redux/actions/user";
import { Modal, Form } from "react-bootstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  handleChange = (event) => {
    const { data } = this.state;
    this.setState({
      data: { ...data, [event.target.name]: event.target.value },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state.data);
    this.setState({ data: {} }, this.props.onHide);
  };

  render() {
    const { data } = this.state;
    // console.log(this.props.user);
    // console.log(this.props.isLogin);
    return (
      <Modal size="sm" show={this.props.show} onHide={this.props.onHide}>
        <Modal.Body className="modaldasar">
          <Modal.Title>
            <p className="judulmodal">Login</p>
          </Modal.Title>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail" className="email">
              <Form.Control
                name="email"
                type="email"
                value={data.email ? data.email : ""}
                placeholder="Email"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="pass">
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                value={data.password ? data.password : ""}
                onChange={this.handleChange}
              />
            </Form.Group>

            <button type="submit" className="tombollogin">
              Login
            </button>
            <p className="kalimat-baru">
              New on DumbSound?
              <a href="/register" className="redirect-register">
                {" "}
                Click Here
              </a>
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isLogin: state.user.isLogin,
  };
};

export default connect(mapStateToProps, { login })(Login);
