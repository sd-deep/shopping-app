import React from "react";

import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assests/crown.svg";

import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

const Header = (props) => {
  const { currentUser } = props;
  console.log(currentUser);
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/shop" className="option">
          Contact Us
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
        ) : (
          <Link to="/signin" className="option">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
