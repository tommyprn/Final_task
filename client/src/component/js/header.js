import React, { Component } from "react";
import "../css/header.css";
import { Link } from "react-router-dom";
import LoginModal from "../js/login";
import RegisterModal from "./register";
import { connect } from "react-redux";
import { getUser, logout } from "../../redux/actions/user";
import { Dropdown, DropdownButton, Image } from "react-bootstrap";

function User(props) {
  return (
    <div>
      <Link to="/upgrade-plan">
        <li className="profile-dropdown-list">
          <i class="fas fa-donate" style={{ margin: "10px", color: "red" }}></i>
          Upgrade Plan
        </li>
      </Link>
    </div>
  );
}

function Admin(props) {
  return (
    <div>
      <Link to="/Song">
        <li className="profile-dropdown-list">
          <i class="fas fa-music" style={{ margin: "10px", color: "red" }}></i>
          Add Music
        </li>
      </Link>
      <Link to="/artist">
        <li className="profile-dropdown-list">
          <i
            class="fas fa-user-plus"
            style={{ margin: "10px", color: "red" }}
          ></i>
          Add Artist
        </li>
      </Link>
      <Link to="/transaction">
        <li className="profile-dropdown-list">
          <i class="fas fa-donate" style={{ margin: "10px", color: "red" }}></i>
          Transaction
        </li>
      </Link>
    </div>
  );
}

class UserButton extends Component {
  render() {
    let a = localStorage.getItem("role");
    return (
      <div className="header-right">
        <DropdownButton
          alignRight
          title={
            <Image
              src={
                "https://img.favpng.com/7/7/17/portrait-drawing-visual-arts-painting-png-favpng-9sxWdF91pWRzCKrTnzgHHrpET_t.jpg"
              }
              roundedCircle
              className="foto-profile"
            />
          }
          id="dropdown-menu"
          variant="black"
          className="drop-button"
        >
          {a === "true" ? <Admin /> : <User />}

          <Dropdown.Divider />
          <button className="Logout" onClick={this.props.logout}>
            <li className="profile-dropdown-list">
              <i
                class="fas fa-times"
                style={{ margin: "10px", color: "red" }}
              ></i>
              Logout
            </li>
          </button>
        </DropdownButton>
      </div>
    );
  }
}

function AuthButton(props) {
  return (
    <div className="header-right">
      <button
        onClick={() => props.handleToggleModal(true)}
        className="register"
      >
        Register
      </button>

      <button onClick={() => props.handleToggleModal(false)} className="login">
        Login
      </button>
    </div>
  );
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false, isRegis: false };
  }

  handleToggleModal = (isRegis = false) => {
    this.setState({ isRegis }, () => {
      this.setState(({ isModalOpen }) => {
        return { isModalOpen: !isModalOpen };
      });
    });
  };

  handleLoggedIn = () => {
    this.setState({ isLogin: true });
  };

  // handleLogout = () => {
  //   localStorage.removeItem("role");
  //   localStorage.removeItem("id");
  //   localStorage.removeItem("token");
  //   this.setState({ isLogin: false });
  // };

  // isLoggedOut = (isLoggedOut) => {
  //   this.setState({ logout: isLoggedOut });
  //   console.log(this.isLogout);
  // };

  render() {
    const { data } = this.props.user;
    console.log(this.props.isLogin);
    return (
      <>
        <div className="header">
          <div className="header-left">
            <Link to="/">
              <img
                src={"https://i.ibb.co/w48mSWX/DUMBSOUND-1.png"}
                alt="Logo"
              />
            </Link>
          </div>

          {this.props.isLogin ? (
            <UserButton logout={this.props.logout} />
          ) : (
            <AuthButton handleToggleModal={this.handleToggleModal} />
          )}
        </div>

        {this.state.isModalOpen && (
          <>
            {this.state.isRegis ? (
              <RegisterModal
                show={this.state.isModalOpen}
                onHide={() => this.handleToggleModal(true)}
              />
            ) : (
              <LoginModal
                show={this.state.isModalOpen}
                onHide={this.handleToggleModal}
                handleLoggedIn={this.handleLoggedIn}
              />
            )}
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isLogin: state.user.isLogin,
  };
};

export default connect(mapStateToProps, { getUser, logout })(Header);
