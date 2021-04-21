import React, { useContext } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase"
import { UserContext } from "../../App";
import '../../App.css'

const Navbar = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

  const handleSignout = ()=>{
    firebase.auth().signOut()
    .then(res => {
      const signedOutUser = {
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        error: '',
        success: false
      }
      setLoggedInUser(signedOutUser);
    }).catch(err => {
      // An error happened.
    });
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ height: "10vh", backgroundColor: "#111111" }}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          Digital Agency
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active fw-bold me-3 fs-5 text-light" aria-current="page" to="#">
                Home
              </Link>
            </li>
            {
              loggedInUser.displayName ?
              <li className="nav-item">
                <div className="pt-2">
                  <Link className="fw-bold me-3 fs-5 text-light" to="/dashboard">
                      Dashboard
                  </Link>
                  <img src={loggedInUser.photoURL} alt="" className="rounded-pill" height="30" width="30" />
                  <span className=" me-3 fs-5 text-light">{loggedInUser.displayName}</span>
                  <button onClick={handleSignout} className="btn fw-bold btn-gradient rounded-pill">Signout</button>
                </div>
              </li>
              :
              <li className="nav-item">
                <Link className="nav-link active fw-bold me-3 fs-5 text-light" to="/login">
                  Login
                </Link>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
