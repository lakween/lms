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
                  <img src="assets/images/logo.jpg" alt="" className="img-fluid h-10"/>
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
                    <a href="index.html">Home</a>
                    <ul className="submenu">
                      <li>
                        <a href="index.html">Home One</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home Two</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home Three</a>
                      </li>
                      <li>
                        <a href="index-4.html">Home Four</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>

                  <li>
                    <a href="/courses">Courses</a>
                  </li>

                  <li>
                    <a href="#">Pages</a>
                    <ul className="submenu">
                      <li>
                        <a href="instructor.html">Instructors</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="login.html">Login</a>
                      </li>
                      <li>
                        <a href="Register.html">Register</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="blog.html">Blog</a>
                    <ul className="submenu">
                      <li>
                        <a href="blog-grid.html">Blog</a>
                      </li>
                      <li>
                        <a href="blog-single.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>

                <a href="#" className="nav-close">
                  <i className="fal fa-times"></i>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderNav;
