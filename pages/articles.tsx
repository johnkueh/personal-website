import { Box, Text } from "@chakra-ui/core";
import React from "react";
import HeaderWrapper from "../components/HeaderWrapper";
import Nav from "../components/Nav";
import Articles from "../containers/Articles";

const ArticlesPage = () => (
  <>
    <Nav title="Articles" />
    <Box pb={32}>
      <Box>
        <HeaderWrapper>
          <Box maxWidth={["100%", "100%", "100%", "768px"]}>
            <Text fontSize={40} fontWeight="extrabold">
              Articles
            </Text>
            <Text maxWidth={["100%", "100%", "100%", "768px"]}>
              A collection of my work process and thoughts for personal
              reflection
            </Text>
          </Box>
        </HeaderWrapper>
        <Articles />
      </Box>
    </Box>
  </>
);

export default ArticlesPage;
