import {Avatar, Box, Flex, Text, useColorModeValue} from "@chakra-ui/react";
import DisplayLine from "../../common/display-line/display-line.component";
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {
    getUserLocalAccount,
    updateAuthProfile,
    updateProfilePhoto,
    updateStudentProfile
} from "./actions/student-profile.action";
import {getAuth} from "firebase/auth";

const StudentProfile = () => {
    const {currentUser} = getAuth();
    const [photo, setPhoto] = useState('')
    const [model, setModel] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        getLocalProfileData()
    }, [currentUser])

    const getLocalProfileData = async () => {
        let userData = await dispatch(getUserLocalAccount(currentUser?.uid))
        setModel({...currentUser, ...userData})
    }

    const onUpdateAuthHandler = async (path, form) => {
        setModel({...model,...currentUser, ...form})
        await dispatch(updateAuthProfile(currentUser, form))
    }

    const onChangeProfilePicture = async (e) => {
        if (e.target.files[0]) {
            dispatch(updateProfilePhoto(e.target.files[0], currentUser))
            setPhoto(URL.createObjectURL(e.target.files[0]))
        }
    }

    const onUpdateHandler = async (path, form) => {
        setModel({...model,...form})
        await dispatch(updateStudentProfile(currentUser.uid, form))
    }


    return (
        <>
            <Box borderWidth="1px" mb={4}
                 borderColor={useColorModeValue('gray.200', 'gray.700')} padding={5}
                 bg={useColorModeValue('white', 'gray.900')} width={'100%'} borderStyle={'solid'}>
                <Flex gap={5} direction={'row'} align={'center'}>
                    <Avatar size='2xl'
                            src={photo || model?.photoURL || 'https://www.pngitem.com/middle/mmhwxw_transparent-user-png-default-user-image-png-png'}/>
                    <input type={'file'} accept="image/png,image/jpeg" onChange={onChangeProfilePicture}/>
                </Flex>
                <DisplayLine
                    modelPath={'displayName'}
                    name={'displayName'}
                    onUpdate={onUpdateAuthHandler} mt={5}
                    value={model?.displayName ? model?.displayName : 'Unknown'
                    }/>
            </Box>

            <Box borderWidth="1px"
                 borderColor={useColorModeValue('gray.200', 'gray.700')} padding={5}
                 bg={useColorModeValue('white', 'gray.900')} width={'100%'} borderStyle={'solid'}
                 display={'flex'} flexDir={'row'} gap={4}
            >

                <Box p={5} borderWidth="1px" flex={1} width={'50%'}>
                    <h1>User Details</h1>
                    <br/>
                    <br/>
                    <Flex direction={'row'}>
                        <Text flex={1}>Full Name</Text>
                        <DisplayLine
                            modelPath={'fullName'}
                            name={'fullName'}
                            onUpdate={onUpdateHandler}
                            value={model?.fullName ? model?.fullName : 'Unknown'
                            }/>
                    </Flex>
                    <Flex direction={'row'}>
                        <Text flex={1}>Email Address</Text>
                        <DisplayLine
                            modelPath={'email'}
                            name={'email'}
                            value={model?.email ? model?.email : '--------'
                            }/>
                    </Flex>
                    <Flex direction={'row'}>
                        <Text flex={1}>Mobile Number</Text>
                        <DisplayLine
                            modelPath={'mobileNumber'}
                            name={'mobileNumber'}
                            onUpdate={onUpdateHandler}
                            value={model?.mobileNumber ? model?.mobileNumber : '--------'
                            }/>
                    </Flex>
                    <Flex direction={'row'}>
                        <Text flex={1}>Birth Day</Text>
                        <DisplayLine
                            modelPath={'BirthDay'}
                            name={'BirthDay'}
                            onUpdate={onUpdateHandler}
                            value={model?.BirthDay ? model?.BirthDay : '00-00-0000'
                            }/>
                    </Flex>
                </Box>
                <Box p={5} borderWidth="1px" flex={1} width={'50%'}>
                    <h1>Student Details</h1>
                    <br/>
                    <br/>
                    <Flex direction={'row'}>
                        <Text flex={1}>Batch Number</Text>
                        <p flex={1}>COBSCCS-00215458</p>
                    </Flex>
                    <Flex direction={'row'}>
                        <Text flex={1}>Batch</Text>
                        <p flex={1}>BSC in Computer Science</p>
                    </Flex>
                    <Flex direction={'row'}>
                        <Text flex={1}>Branch</Text>
                        <p flex={1}>Colombo</p>
                    </Flex>
                    <br/>
                    <Text></Text>
                    <p></p>
                </Box>

            </Box>
        </>

    )
}

export default StudentProfile