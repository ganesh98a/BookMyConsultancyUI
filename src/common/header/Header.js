import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from '../../assets/logo.jpeg';
import Login from '../../screens/login/Login';

  class Header extends Component {

      constructor() {
              super();
              this.state = {
                  modalIsOpen: false,
                  value: 0,
                  usernameRequired: "dispNone",
                  username: "",
                  loginPasswordRequired: "dispNone",
                  loginPassword: "",
                  firstnameRequired: "dispNone",
                  firstname: "",
                  lastnameRequired: "dispNone",
                  lastname: "",
                  emailRequired: "dispNone",
                  email: "",
                  registerPasswordRequired: "dispNone",
                  registerPassword: "",
                  contactRequired: "dispNone",
                  contact: "",
                  registrationSuccess: false,
                  loggedIn: sessionStorage.getItem("access-token") == null ? false : true
              }
          }

          openModalHandler = () => {
              this.setState({
                  modalIsOpen: true,
                  value: 0,
                  usernameRequired: "dispNone",
                  username: "",
                  loginPasswordRequired: "dispNone",
                  loginPassword: "",
                  firstnameRequired: "dispNone",
                  firstname: "",
                  lastnameRequired: "dispNone",
                  lastname: "",
                  emailRequired: "dispNone",
                  email: "",
                  registerPasswordRequired: "dispNone",
                  registerPassword: "",
                  contactRequired: "dispNone",
                  contact: ""
              });
          }

          closeModal = () => {
          this.setState({modalIsOpen: false});
          }

  render() {
  console.log(this.state.modalIsOpen);
  return (
  <div>
  <header className="app-header">
     <img src={logo} className="app-logo" alt="Doctor Finder Logo" />
      <span class="title"> Doctor Finder </span>
      <div className="login-button">
          <Button variant="contained" color="primary" onClick={this.openModalHandler}>
              Login
          </Button>
      </div>
   </header>
   <Login modalOpen={this.state.modalIsOpen} closeModal={this.closeModal}/>
    </div>
  );
}
}
export default Header;