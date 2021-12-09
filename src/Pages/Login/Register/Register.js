import { TextField, Button } from "@mui/material";
import { Container } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import signINImg from "../../../images/signIn.png";
import facebook from "../../../images/f_logo_RGB-Blue_1024.png";
import google from "../../../images/google.png";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { registerUser, googleSignIN } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.password != loginData.password2) {
      alert("your password did not match");
    }

    registerUser(
      loginData.userName,
      loginData.email,
      loginData.password,
      location,
      history
    );
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
          <h1 className="text-center mt-2">Create Account</h1>
          <form onSubmit={handleLogin}>
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              onChange={handleOnChange}
              name="userName"
              type="text"
              sx={{ width: "75%" }}
            />
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
            <TextField
              type="password"
              id="standard-basic"
              label="Confirm Password"
              onChange={handleOnChange}
              name="password2"
              variant="standard"
              sx={{ width: "75%" }}
            />
            <br />
            <br />
            <Button type="submit" sx={{ width: "75%" }} variant="contained">
              Create Account
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
            Already have an account?
            <Link style={{ textDecoration: "none" }} to="/login">
              Sign In
            </Link>
          </h5>
          <img className="w-100" src={signINImg} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Register;
