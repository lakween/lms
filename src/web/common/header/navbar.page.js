import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Menu,
  MenuButton,
  HStack,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import Logo from "../component/logo.compo";

const HeaderNav = () => {
  const bg = useColorModeValue("white", "gray.800");
  let navigate = useNavigate();

  return (
    <>
      <header className="header-style-1">
        <div className="header-navbar navbar-sticky">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between">
              <div className="site-logo">
                <a href="index.html">
                  <img
                    src="assets/images/logo.jpg"
                    alt=""
                    className="img-fluid h-20"
                  />
                </a>
              </div>

              <div className="offcanvas-icon d-block d-lg-none">
                <a href="#" className="nav-toggler">
                  <i className="fal fa-bars"></i>
                </a>
              </div>

              <nav className="site-navbar ms-auto">
                <ul className="primary-menu">
                  <li className="current">
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About us</a>
                  </li>
                  <li>
                    <a href="/courses">Courses</a>
                  </li>
                  <li>
                    <a href="/class">Classes</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>

                <a href="#" className="nav-close">
                  <i className="fal fa-times"></i>
                </a>
              </nav>
              <div className="header-btn d-none d-xl-block">
                <a href="/login" className="login">
                  Login
                </a>
                <a href="/signup" className="btn btn-main-2 btn-sm-2 rounded">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderNav;
