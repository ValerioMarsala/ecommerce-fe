import React, { useContext } from "react";
import Cart from "./Cart";
import HamburgerButton from "./HamburgerButton";
import SearchBar from "./SearchBar";

import AuthContext from "../../context/AuthProvider";
function Header() {
  const { auth } = useContext(AuthContext);

  const imgStyle = {
    height: "100%",
    maxHeight: 43,
  };

  const imgCart = {
    position: "fixed",
    right: 10,
    bottom: 10,
  };

  const navHeight = {
    height: 68,
  };

  return (
    <div>
      <div className="w3-top" style={navHeight}>
        <div className="w3-bar w3-black w3-card w3-row">
          <div
            className="w3-bar-item w3-padding w3-col l3 m2 s2"
            style={{ display: "flex" }}
          >
            <a href="/" style={{ margin: "auto" }}>
              <img
                src="/images/logo-low.png"
                alt="Amazzon"
                className="w3-hide-small w3-hide-medium"
                style={imgStyle}
              />
              <img
                src="/images/logo-small-low.png"
                alt="Amazzon"
                className="w3-hide-large"
                style={imgStyle}
              />
            </a>
          </div>
          <div className="w3-bar-item w3-padding w3-col l6 m6 s6">
            <SearchBar />
          </div>
          {!auth.token ? (
            <div
              className="w3-bar-item w3-padding w3-col l2 m2 s2"
              style={{ display: "flex" }}
            >
              <a
                href="/login"
                className="w3-button w3-white w3-round-large"
                style={{ margin: "auto" }}
              >
                LogIn
              </a>
            </div>
          ) : (
            <div
              className="w3-bar-item w3-padding w3-col l2 m2 s2"
              style={{ display: "flex" }}
            >
              <div
                className="w3-button w3-white w3-round-large"
                style={{ margin: "auto", cursor: "default" }}
              >
                Benvenuto, {auth.username}
              </div>
            </div>
          )}
          <div className="w3-bar-item w3-padding w3-col l1 m2 s2">
            <HamburgerButton />
          </div>
        </div>
        <div
          className="w3-button w3-padding w3-circle w3-black"
          style={imgCart}
        >
          <Cart />
        </div>
      </div>
      <div style={navHeight}></div>
    </div>
  );
}

export default Header;