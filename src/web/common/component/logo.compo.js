import { Image } from "@chakra-ui/react";

const Logo = (props) => {
  return (
    <Image
      boxSize="64px"
      objectFit="cover"
      src="./././assets/main_logo.jpg"
      alt="Dan Abramov"
    />
  );
};

export default Logo;
