import { Button, ButtonProps } from "@chakra-ui/core";
import React from "react";

const PrimaryButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Button bg="red.500" _hover={{ bg: "red.600" }} color="white" {...props}>
    {children}
  </Button>
);

export default PrimaryButton;
