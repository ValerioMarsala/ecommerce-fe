import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const url = "http://localhost:8080/authenticate";

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(url, { username, password })
      .then((res) => {
        setToken(res.data);
        console.log(token);
        navigate("/");
      })
      .catch((error) => {
        alert("ERRORE");
      });
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Input
          type="username"
          name="username"
          placeholder="Username"
          autoComplete="none"
          onChange={handleUsername}
          value={username}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handlePassword}
          value={password}
        />
        <Button type="submit">Sign In</Button>
        <BottomContainer>
          <Register>
            <Link to="/register">Register</Link>
          </Register>
          <ForgotPass>
            <Link to="/forgotpassword">Forgot your password?</Link>
          </ForgotPass>
        </BottomContainer>
      </Form>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #d9d9da;
  color: black;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;

  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(100, 100, 100, 0.8);
  }
`;

const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #090b13;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Register = styled.button`
  margin: 6px;

  a {
    text-decoration: none;
    color: black;
  }
`;

const ForgotPass = styled(Register)``;
