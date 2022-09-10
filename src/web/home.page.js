import React from "react";
import {Box, chakra, Flex, Icon, useColorModeValue,} from "@chakra-ui/react";
import HeaderNav from "./common/header/navbar.page";
import SmallCentered from "./common/footer/footer.page";
import CallToActionWithVideo from "./common/component/home.compo";
import SimpleThreeColumns from "./common/component/three_col_grid";
import useUserLoginInfo from "../hooks/useUserLoginInfo";
import {useNavigate} from "react-router-dom";

const WebHome = () => {
    let navigate = useNavigate()
    const bg = useColorModeValue("white", "gray.800");

    const Feature = (props) => {
        return (
            <Flex>
                <Icon
                    boxSize={5}
                    mt={1}
                    mr={2}
                    color="brand.500"
                    _dark={{color: "brand.300"}}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    ></path>
                </Icon>
                <chakra.p
                    fontSize="lg"
                    color="gray.700"
                    _dark={{color: "gray.400"}}
                    {...props}
                />
            </Flex>
        );
    };

    return (
        <>
            <HeaderNav/>
            <>
                <>
                    <Box
                        w="full"
                        h="container.sm"
                        backgroundImage="url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"
                        bgPos="center"
                        bgSize="cover"
                    >
                        {/* card here */}
                        <Flex
                            flexDirection="column"
                            gap="4"
                            justify="center"
                            boxSize="full"
                            bg="blackAlpha.700"
                        >
                            <CallToActionWithVideo></CallToActionWithVideo>


                        </Flex>
                    </Box>
                    <SimpleThreeColumns></SimpleThreeColumns>

                </>
                <SmallCentered/>
            </>
        </>
    );
};

export default WebHome;
