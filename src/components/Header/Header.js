/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Cart from './Cart'
import HamburgerButton from './HamburgerButton'
import SearchBar from './SearchBar'

function Header() {
  const navigate = useNavigate();

  const signIn = () => {
    navigate("/login");
  };

  const imgStyle = {
    height: "100%",
    maxHeight: 43,
  }

  const imgCart = {
    position: "fixed",
    right: 10,
    bottom: 10
  }

  const navHeight = {
    height: 68
  }

  return (
    <div>
    <div className='w3-top' style={navHeight}>
      <div className='w3-bar w3-black w3-card w3-row'>
        <div className='w3-bar-item w3-padding-large w3-col l3 m2 s2' style={{display:"flex"}}>
          <a href="#" style={{margin: "auto"}}>
            <img src="/images/logo-low.png" alt="Amazzon" className="w3-hide-small w3-hide-medium" style={imgStyle} />
            <img src="/images/logo-small-low.png" alt="Amazzon" className="w3-hide-large" style={imgStyle} />
          </a>
        </div>
        <div className='w3-bar-item w3-padding-large w3-left  w3-col l8 m8 s8'><SearchBar /></div>
        <div className='w3-bar-item w3-padding-large w3-col l1 m2 s2'><HamburgerButton /></div>
      </div>
      <div className='w3-button w3-padding-large w3-circle w3-black' style={imgCart}><Cart /></div>
    </div>
    <div style={navHeight}></div>
    </div>

    /*
        <Nav>
          <Logo src="/images/logo.png" />
          <NavMenu>
            <a>
              <input />
              <span>SEARCH</span>
            </a>
          </NavMenu>
          <LoginBtnContainer>
            <LoginButton onClick={signIn}>Login</LoginButton>
          </LoginBtnContainer>
        </Nav>
    
        */
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  color: white;
  a {
    display: flex;
    align-items: center;
    padding: 0 20px;
    cursor: pointer;

    input {
      height: 30px;
      width: 600px;
      margin-right: 10px;
    }

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
    }
  }
`;
// const UserImg = styled.img`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   cursor: pointer;
// `;
const LoginButton = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;
  color: white;

  &:hover {
    background: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
const LoginBtnContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
