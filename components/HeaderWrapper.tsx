import { Box, BoxProps } from "@chakra-ui/core";
import React from "react";

const HeaderWrapper: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box
    maxWidth={["100%", "100%", "100%", "968px"]}
    mx="auto"
    pt={[10, 12, 20, 40]}
    {...props}
  >
    {children}
  </Box>
);

export default HeaderWrapper;
