import React, { Component } from "react";
import "../css/header.css";
import { Link, withRouter } from "react-router-dom";
import LoginModal from "../js/login";
import RegisterModal from "./register";
import { Dropdown, DropdownButton, Image } from "react-bootstrap";

function User(props) {
  return (
    <div>
      <li className="profile-dropdown-list">
        <i
          class="far fa-address-card"
          style={{ margin: "10px", color: "red" }}
        />
        Play
      </li>
      <Link to="/upgrade-plan">
        <li className="profile-dropdown-list">
          <i class="fas fa-donate" style={{ margin: "10px", color: "red" }}></i>
          Payment
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

function UserButton(props) {
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
        <button onClick={props.handleLogoutClick} className="Logout">
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

  //jadi ini saat di click loginnya dia langsung set isLoggedIn jadi true mas tanpa verifikasi
  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    localStorage.removeItem("token");
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    // let token = false;
    // if (localStorage.token) {
    //   token = true;
    // }

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

          {isLoggedIn ? (
            <UserButton handleLogoutClick={this.handleLogoutClick} />
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
                handleLoginClick={this.handleLoginClick}
              />
            )}
          </>
        )}
      </>
    );
  }
}

export default withRouter(Header);
