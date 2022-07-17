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
    <chakra.nav bg={bg} shadow="base">
      <Box mx="auto" px={6} py={3} maxW="full">
        <Box
          display={{ md: "flex" }}
          alignItems={{ md: "center" }}
          justifyContent={{ md: "space-between" }}
        >
          <Flex alignItems="center" justifyContent="space-between">
            <Box mr="2">
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Box fontSize="xl" fontWeight="semibold" color="gray.700">
              <chakra.a
                fontSize={["xl", , "2xl"]}
                fontWeight="bold"
                color="gray.800"
                _dark={{ color: "white" }}
                _hover={{
                  color: "gray.700",
                  _dark: { color: "gray.300" },
                }}
              >
                SILEC
              </chakra.a>
            </Box>
          </Flex>

          <Box display={["none", , "flex"]} alignItems={{ md: "center" }}>
            <chakra.a
              onClick={() => {
                navigate("/");
              }}
              display="block"
              mx={4}
              mt={[2, , 0]}
              fontSize="sm"
              color="gray.700"
              _dark={{ color: "gray.200" }}
              textTransform="capitalize"
              _hover={{ color: "brand.400", _dark: { color: "blue.400" } }}
            >
              Home
            </chakra.a>
            <chakra.a
              onClick={() => {
                navigate("/about");
              }}
              display="block"
              mx={4}
              mt={[2, , 0]}
              fontSize="sm"
              color="gray.700"
              _dark={{ color: "gray.200" }}
              textTransform="capitalize"
              _hover={{ color: "brand.400", _dark: { color: "blue.400" } }}
            >
              Abount
            </chakra.a>
            <chakra.a
              onClick={() => {
                navigate("/contact");
              }}
              display="block"
              mx={4}
              mt={[2, , 0]}
              fontSize="sm"
              color="gray.700"
              _dark={{ color: "gray.200" }}
              textTransform="capitalize"
              _hover={{ color: "brand.400", _dark: { color: "blue.400" } }}
            >
              Contact
            </chakra.a>
            <chakra.a
              onClick={() => {
                navigate("/courses");
              }}
              display="block"
              mx={4}
              mt={[2, 0]}
              fontSize="sm"
              color="gray.700"
              _dark={{ color: "gray.200" }}
              textTransform="capitalize"
              _hover={{ color: "brand.400", _dark: { color: "blue.400" } }}
            >
              Online Courses
            </chakra.a>
            <chakra.a
              onClick={() => {
                navigate("/login");
              }}
              display="block"
              mx={4}
              mt={[2, 0]}
              fontSize="sm"
              color="gray.700"
              _dark={{ color: "gray.200" }}
              textTransform="capitalize"
              _hover={{ color: "brand.400", _dark: { color: "blue.400" } }}
            >
              Login
            </chakra.a>
          </Box>
          <Flex display={{ md: "none" }}>
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
              >
                <HStack>
                  <Box display={{ md: "flex" }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                bg={useColorModeValue("white", "gray.900")}
                borderColor={useColorModeValue("gray.200", "gray.700")}
              >
                <MenuItem>Home</MenuItem>
                <MenuItem onClick={() => navigate("about")}>About</MenuItem>
                <MenuItem>Contact</MenuItem>
                <MenuDivider />
                <MenuItem onClick={() => navigate("login")}>Login</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Box>
      </Box>
    </chakra.nav>
  );
};

export default HeaderNav;
