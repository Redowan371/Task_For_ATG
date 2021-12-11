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
import pen from "../../images/pen.png";
import notLocation from "../../images/noLocation.png";
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
          <div className="col-md-8 col-sm-12">
            <div class="card mb-3">
              <img src={articlePic1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Article</h5>
                <div className="d-flex justify-content-between">
                  <div>
                    <h3 class="card-text">
                      What if famous brands had regular fonts? Meet
                      RegulaBrands!
                    </h3>
                  </div>
                  <div>
                    <h3>...</h3>
                  </div>
                </div>
                <p>
                  I’ve worked in UX for the better part of a decade. From now
                  on, I plan to rei…
                </p>
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <img src={articleUser} alt="hello" />
                    <h3 className="m-2">Sarthak Kamra</h3>
                  </div>
                  <div className="d-flex mt-2">
                    <img
                      style={{ height: "15px", marginTop: "5px" }}
                      src={eye}
                      alt=""
                    />
                    <p className="px-2">1.4k views</p>
                    <img
                      style={{ height: "20px", paddingTop: "5px" }}
                      src={vector}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* card 2 */}
            <div class="card mb-3">
              <img src={articlePic2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Education</h5>
                <div className="d-flex justify-content-between">
                  <div>
                    <h3 class="card-text">
                      Tax Benefits for Investment under National Pension Scheme
                      launched by Government
                    </h3>
                  </div>
                  <div>
                    <h3>...</h3>
                  </div>
                </div>
                <p>
                  I’ve worked in UX for the better part of a decade. From now
                  on, I plan to rei…
                </p>
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <img src={articleUser2} alt="hello" />
                    <h3 className="m-2">Sarah West</h3>
                  </div>
                  <div className="d-flex mt-2">
                    <img
                      style={{ height: "15px", marginTop: "5px" }}
                      src={eye}
                      alt=""
                    />
                    <p className="px-2">1.4k views</p>
                    <img
                      style={{ height: "20px", paddingTop: "5px" }}
                      src={vector}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* card 3 */}
            <div class="card mb-3">
              <img src={articlePic3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Meet Up</h5>
                <div className="d-flex justify-content-between">
                  <div>
                    <h3 class="card-text">
                      Finance & Investment Elite Social Mixer @Lujiazui
                    </h3>
                  </div>
                  <div>
                    <h3>...</h3>
                  </div>
                </div>
                <p>
                  I’ve worked in UX for the better part of a decade. From now
                  on, I plan to rei…
                </p>
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <img src={articleUser3} alt="hello" />
                    <h3 className="m-2">Ronal Jones</h3>
                  </div>
                  <div className="d-flex mt-2">
                    <img
                      style={{ height: "15px", marginTop: "5px" }}
                      src={eye}
                      alt=""
                    />
                    <p className="px-2">1.4k views</p>
                    <img
                      style={{ height: "20px", paddingTop: "5px" }}
                      src={vector}
                      alt=""
                    />
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
                  Visit Website
                </button>
              </div>
            </div>

            {/* card 4 */}
            <div class="card mb-3">
              <div class="card-body">
                <h5 class="card-title">Job</h5>
                <div className="d-flex justify-content-between">
                  <div>
                    <h3 class="card-text">Software Developer</h3>
                  </div>
                  <div>
                    <h3>...</h3>
                  </div>
                </div>
                <p>
                  I’ve worked in UX for the better part of a decade. From now
                  on, I plan to rei…
                </p>
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <img src={articleUser4} alt="hello" />
                    <h3 className="m-2">Joseph Gray</h3>
                  </div>
                  <div className="d-flex mt-2">
                    <img
                      style={{ height: "15px", marginTop: "5px" }}
                      src={eye}
                      alt=""
                    />
                    <p className="px-2">1.4k views</p>
                    <img
                      style={{ height: "20px", paddingTop: "5px" }}
                      src={vector}
                      alt=""
                    />
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
                  Apply on Timesjobs
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="d-flex justify-content-between"
              style={{ borderBottom: "1px solid gray" }}
            >
              <div className="d-flex">
                <img
                  style={{ height: "20px", paddingRight: "10px" }}
                  src={vector2}
                  alt="some"
                />
                <p>Nodia India</p>
              </div>
              <div>
                <img src={pen} alt="some" />
              </div>
            </div>
            <div className="my-3">
              <img style={{ paddingRight: "10px" }} src={notLocation} alt="" />
              <small>
                Your location will help us serve better and extend a
                personalised experience.
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
