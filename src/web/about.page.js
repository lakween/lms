import React, { ReactElement } from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  IconButton,
  Heading,
  Button,
  Link,
  SimpleGrid,
  Stack,
  VStack,
  Icon,
  Container,
  Image,
  Text,
  StackDivider,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import HeaderNav from "./common/header/navbar.page";
import SmallCentered from "./common/footer/footer.page";

const About = () => {
  return (
    <>
      <HeaderNav></HeaderNav>

      <>
        <section className="about-3 section-padding">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-5 col-lg-6">
                <div className="about-img">
                  <img
                    src="assets/images/banner/img_9.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="about-content mt-5 mt-lg-0">
                  <div className="heading mb-50">
                    <span className="subheading">
                      10 years Glory of success
                    </span>
                    <h2 className="font-lg">What is SILEC?</h2>
                  </div>

                  <div className="about-features">
                    <div className="feature-item feature-style-left">
                      <div className="feature-icon icon-bg-3 icon-radius">
                        <i className="fa fa-video"></i>
                      </div>
                      <div className="feature-text">
                        <h4>Strength</h4>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Quidem veniam nulla inventore dolores fuga{" "}
                        </p>
                      </div>
                    </div>

                    <div className="feature-item feature-style-left">
                      <div className="feature-icon icon-bg-2 icon-radius">
                        <i className="far fa-file-certificate"></i>
                      </div>
                      <div className="feature-text">
                        <h4>Intelligence,</h4>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Quidem veniam nulla inventore dolores fuga{" "}
                        </p>
                      </div>
                    </div>

                    <div className="feature-item feature-style-left">
                      <div className="feature-icon icon-bg-1 icon-radius">
                        <i className="fad fa-users"></i>
                      </div>
                      <div className="feature-text">
                        <h4>Loyalty</h4>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Quidem veniam nulla inventore dolores fuga{" "}
                        </p>
                      </div>
                    </div>
                    <div className="feature-item feature-style-left">
                      <div className="feature-icon icon-bg-1 icon-radius">
                        <i className="fad fa-users"></i>
                      </div>
                      <div className="feature-text">
                        <h4>Education</h4>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Quidem veniam nulla inventore dolores fuga{" "}
                        </p>
                      </div>
                    </div>
                    <div className="feature-item feature-style-left">
                      <div className="feature-icon icon-bg-1 icon-radius">
                        <i className="fad fa-users"></i>
                      </div>
                      <div className="feature-text">
                        <h4>Character</h4>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Quidem veniam nulla inventore dolores fuga{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="instructors section-padding-btm">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 pe-5">
                <div className="section-heading">
                  <span className="subheading">Start Today</span>
                  <h2 className="font-lg mb-20">
                    SILEC Sri Lanka Language Academy
                  </h2>
                  <p className="mb-30">
                    SILEC Sri Lanka Language Academy is a language school which
                    register under the W201636 in Democratic Socialist Republic
                    of Sri Lanka. We conduct English language classes, English
                    literature classes and Spoken English classes. We offer YLE,
                    KET, PET, FCE and TKT courses for students through
                    identifying their language requirements. Also we obtain
                    Cambridge English Certificates for these courses. We have
                    been working with the English language world since number of
                    years and we have well-experienced academic staff. Plan your
                    future with us.
                  </p>

                  <ul className="list-item mb-40">
                    <li>
                      <i className="fa fa-check"></i>
                      <h5>
                        Develop your skills Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                      </h5>
                    </li>
                    <li>
                      <i className="fa fa-check"></i>
                      <h5>
                        Share your knowledge Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                      </h5>
                    </li>
                    <li>
                      <i className="fa fa-check"></i>
                      <h5>
                        Earn from globally Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                      </h5>
                    </li>
                  </ul>
                  <a href="#" className="btn btn-main rounded">
                    Start Teaching today
                  </a>
                </div>
              </div>

              <div className="col-xl-6">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="team-item team-item-2 mt-5">
                      <div className="team-img">
                        <img
                          src="assets/images/team/team-4.jpg"
                          alt=""
                          className="img-fluid"
                        />

                        <ul className="team-socials list-inline">
                          <li className="list-inline-item">
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="team-content">
                        <div className="team-info">
                          <h4>Mr. Kesara Nawarathne</h4>
                          <p>Director</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="team-item team-item-2">
                      <div className="team-img">
                        <img
                          src="assets/images/team/team-2.jpg"
                          alt=""
                          className="img-fluid"
                        />

                        <ul className="team-socials list-inline">
                          <li className="list-inline-item">
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="team-content">
                        <div className="team-info">
                          <h4>Mrs. Shani Dissanayake</h4>
                          <p>Senior Lecturer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="team-img">
                      <img
                        src="assets/images/team/team-3.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="team-img">
                      <img
                        src="assets/images/team/team-1.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="counter-section4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-12 counter-inner">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="counter-item mb-5 mb-lg-0">
                      <div className="count">
                        <span className="counter h2">2000</span>
                        <span>+</span>
                      </div>
                      <p>Students</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                    <div className="counter-item mb-5 mb-lg-0">
                      <div className="count">
                        <span className="counter h2">1200</span>
                      </div>
                      <p>Online Courses</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="counter-item mb-5 mb-lg-0">
                      <div className="count">
                        <span className="counter h2">2256</span>
                      </div>
                      <p>Finished Seasons</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                    <div className="counter-item">
                      <div className="count">
                        <span className="counter h2">100</span>
                        <span>%</span>
                      </div>
                      <p>Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

      <SmallCentered></SmallCentered>
    </>
  );
};

export default About;
