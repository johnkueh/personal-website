import {
  Box,
  ColorModeProvider,
  CSSReset,
  ThemeProvider,
  useColorMode
} from "@chakra-ui/core";
import { css, Global } from "@emotion/core";
import React, { useEffect, useState } from "react";
import theme from "../theme";

const MainLayout: React.FC = ({ children, ...props }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <ColorModeProvider>
        <ColorModeLayout>
          <Global
            styles={css`
              .dark-mode {
                background-color: ${theme.colors.black};
              }
              .light-mode {
                background-color: ${theme.colors.gray["50"]};
              }
            `}
          />
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
