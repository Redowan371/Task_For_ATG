import React from "react";
import "./MenuBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/Union 1.png";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import defaultPic from "../../../images/user.png";

const Menubar = () => {
  const { user, logOut } = useAuth();
  const element = <FontAwesomeIcon icon={faSearch} />;
  const caretDown = <FontAwesomeIcon icon={faCaretDown} />;
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="transparent"
        variant="dark"
        className="px-3 logo-bg"
      >
        <Navbar.Brand>
          <h1 className="text-black">
            <span className="text-success">ATG.</span>W
            <img src={logo} alt="" />
            RLD
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <div>
              <div className="d-flex bg-secondary mt-2 me-5 p-2 search">
                <h5>{element}</h5>
                <p className="ms-2">Search Your Favorite group in ATG.</p>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-center  ms-5 p-2">
                {user?.email ? (
                  <div className="d-flex">
                    <div className="userImg">
                      {user.photoURL ? (
                        <img
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                          }}
                          src={user.photoURL}
                          alt=""
                        />
                      ) : (
                        <img
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            paddingBottom: "5px",
                          }}
                          src={defaultPic}
                          alt=""
                        />
                      )}
                    </div>
                    <div className="userName mt-2">
                      {user.displayName ? (
                        <h5>{user.displayName}</h5>
                      ) : (
                        <h5>No Name</h5>
                      )}
                    </div>
                    <div className="logout-btn ">
                      <button
                        className="bg-transparent p-2 ms-2 border border-info"
                        onClick={logOut}
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="create-accoutn">
                    <span>Create an Accounts</span>
                    <Link to="/register">
                      <span className="ms-2">It's feel free {caretDown}</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Menubar;
