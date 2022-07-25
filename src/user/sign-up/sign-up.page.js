import {
    Box,
    Button,
    Container,
    Flex,
    FormControl,
    FormLabel,
    Input,
    useToast,
    LightMode,
    useColorModeValue, Stack, Text, Link, HStack, InputGroup, InputRightElement, Heading
} from '@chakra-ui/react'
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import useFormController from "../../hooks/useFormController";
import {emailAndPasswordAuth} from "../sign-up/actions/sign-up.action";
import {useNavigate} from "react-router-dom";
import Card from "../../common/card/card.component"
import {createDocOfCollectionWithId} from "../../common/common-action/common-action";
import signSchema from "./schema/sign-up-page.schema";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";

const SignUp = (getNames) => {
    const [isLoading, setIsLoading] = useState(false)
    let [valueChangeHandler, setValue, form, setForm] = useFormController()
    let [errors,setErrors] = useState({})
    let navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    let dispatch = useDispatch()
    const toast = useToast()

    const signUpHandler = async () => {

        try {
            await signSchema.validate(form, {abortEarly: false})
            let res = await emailAndPasswordAuth(form.email, form.password, toast, navigate)
            if (res.isNewUser) {
                let result = await createDocOfCollectionWithId('accounts', res.uid, {
                    ...res,
                    ...form,
                    userType: 'student',
                    status: 'pending'
                })
            }
            // navigate('/unknownProfile')
        } catch (e) {
            e.inner.forEach(e => {
                setErrors({...errors, ...{[e.path]: e.message}})
            });
        }
    }

    const signedButtonMarkup = (
        <Button
            loadingText="Submitting"
            size="lg"
            bg={"blue.400"}
            color={"white"}
            _hover={{
                bg: "blue.500",
            }}
            isLoading={isLoading}
            onClick={signUpHandler}
        >
            Sign up
        </Button>
    );

    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack spacing={8} mx={"auto"} maxW={"xl"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"} textAlign={"center"}>
                        Sign up
                    </Heading>
                    <Text fontSize={"lg"} color={"gray.600"}>
                        SILEC Sri Lanka Language Academy ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <Stack spacing={4}>
                        <HStack>
                            <Box>
                                <FormControl id="firstName" isRequired>
                                    <FormLabel>First Name</FormLabel>
                                    <Input type="text" name="first_name" />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName">
                                    <FormLabel>Last Name</FormLabel>
                                    <Input type="text" name="last_name" />
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" name="email" />
                        </FormControl>
                        <FormControl id="tel" isRequired>
                            <FormLabel>Mobile Number</FormLabel>
                            <Input type="tel" name="mobile_number" />
                        </FormControl>
                        <FormControl id="address" isRequired>
                            <FormLabel>Address</FormLabel>
                            <Input type="text" name="Address" />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                />
                                <InputRightElement h={"full"}>
                                    <Button
                                        variant={"ghost"}
                                        onClick={() =>
                                            setShowPassword((showPassword) => !showPassword)
                                        }
                                    >
                                        {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <HStack>
                            <Box>
                                <FormControl id="school" isRequired>
                                    <FormLabel>School</FormLabel>
                                    <Input type="text" name="School" />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="dateofbirth">
                                    <FormLabel>Date of Birth</FormLabel>
                                    <Input type="date" name="birthdayF" />
                                </FormControl>
                            </Box>
                        </HStack>
                        <Stack spacing={10} pt={2}>
                            {signedButtonMarkup}
                        </Stack>
                        <Stack pt={6}>
                            <Text align={"center"}>
                                Already a user? <Link color={"blue.400"}>Login</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}

export default SignUp