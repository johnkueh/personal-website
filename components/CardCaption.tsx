import { BoxProps, Text } from "@chakra-ui/core";
import React from "react";

const CardCaption: React.FC<BoxProps> = ({ children, ...props }) => (
  <Text mt={2} lineHeight={1.3} {...props}>
    {children}
  </Text>
);

export default CardCaption;
