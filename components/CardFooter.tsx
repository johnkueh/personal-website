import { Text } from "@chakra-ui/core";
import React from "react";

const CardFooter: React.FC = ({ children }) => (
  <Text mt={8} fontWeight="semibold" fontSize={18} color="gray.500">
    {children}
  </Text>
);

export default CardFooter;
