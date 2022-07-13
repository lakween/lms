import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Text,
  Stack,
  chakra,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function CourseCard(props) {
  let navigate = useNavigate();
  return (
    <Box>
      <Flex p={2} w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue("white", "gray.800")}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          {props.isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}

          <Image
            src={props.imageURL}
            alt={`Picture of ${props.name}`}
            roundedTop="lg"
          />

          <Box p="4">
            <Box d="flex" alignItems="baseline">
              {props.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {props.name}
              </Box>
            </Flex>
            <Stack direction={"row"} justify={"start"} spacing={6} mt={"2"}>
              <Stack spacing={0} align={"start"}>
                <chakra.a
                  onClick={() => {
                    navigate("/cosdetails");
                  }}
                  display="block"
                  fontSize="sm"
                  color="gray.700"
                  _dark={{ color: "gray.200" }}
                  textTransform="capitalize"
                  _hover={{ color: "brand.400", _dark: { color: "blue.400" } }}
                >
                  in Entrepreneurship & Education
                </chakra.a>
                <Text fontWeight={600} fontSize={"lg"} color={"orange.500"}>
                  LKR 0.00
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default CourseCard;
