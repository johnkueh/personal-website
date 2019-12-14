import React from "react";
import {
  Box,
  Button,
  ThemeProvider,
  ColorModeProvider,
  useColorMode,
  CSSReset
} from "@chakra-ui/core";

const MainLayout: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <CSSReset />
      <ColorModeProvider>
        <ColorModeLayout>
          <Box
            fontSize={20}
            maxWidth={["90%", "90%", "90%", "1440px"]}
            mx="auto"
          >
            {children}
          </Box>
        </ColorModeLayout>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

const ColorModeLayout = ({ children }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.50", dark: "black" };
  const color = { light: "gray.800", dark: "white" };

  return (
    <Box bg={bgColor[colorMode]} color={color[colorMode]}>
      {children}
    </Box>
  );
};

export default MainLayout;
