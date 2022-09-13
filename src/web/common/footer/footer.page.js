import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaYoutube,FaLinkedin, FaFacebook } from "react-icons/fa";
import Logo from "../component/logo.compo";
import {useNavigate} from "react-router-dom";



const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode,
  label: string,
  href: string,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  let navigate = useNavigate()
  
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Text fontSize={"sm"}>
              © 2022 SILEC. All rights reserved
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Linkedin"} href={"#"}>
                <FaLinkedin />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={"Facebook"} href={"https://www.facebook.com/people/SILEC-Sri-Lanka-Language-Academy/100054501803147/"}>
                <FaFacebook />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"/about"}>About us</Link>
            <Link href={"/courses"}>Courses</Link>
            <Link href={"/contact"}>Contact us</Link>
           
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Services</ListHeader>
            <Link href={"#"}>Events</Link>
            <Link href={"#"}>Classs</Link>
            <Link href={"#"}>Field Visit</Link>
           
          </Stack>
          
          <Stack align={"flex-start"}>
            <ListHeader>Find us on Google</ListHeader>
            <Box>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.917661404599!2d79.89254071460518!3d6.900450520581134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259a98b8fd4e1%3A0x2c4deca9aeaac3be!2sNasa%20Education%20Center!5e0!3m2!1sen!2slk!4v1662998689560!5m2!1sen!2slk"
                alt="demo"
              />
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
