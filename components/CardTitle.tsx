import { BoxProps, Text } from "@chakra-ui/core";
import React from "react";

const CardTitle: React.FC<BoxProps> = ({ children, ...props }) => (
  <Text fontWeight="extrabold" {...props}>
    {children}
  </Text>
);

export default CardTitle;
