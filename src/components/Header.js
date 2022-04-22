/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
// import {selectUserName, selectUserPhoto, setUserLogin, setSignOut} from '../features/user/userSlice'
// import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
// import { auth, provider } from '../firebase'

function Header() {
  //   const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const userName = useSelector(selectUserName);
  //   const userPhoto = useSelector(selectUserPhoto);

  //   useEffect(() => {
  //     auth.onAuthStateChanged(async (user) => {
  //       if(user){
  //         dispatch(setUserLogin({
  //           name: user.displayName,
  //           email: user.email,
  //           photo: user.photoURL
  //         }))
  //         navigate("/")
  //       }
  //     })
  //   },[])

  const signIn = () => {
    navigate("/login");
  };

  //   const signOut = () => {
  //     auth.signOut()
  //     .then(() =>{
  //       dispatch(setSignOut());
  //       navigate("/login");
  //     })
  //   }

  return (
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
