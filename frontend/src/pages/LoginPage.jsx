/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import "../css/login.css";
import { loginUser, useAuthState, useAuthDispatch } from "../context";
import { useHistory } from "react-router-dom";
import logo from "../util/images/logo.gif";

export default function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  let history = useHistory();

  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState();

  const HandleFormSubmit = (e) => {
    e.preventDefault();
    let payload = { username, password };

    try {
      let response = loginUser(dispatch, payload);
      if (!response) {
        return;
      } else {
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="login">
        {/* img from https://www.flaticon.com/free-icon/typewriter_387124?related_id=387124&origin=tag# */}
        <img src={logo} alt="" width="200px" />

        <h3>Court Reporter Pro</h3>

        <form onSubmit={HandleFormSubmit}>
          <label htmlFor="username">
            <p>Username</p>
            <input
              type="text"
              placeholder="Enter username ..."
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <div style={{ height: "15px" }}></div>
          <label htmlFor="email">
            <p>Password</p>
            <input
              type="text"
              placeholder="Enter password ..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div style={{ height: "15px" }}></div>
          <div style={{ textAlign: "center" }}>
            <a style={{ fontSize: "13px" }} href="/#">
              Create Account
            </a>
            &nbsp; • &nbsp;
            <a style={{ fontSize: "13px" }} href="/#">
              Forgot Password
            </a>
          </div>
          {/* {errorMessage && <span className="form-error">{errorMessage}</span>} */}
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button disabled={isSubmitting}>
              {isSubmitting ? "Loading..." : "Login"}
            </button>
          </div>
          <br />
        </form>
      </div>
    </>
  );
}
