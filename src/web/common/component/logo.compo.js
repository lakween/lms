import { Image } from '@chakra-ui/react';

const Logo = (props) => {
  return (
    <Image
      boxSize="64px"
      objectFit="cover"
      src="./././assets/logo.jpg"
      alt="Dan Abramov"
    />
  );
};

export default Logo;
