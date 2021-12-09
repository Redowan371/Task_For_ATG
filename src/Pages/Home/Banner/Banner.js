import React from "react";
import useAuth from "../../../Hooks/useAuth";
import "./Banner.css";
import joinGroup from "../../../images/joinGroup.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Banner = () => {
  const { user } = useAuth();
  const logoUser = <FontAwesomeIcon icon={faUser} />;
  const caretDown = <FontAwesomeIcon icon={faCaretDown} />;
  const signOut = <FontAwesomeIcon icon={faSignOutAlt} />;
  return (
    <>
      <div className="banner-bg">
        <div className="container">
          <div className="banner-text">
            <h2>Computer Engineering</h2>
            <p>142,765 Computer Engineers follow this</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="banner-menu">
          <ul>
            <li>All Post</li>
            <li>Article</li>
            <li>Event</li>
            <li>Education</li>
            <li>Job</li>
          </ul>
          {user.email ? (
            <div className="banner-btn">
              <button>Write Post {caretDown}</button>
              <button> {signOut} Leave Group</button>
            </div>
          ) : (
            <div className="banner-btn">
              <button>Write Post {caretDown}</button>
              <Link to="/login">
                <button> {logoUser} Join Group</button>
              </Link>
            </div>
          )}
        </div>
        <div className="menuBanner_responsive">
          <div className="row">
            <div className="col-sm-6">
              <h5>Posts (365)</h5>
            </div>
            <div className="col-sm-6 text-end">
              <h5>Filler: All {caretDown} </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
