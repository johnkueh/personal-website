import { BoxProps, Text } from "@chakra-ui/core";
import React from "react";

const CardFooter: React.FC<BoxProps> = ({ children, ...props }) => (
  <Text mt={8} fontWeight="semibold" fontSize={18} color="gray.500" {...props}>
    {children}
  </Text>
);

export default CardFooter;
