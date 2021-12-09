import React from "react";
import articlePic1 from "../../images/Rectangle 5.png";
import articlePic2 from "../../images/Rectangle 5 (1).png";
import articlePic3 from "../../images/Rectangle 5 (2).png";
import articleUser from "../../images/Rectangle 3 (2).png";
import articleUser2 from "../../images/Rectangle 3 (3).png";
import articleUser3 from "../../images/Rectangle 3 (4).png";
import articleUser4 from "../../images/Rectangle 3 (5).png";
import vector from "../../images/Vector.png";
import vector1 from "../../images/Vector1.png";
import vector2 from "../../images/Vector2.png";
import eye from "../../images/visibility_24px.png";
import useAuth from "../../Hooks/useAuth";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Leisure from "../../images/Leisure.png";
import Activism from "../../images/Activism.png";
import MBA from "../../images/MBA.png";
import Philosophy from "../../images/Philosophy.png";

const Post = () => {
  const { user } = useAuth();
  const location = <FontAwesomeIcon icon={faLocationArrow} />;
  return (
    <>
      <div className="container post">
        <div className="row">
          <div className="col-md-8">
            <div calssName="card mb-3">
              <img src={articlePic1} calssName="card-img-top" alt="..." />
              <div calssName="card-body">
                <h5 calssName="card-title">Article</h5>
                <div className="card-body-text d-flex">
                  <div className="row">
                    <div className="col-md-11 col-sm-12">
                      <h3
                        calssName="card-text"
                        style={{ textAlign: "justify" }}
                      >
                        What if famous brands had regular fonts? Meet
                        RegulaBrands!
                      </h3>
                    </div>
                    <div className="col-md-1">
                      <h3 className="text-end">...</h3>
                    </div>
                  </div>
                </div>
                <p>
                  I’ve worked in UX for the better part of a decade. From now
                  on, I plan to rei…
                </p>
                <div className="card-footer-content d-flex justify-content-between">
                  <div className="user-add d-flex align-items-center">
                    <img src={articleUser} alt="hello" />
                    <h3 className="m-2">Sarthak Kamra</h3>
                  </div>
                  <div className="user-add d-flex align-items-center">
                    <p className="me-2">
                      <img src={eye} alt="" />
                    </p>
                    <p>1.4k views</p>
                    <p className="ms-2">
                      <img src={vector} alt="" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {user.email ? (
            <div className="col-md-4 responsive_RightMenu">
              <div className="d-flex">
                {location}
                <input
                  className="w-100 border-top-0 border-end-0 border-start-0 ms-2"
                  type="text"
                  placeholder="Nodia, India"
                />
              </div>
              <br /> <br />
              <small>
                Your location will help us serve better and extend a
                personalised experience.
              </small>
              <br />
              <br />
              <h3>👍 REcommended Groups</h3>
              <div className="row mt-3">
                <div className="col-md-8">
                  <div>
                    <div className="group-img d-flex align-items-center">
                      <img src={Leisure} alt="" />
                      <h6 className="ms-2 pt-2">Leisure</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <button className="bg-secondary border-0 p-1 mt-2 rounded-pill">
                    Follow
                  </button>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-8">
                  <div>
                    <div className="group-img d-flex align-items-center">
                      <img src={Activism} alt="" />
                      <h6 className="ms-2 pt-2">Activism</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <button className="bg-secondary border-0 p-1 mt-2 rounded-pill">
                    Follow
                  </button>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-8">
                  <div>
                    <div className="group-img d-flex align-items-center">
                      <img src={MBA} alt="" />
                      <h6 className="ms-2 pt-2">MBA</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <button className="bg-secondary border-0 p-1 mt-2 rounded-pill">
                    Follow
                  </button>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-8">
                  <div>
                    <div className="group-img d-flex align-items-center">
                      <img src={Philosophy} alt="" />
                      <h6 className="ms-2 pt-2">Philosophy</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <button className="bg-secondary border-0 p-1 mt-2 rounded-pill">
                    Follow
                  </button>
                  <br />
                  <br />
                  <small className="text-primary">see more ...</small>
                </div>
              </div>
            </div>
          ) : (
            <div className="col-md-4 responsive_RightMenu">
              <input
                className="w-100 border-top-0 border-end-0 border-start-0"
                type="text"
                placeholder="Nodia    India"
              />
              <br /> <br />
              <small>
                Your location will help us serve better and extend a
                personalised experience.
              </small>
            </div>
          )}
        </div>

        <div className="row">
          <div className="col-md-8">
            <div calssName="card mb-3">
              <img src={articlePic2} calssName="card-img-top" alt="..." />
              <div calssName="card-body">
                <h5 calssName="card-title">Education</h5>
                <div className="card-body-text d-flex">
                  <div className="row">
                    <div className="col-md-11 col-sm-12">
                      <h3
                        calssName="card-text"
                        style={{ textAlign: "justify" }}
                      >
                        Tax Benefits for Investment under National Pension
                        Scheme launched by Government
                      </h3>
                    </div>
                    <div className="col-md-1">
                      <h3 className="text-end">...</h3>
                    </div>
                  </div>
                </div>
                <p>
                  I’ve worked in UX for the better part of a decade. From now
                  on, I plan to rei…
                </p>
                <div className="card-footer-content d-flex justify-content-between">
                  <div className="user-add d-flex align-items-center">
                    <img src={articleUser2} alt="hello" />
                    <h3 className="m-2">Sarah West</h3>
                  </div>
                  <div className="user-add d-flex align-items-center">
                    <p className="me-2">
                      <img src={eye} alt="" />
                    </p>
                    <p>1.4k views</p>
                    <p className="ms-2">
                      <img src={vector} alt="" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div calssName="card mb-3">
              <img src={articlePic3} calssName="card-img-top" alt="..." />
              <div calssName="card-body">
                <h5 calssName="card-title">Meetup</h5>
                <div className="card-body-text d-flex">
                  <div className="row">
                    <div className="col-md-11 col-sm-12">
                      <h3
                        calssName="card-text"
                        style={{ textAlign: "justify" }}
                      >
                        Finance & Investment Elite Social Mixer @Lujiazui
                      </h3>
                    </div>
                    <div className="col-md-1">
                      <h3 className="text-end">...</h3>
                    </div>
                  </div>
                </div>
                <div className="mt-2 post-details d-flex justify-content-between">
                  <div className="date d-flex align-items-center">
                    <h5>
                      <img src={vector1} alt="" />
                    </h5>
                    <h5 className="ms-2">Fri, 12 Oct, 2018</h5>
                  </div>
                  <div className="location d-flex align-items-center">
                    <h5>
                      <img src={vector2} alt="" />
                    </h5>
                    <h5 className="m-2">Ahmedabad, India</h5>
                  </div>
                </div>
                <button className="w-100 my-3 py-2 bg-transparent border border-dark rounded-pill border border-2">
                  View Website
                </button>
                <div className="card-footer-content d-flex justify-content-between">
                  <div className="user-add d-flex align-items-center">
                    <img src={articleUser3} alt="hello" />
                    <h3 className="m-2">Ronal Jones</h3>
                  </div>
                  <div className="user-add d-flex align-items-center">
                    <p className="me-2">
                      <img src={eye} alt="" />
                    </p>
                    <p>1.4k views</p>
                    <p className="ms-2">
                      <img src={vector} alt="" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div calssName="card mb-3">
              <div calssName="card-body">
                <h5 calssName="card-title">Job</h5>
                <div className="card-body-text d-flex">
                  <div className="row">
                    <div className="col-md-11 col-sm-12">
                      <h3
                        calssName="card-text"
                        style={{ textAlign: "justify" }}
                      >
                        Finance & Investment Elite Social Mixer @Lujiazui
                      </h3>
                    </div>
                    <div className="col-md-1">
                      <h3 className="text-end">...</h3>
                    </div>
                  </div>
                </div>
                <div className="mt-2 post-details d-flex justify-content-between">
                  <div className="date d-flex align-items-center">
                    <h5>
                      <img src={vector1} alt="" />
                    </h5>
                    <h5 className="ms-2">Innovaccer Analytics Private Ltd.</h5>
                  </div>
                  <div className="location d-flex align-items-center">
                    <h5>
                      <img src={vector2} alt="" />
                    </h5>
                    <h5 className="m-2">Noida, India</h5>
                  </div>
                </div>
                <button className="w-100 my-3 py-2 bg-transparent border border-dark rounded-pill border border-2">
                  Apply On Times Job
                </button>
                <div className="card-footer-content d-flex justify-content-between">
                  <div className="user-add d-flex align-items-center">
                    <img src={articleUser4} alt="hello" />
                    <h3 className="m-2">Joseph Gray</h3>
                  </div>
                  <div className="user-add d-flex align-items-center">
                    <p className="me-2">
                      <img src={eye} alt="" />
                    </p>
                    <p>1.4k views</p>
                    <p className="ms-2">
                      <img src={vector} alt="" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
