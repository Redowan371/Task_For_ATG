import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Container } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import signINImg from "../../../images/signIn.png";
import facebook from "../../../images/f_logo_RGB-Blue_1024.png";
import google from "../../../images/google.png";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const { loginUser, googleSignIN } = useAuth();
  const [loginData, setLoginData] = useState({});
  const location = useLocation();
  const history = useHistory();
  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(loginData.email, loginData.password, location, history);
  };
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  return (
    <Container>
      <h5 className="text-center mt-3">
        Let's learn, share & inspire each other with our passion for computer
        engineering. Sign up now 🤘🏼
      </h5>
      <div className="row">
        <div className="col-md-6">
          <h1 className="text-center mt-2">SIGN IN</h1>
          <form onSubmit={handleLogin}>
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              onChange={handleOnChange}
              name="email"
              type="text"
              sx={{ width: "75%" }}
            />
            <TextField
              type="password"
              id="standard-basic"
              label="Password"
              onChange={handleOnChange}
              name="password"
              variant="standard"
              sx={{ width: "75%" }}
            />
            <br />
            <br />
            <Button type="submit" sx={{ width: "75%" }} variant="contained">
              Sign In
            </Button>
            <br />
            <br />
            <Button className="border border-info" sx={{ width: "75%" }}>
              <img className="me-2" src={facebook} alt="google" />
              Sign In with Facebook
            </Button>
            <br />
            <br />
            <Button
              className="border border-info"
              sx={{ width: "75%" }}
              type="submit"
              onClick={() => googleSignIN(location, history)}
            >
              <img className="me-2" src={google} alt="google" /> Sign In with
              Google
            </Button>
            <br />
            <br />
            <p>Forgot Password ??</p>
          </form>
        </div>

        <div className="col-md-6">
          <h5 className="text-center mt-2">
            Don’t have an account yet?{" "}
            <Link style={{ textDecoration: "none" }} to="/register">
              Create new for free!
            </Link>
          </h5>
          <img
            className="w-75 d-flex align-items-center justify-content-center mt-3"
            src={signINImg}
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};

export default Login;
