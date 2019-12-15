import { BoxProps, Flex, useColorMode } from "@chakra-ui/core";
import React from "react";

const Card: React.FC<BoxProps> = ({ children, ...props }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "white", dark: "gray.900" };
  const color = { light: "gray.800", dark: "white" };

  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      rounded="lg"
      p={6}
      mx={[0, 0, 0, 3]}
      my={3}
      bg={bgColor[colorMode]}
      width={["100%", "100%", "100%", "24rem"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Card;
