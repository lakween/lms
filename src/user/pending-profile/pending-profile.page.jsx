import { Box, Heading, Text } from "@chakra-ui/react";
import { AiFillCheckCircle } from "react-icons/ai";

const PendingProfilePage = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <AiFillCheckCircle color={"green.500"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Success
      </Heading>
      <Text color={"gray.500"}>
        Your Profile has been Created !
      </Text>
    </Box>
  );
};

export default PendingProfilePage;
