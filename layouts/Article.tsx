import { Box, Text } from "@chakra-ui/core";
import { Global } from "@emotion/core";
import Head from "next/head";
import React from "react";
import HeaderWrapper from "../components/HeaderWrapper";
import Nav from "../components/Nav";
import { contentStyles } from "./Project";

export default frontMatter => {
  return ({ children: content }) => {
    return (
      <>
        <Nav title="Article" />
        <Head>
          <title>{frontMatter.title} | John Kueh</title>
        </Head>
        <Box pb={32}>
          <Global styles={contentStyles} />
          <Box>
            <HeaderWrapper>
              <Box mx="auto" maxWidth={["100%", "100%", "100%", "768px"]}>
                <Box>
                  <Text
                    lineHeight="1.0"
                    mb={3}
                    fontSize={40}
                    fontWeight="extrabold"
                  >
                    {frontMatter.title}
                  </Text>
                  <Text>{frontMatter.caption}</Text>
                </Box>
                <Box mt={20} className="content">
                  {content}
                </Box>
              </Box>
            </HeaderWrapper>
          </Box>
        </Box>
      </>
    );
  };
};
