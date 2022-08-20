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
      <header class="header-style-1">
        <div class="header-navbar navbar-sticky">
          <div class="container">
            <div class="d-flex align-items-center justify-content-between">
              <div class="site-logo">
                <a href="index.html">
                  <img src="assets/images/logo.jpg" alt="" class="img-fluid h-10"/>
                </a>
              </div>

              <div class="offcanvas-icon d-block d-lg-none">
                <a href="#" class="nav-toggler">
                  <i class="fal fa-bars"></i>
                </a>
              </div>

              <nav class="site-navbar ms-auto">
                <ul class="primary-menu">
                  <li class="current">
                    <a href="index.html">Home</a>
                    <ul class="submenu">
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
                    <a href="about.html">About</a>
                  </li>

                  <li>
                    <a href="courses.html">Courses</a>
                    <ul class="submenu">
                      <li>
                        <a href="courses.html">Courses</a>
                      </li>
                      <li>
                        <a href="courses-2.html">Course Grid 2 </a>
                      </li>
                      <li>
                        <a href="courses-3.html">Course Grid 3</a>
                      </li>
                      <li>
                        <a href="courses-4.html">Course Grid 4</a>
                      </li>
                      <li>
                        <a href="courses-5-list.html">Course List</a>
                      </li>
                      <li class="has-submenu">
                        <a href="#">Single Layout</a>
                        <ul class="submenu">
                          <li>
                            <a href="course-single.html">Course Single 1</a>
                          </li>
                          <li>
                            <a href="course-single-2.html">Course Single 2</a>
                          </li>
                          <li>
                            <a href="course-single-3.html">Course Single 3</a>
                          </li>
                          <li>
                            <a href="course-single-4.html">Course Single 4</a>
                          </li>
                          <li>
                            <a href="course-single-5.html">Course Single 5</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">Pages</a>
                    <ul class="submenu">
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
                    <ul class="submenu">
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

                <a href="#" class="nav-close">
                  <i class="fal fa-times"></i>
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
