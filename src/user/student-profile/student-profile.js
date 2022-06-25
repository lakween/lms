import {Avatar, Box, Flex, Text, useColorModeValue} from "@chakra-ui/react";
import DisplayLine from "../../common/display-line/display-line.component";
import useUserLoginInfo from "../../hooks/useUserLoginInfo";
import {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {updateProfilePhoto, updateStudentProfile} from "./actions/student-profile.action";


const StudentProfile = () => {
    let [type, userDetails] = useUserLoginInfo()
    const [photo,setPhoto] = useState('')
    const [model,setModel] = useState({...userDetails?._delegate})
    const dispatch = useDispatch()

    const onUpdateHandler = async (path,form)=>{
        setModel ({...userDetails,...form})
         await dispatch(updateStudentProfile(userDetails,form))
    }

    const onChangeProfilePicture = async (e)=>{
        if (e.target.files[0]) {
            dispatch(updateProfilePhoto(e.target.files[0],userDetails))
           setPhoto(URL.createObjectURL(e.target.files[0]))

        }
    }

    return (
        <>
            <Box borderWidth="1px" mb={4}
                 borderColor={useColorModeValue('gray.200', 'gray.700')} padding={5}
                 bg={useColorModeValue('white', 'gray.900')} width={'100%'} borderStyle={'solid'}>
                <Flex gap={5} direction={'row'} align={'center'}>
                    <Avatar size='2xl' name='Segun Adebayo' src={photo}/>
                    <input type={'file'} onChange={onChangeProfilePicture}/>
                </Flex>
                <DisplayLine
                    modelPath={'displayName'}
                    name ={'displayName'}
                    onUpdate={onUpdateHandler} mt={5}
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
                        <DisplayLine text={'Lakween Lalanahansa Senathilake'}/>
                    </Flex>
                    <Flex direction={'row'}>
                        <Text flex={1}>Email Address</Text>
                        <DisplayLine text={'lakweensenathilake@gmail.com'}/>
                    </Flex>
                    <Flex direction={'row'}>
                        <Text flex={1}>Mobile Number</Text>
                        <DisplayLine text={'0714704367'}/>
                    </Flex>
                    <Flex direction={'row'}>
                        <Text flex={1}>Birth Day</Text>
                        <DisplayLine text={'2-7-1998'}/>
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