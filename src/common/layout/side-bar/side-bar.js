import React, {useEffect, useState} from 'react';
import {
    Avatar,
    Box,
    Button,
    CloseButton,
    Drawer,
    DrawerContent,
    Flex,
    HStack,
    Icon,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Text,
    useColorMode,
    useColorModeValue,
    useDisclosure,
    VStack,
} from '@chakra-ui/react';
import {FiBell, FiChevronDown, FiCompass, FiHome, FiMenu, FiSettings, FiStar, FiTrendingUp,} from 'react-icons/fi';
import {useDispatch, useSelector} from "react-redux";
import {getAllDocFromCollection} from "../../common-action/common-action";
import {useNavigate} from "react-router-dom";
import {signOut} from "../../loging/actions/loging.action";
import useUserLoginInfo from "../../../hooks/useUserLoginInfo";
import {getAuth} from "firebase/auth";
import {clearUserDetails} from "../../../store/reducers/user-details.slice";

export default function SidebarWithHeader({children}) {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent
                onClose={() => onClose}
                display={{base: 'none', md: 'block'}}
            />

            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose}/>
                </DrawerContent>
            </Drawer>
            <MobileNav onOpen={onOpen}/>
            <Box ml={{base: 0, md: 60}} p="4">
                {children}
            </Box>
        </Box>
    );
}

const SidebarContent = ({onClose}) => {
    const [LinkItems, setLinkItems] = useState([])
    const [userType, status, user] = useUserLoginInfo()
    let navigate = useNavigate();
    const dispatch = useDispatch()

    let icons = {
        FiHome: FiHome
    }

    useEffect(() => {
        getData()
    }, [user?.uid])

    async function getData() {
        if (status == 'pending') {
            setLinkItems([])
        } else if (status == 'approved' || '') {
            let res = await getAllDocFromCollection('userRoutes')
            setLinkItems([...res])
        }
    }

    return (

        <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{base: 'full', md: 60}}
            pos="fixed"
            h="full">
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Logo
                </Text>
                <CloseButton display={{base: 'flex', md: 'none'}} onClick={onClose}/>

            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} link={link.link} navigate={navigate} icon={icons[link.icon]}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};

const NavItem = ({icon, link, navigate, children, ...rest}) => {
    return (
        <Link onClick={() => {
            navigate(link)
        }} style={{textDecoration: 'none'}} _focus={{boxShadow: 'none'}}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}

                {children}
            </Flex>
        </Link>
    );
};

const MobileNav = ({onOpen, ...rest}) => {
    const {colorMode, toggleColorMode} = useColorMode()
    let [type, status, userDetails] = useUserLoginInfo()

    let navigate = useNavigate();
    const dispatch = useDispatch()

    const signOutHandler = async () => {
        await signOut()
        dispatch(clearUserDetails())
        navigate('/login')
    }
    return (
        <Flex
            ml={{base: 0, md: 60}}
            px={{base: 4, md: 4}}
            height="6vh"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{base: 'space-between', md: 'flex-end'}}
            {...rest}>
            <IconButton
                display={{base: 'flex', md: 'none'}}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu/>}
            />

            <Text
                display={{base: 'flex', md: 'none'}}
                fontSize="2xl"
                fontFamily="monospace"
                fontWeight="bold">
                Logo
            </Text>

            <HStack spacing={{base: '0', md: '6'}}>
                <Button onClick={toggleColorMode}>
                    Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                </Button>

                <IconButton
                    size="lg"
                    variant="ghost"
                    aria-label="open menu"
                    icon={<FiBell/>}
                />
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton
                            py={2}
                            transition="all 0.3s"
                            _focus={{boxShadow: 'none'}}>
                            <HStack>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        userDetails?.photoURL || 'https://www.pngitem.com/middle/mmhwxw_transparent-user-png-default-user-image-png-png'
                                    }
                                />
                                <VStack
                                    display={{base: 'none', md: 'flex'}}
                                    alignItems="flex-start"
                                    spacing="1px"
                                    ml="2">
                                    <Text fontSize="sm">{
                                        userDetails.displayName ?
                                            userDetails.displayName :
                                            <>'Login As '{userDetails.email}</>
                                    }</Text>
                                    <Text fontSize="xs" color="gray.600">
                                        {type}
                                    </Text>
                                </VStack>
                                <Box display={{base: 'none', md: 'flex'}}>
                                    <FiChevronDown/>
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList
                            bg={useColorModeValue('white', 'gray.900')}
                            borderColor={useColorModeValue('gray.200', 'gray.700')}>
                            <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
                            <MenuItem>Settings</MenuItem>
                            <MenuItem>Billing</MenuItem>
                            <MenuDivider/>
                            <MenuItem onClick={signOutHandler}>Sign out</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};