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
    LightMode,
    Link,
    Stack,
    useColorMode,
    useColorModeValue, useDisclosure, useToast
} from "@chakra-ui/react";
import {FaLock, FaUserAlt} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import useFormController from "../../hooks/useFormController";
import {getUsrType, googleSignUp, login} from "./actions/loging.action";
import {setProfileStatus, setUserLoginDetails, setUserType} from "../../store/reducers/user-details.slice";
import ChoiseSigninTypeModal from "./components/modal/choise-signin-type.modal";

const Login = () => {
    // const {colorMode, toggleColorMode} = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    let navigate = useNavigate();
    const toast = useToast()
    let dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const [modalState, setModalState] = useState({})
    let [valueChangeHandler, setValue, form, setForm] = useFormController()

    async function signUpwithGoogle() {
        onOpen()
    }

    const loginHandler = async () => {
        setIsLoading(true)
        let res = await login(form, navigate,toast)
        setIsLoading(false)
        let userDetails = await getUsrType(res.user.uid)
        if (res) {
            dispatch(setUserLoginDetails(res.user))
            dispatch(setUserType(userDetails.userType))
            dispatch(setProfileStatus(userDetails.status))
            if(userDetails.status == 'pending') navigate('/unknownProfile')
            else navigate('/home')
        }
    }

    const CFaUserAlt = chakra(FaUserAlt);
    const CFaLock = chakra(FaLock);
    const [showPassword, setShowPassword] = useState(false);

    const handleShowClick = () => setShowPassword(!showPassword);

    return (
            <Flex
                bg={useColorModeValue('white', 'gray.900')}
                flexDirection="column"
                width="100wh"
                height="100vh"

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
                    <Box minW={{base: "90%", md: "468px"}}  bg={useColorModeValue('white', 'gray.900')}>

                        <Stack
                            spacing={4}
                            p="1rem"
                            boxShadow="md"
                            bg={useColorModeValue('white', 'gray.900')}
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
                            </FormControl>
                            <Button
                                isLoading={isLoading}
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                colorScheme={useColorModeValue('teal', 'teal')}
                                width="full"
                                onClick={loginHandler}
                            >
                                Login
                            </Button>
                            {/*<Button leftIcon={<FcGoogle/>} colorScheme="teal" size="sm" onClick={*/}
                            {/*    () => {*/}
                            {/*        signUpwithGoogle()*/}
                            {/*    }*/}
                            {/*}>*/}
                            {/*    Sign Up with Google*/}
                            {/*</Button>*/}
                        </Stack>
                    </Box>
                </Stack>
                <Box>
                    New to us?{" "}
                    <Link color="teal.500" onClick={() => navigate('/signup')}>
                        Sign Up
                    </Link>
                </Box>
                <ChoiseSigninTypeModal modalMethod={{ isOpen, onOpen, onClose }} State={[modalState, setModalState]}/>
            </Flex>
    );
};

export default Login;