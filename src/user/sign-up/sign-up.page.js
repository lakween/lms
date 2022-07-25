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
    useColorModeValue, Stack, Text, Link, HStack, InputGroup, InputRightElement, Heading, FormErrorMessage
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
    let [errors, setErrors] = useState({})
    let navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    let dispatch = useDispatch()
    const toast = useToast()
    console.log(errors, 'errors')

    const signUpHandler = async () => {
        setErrors({})
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
            navigate('/unknownProfile')
        } catch (e) {
            e.inner.forEach(e => {
                // console.log({[e.path]: e.message},'e')
                setErrors((errors) => ({...errors, [e.path]: e.message}))
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
                    <Heading color={useColorModeValue("gray.800", "white")} fontSize={"4xl"} textAlign={"center"}>
                        Sign up
                    </Heading>
                    <Text fontSize={"lg"} color={useColorModeValue("gray.800", "white")}>
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
                                <FormControl id="firstName" isRequired isInvalid={!form.first_name}>
                                    <FormLabel>First Name</FormLabel>
                                    <Input onChange={valueChangeHandler} type="text" name="first_name"/>
                                    {errors.first_name ?
                                        <FormErrorMessage color={'red'}>{errors.first_name}</FormErrorMessage> :
                                        <FormErrorMessage></FormErrorMessage>}
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName" isInvalid={!form.last_name}>
                                    <FormLabel>Last Name</FormLabel>
                                    <Input onChange={valueChangeHandler} type="text" name="last_name"/>
                                    {errors.last_name ?
                                        <FormErrorMessage color={'red'}>{errors.last_name}</FormErrorMessage> :
                                        <FormErrorMessage></FormErrorMessage>}
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id="email" isRequired isInvalid={!form.email}>
                            <FormLabel>Email address</FormLabel>
                            <Input onChange={valueChangeHandler} type="email" name="email"/>
                            {errors.email ? <Text size={'xs'} color={'red'}>{errors.email}</Text> :
                                <FormErrorMessage></FormErrorMessage>}
                        </FormControl>
                        <FormControl id="password" isRequired isInvalid={!form.password}>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input onChange={valueChangeHandler}
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
                                        {showPassword ? <AiFillEye/> : <AiFillEyeInvisible/>}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            {errors.password ? <FormErrorMessage color={'red'}>{errors.password}</FormErrorMessage> :
                                <FormErrorMessage></FormErrorMessage>}
                        </FormControl>
                        <FormControl id="tel" isRequired isInvalid={!form.mobile_number}>
                            <FormLabel>Mobile Number</FormLabel>
                            <Input onChange={valueChangeHandler} type="tel" name="mobile_number"/>
                            {errors.mobile_number ?
                                <Text color={'red'}>{errors.mobile_number}</Text> :
                                <FormErrorMessage></FormErrorMessage>}
                        </FormControl>
                        <FormControl id="address" isRequired isInvalid={!form.Address}>
                            <FormLabel>Address</FormLabel>
                            <Input onChange={valueChangeHandler} type="text" name="Address"/>
                            {errors.Address ? <FormErrorMessage color={'red'}>{errors.Address}</FormErrorMessage> :
                                <FormErrorMessage></FormErrorMessage>}
                        </FormControl>
                        <HStack>
                            <Box>
                                <FormControl id="school" isRequired isInvalid={!form.School}>
                                    <FormLabel>School</FormLabel>
                                    <Input onChange={valueChangeHandler} type="text" name="School"/>
                                    {errors.School ? <FormErrorMessage color={'red'}>{errors.School}</FormErrorMessage> :
                                        <FormErrorMessage></FormErrorMessage>}
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="dateofbirth" isInvalid={!form.birthday}>
                                    <FormLabel>Date of Birth</FormLabel>
                                    <Input   max={new Date().toISOString().split('T')[0]} onChange={valueChangeHandler} type="date" name="birthday"/>
                                    {errors.birthday ?
                                        <FormErrorMessage  color={'red'}>{errors.birthday}</FormErrorMessage> :
                                        <FormErrorMessage></FormErrorMessage>}
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