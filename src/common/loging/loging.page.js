import {
    Avatar,
    Box,
    Button,
    chakra,
    Flex,
    FormControl,
    FormHelperText,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Link, Text,
    Stack, LightMode, useColorMode
} from "@chakra-ui/react";
import {FaLock, FaUserAlt} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import useFormController from "../../hooks/useFormController";
import {getUsrType, login} from "./actions/loging.action";
import {setCommonState} from "../../store/reducers/common-slice";
import {setUserLoginDetails} from "../../store/reducers/user-details.slice";
import firebase from "firebase/compat/app";
import {collection, getDocs, query, where} from "firebase/firestore";

const Login = () => {
    const {colorMode, toggleColorMode} = useColorMode()
    let navigate = useNavigate();
    let dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)

    let [valueChangeHandler, setValue, form, setForm] = useFormController()

    async function signUpwithGoogle() {
        // setIsLoading(true)
        // let res = await dispatch(googleSignUp(navigate))
        // console.log(res)

    }

    const loginHandler = async () => {

        setIsLoading(true)
        let res = await dispatch(login(form, navigate))
        let userType = await dispatch(getUsrType('dedkzbpbWPd1aQfvaGDN3Zn3DgW2'))
        setIsLoading(false)
        // if (res) {
        //     dispatch(setUserLoginDetails(res))
        //     navigate('/home')
        // }
    }

    const CFaUserAlt = chakra(FaUserAlt);
    const CFaLock = chakra(FaLock);
    const [showPassword, setShowPassword] = useState(false);

    const handleShowClick = () => setShowPassword(!showPassword);

    return (
        <LightMode>
            <Flex
                flexDirection="column"
                width="100wh"
                height="100vh"
                backgroundColor="gray.200"
                justifyContent="center"
                alignItems="center"
            >
                <Stack
                    flexDir="column"
                    mb="2"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Avatar bg="teal.500"/>
                    <Heading color="teal.400">Welcome</Heading>
                    <Box minW={{base: "90%", md: "468px"}}>

                        <Stack
                            spacing={4}
                            p="1rem"
                            backgroundColor="whiteAlpha.900"
                            boxShadow="md"
                        >
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaUserAlt color="gray.300"/>}
                                    />
                                    <Input type="email" placeholder="email address" name={'username'}
                                           onChange={valueChangeHandler}/>
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.300"
                                        children={<CFaLock color="gray.300"/>}
                                    />
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        name={'password'}
                                        onChange={valueChangeHandler}
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                            {showPassword ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <FormHelperText textAlign="right">
                                    <Link>forgot password?</Link>
                                </FormHelperText>
                            </FormControl>
                            <Button
                                isLoading={isLoading}
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                colorScheme="teal"
                                width="full"
                                onClick={loginHandler}
                            >
                                Login
                            </Button>
                            <Button leftIcon={<FcGoogle/>} colorScheme="teal" size="sm" onClick={
                                () => {
                                    signUpwithGoogle()
                                }
                            }>
                                Sign Up with Google
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
                <Box>
                    New to us?{" "}
                    <Link color="teal.500" onClick={() => navigate('/signup')}>
                        Sign Up
                    </Link>
                </Box>
            </Flex>
        </LightMode>

    );
};

export default Login;