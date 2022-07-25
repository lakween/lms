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
import AboutFeature from "./common/component/features.compo";
// import img from "../../assets/about_us.jpeg";

const About = () => {
  return (
    <>
      <HeaderNav />

      <AboutFeature />

      <SmallCentered />
    </>
  );
};

export default About;
