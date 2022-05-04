import React, { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "axios";
const url = "http://192.168.10.79:8080/authenticate";

const Loginissimo = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setAuth({ username, token });
  }, [token, setAuth, username]);

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
        setToken(res.data.token);
        setSuccess(true);
      })
      .catch((error) => {
        if (!error?.response) {
          setErrMsg("No server response");
        } else if (error.response?.status === 400) {
          setErrMsg("Missing username or password");
        } else if (error.response.status === 401) {
          setErrMsg("Unauthorized");
        } else {
          setErrMsg("Login failed");
        }
        errRef.current.focus();
      });
  };

  // } catch (err) {
  //   if (!err?.response) {
  //     setErrMsg("NO SERVER RESPONSE");
  //   } else if (err.response?.status === 400) {
  //     setErrMsg("MISSING USERNAME OR PASSWORD");
  //   } else if (err.response?.status === 401) {
  //     setErrMsg("UNAUTHORIZED");
  //   } else {
  //     setErrMsg("LOGIN FAILED");
  //   }
  //   errRef.current.focus();
  // }

  return (
    <>
      {success ? (
        <section>
          <h1>logged in</h1>
          <br />
          <p>CIAO</p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              onChange={handleUsername}
              ref={userRef}
              value={username}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              autoComplete="off"
              onChange={handlePassword}
              value={password}
              required
            />
            <button>Sign In</button>
          </form>
        </section>
      )}
    </>
  );
};

export default Loginissimo;
