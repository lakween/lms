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
    useColorModeValue
} from '@chakra-ui/react'
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import useFormController from "../../hooks/useFormController";
import {emailAndPasswordAuth} from "../sign-up/actions/sign-up.action";
import {useNavigate} from "react-router-dom";
import Card from "../../common/card/card.component"
import {createDocOfCollectionWithId} from "../../common/common-action/common-action";

const SignUp = (getNames) => {
    const [isLoading, setIsLoading] = useState(false)
    let [valueChangeHandler, setValue, form, setForm] = useFormController()
    let navigate = useNavigate();
    let dispatch = useDispatch()
    const toast = useToast()

    const signUpHandler = async () => {
        let res = await dispatch(emailAndPasswordAuth(form.email, form.password, toast,navigate))
        console.log(res,'res')
        if (res.isNewUser) {
            let result = await dispatch(createDocOfCollectionWithId('accounts', res.uid, {
                ...res,
                userType: 'student',
                status: 'pending'
            }))
            console.log(result)
        }
        navigate('/unknownProfile')
        console.log(res)
    }

    const signedButtonMarkup = (
        <Flex justifyContent={'right'} mt={3} columnGap={'20px'} direction={'row'}>
            <Button isLoading={isLoading} onClick={signUpHandler} width={'120px'} colorScheme="teal" size="sm">
                Create Account
            </Button>
        </Flex>
    )

    return (
            <Container marginTop={200} display={'flex'} justifyContent={"center"} height={'44vh'} centerContent padding={5} maxW='70%'
                       bg={useColorModeValue('gray.100', 'gray.900')} >
                <Box width={'100%'} inSideTitle={'Personal Informations'}>
                    <Flex padding={3} width={'100%'} bg={useColorModeValue('white', 'gray.900')} gap={3} direction={'row'}>
                        <Box width={'100%'} bg={useColorModeValue('white', 'gray.900')}>
                            <FormControl>
                                <FormLabel >First Name</FormLabel>
                                <Input  value={form.first_name} onChange={valueChangeHandler} name='first_name'
                                       type='text'/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Last Name</FormLabel>
                                <Input onChange={valueChangeHandler} value={form.last_name} name='last_name'
                                       type='text'/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input onChange={valueChangeHandler} value={form.email} name='email' type='email'/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Password</FormLabel>
                                <Input onChange={valueChangeHandler} name='password' type='password'/>
                            </FormControl>
                        </Box>
                        <Box width={'100%'}>
                            <FormControl>
                                <FormLabel>State</FormLabel>
                                <Input onChange={valueChangeHandler} name='state' type='text'/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>City</FormLabel>
                                <Input onChange={valueChangeHandler} name='city' type='text'/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Address</FormLabel>
                                <Input onChange={valueChangeHandler} name='address' type='text'/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Tel: NO</FormLabel>
                                <Input onChange={valueChangeHandler} name='mobile_number' type='email'/>
                            </FormControl>
                        </Box>
                    </Flex>
                    {signedButtonMarkup}
                </Box>
            </Container>
    )
}

export default SignUp