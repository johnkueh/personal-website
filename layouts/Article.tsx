import { Badge, Box, Flex, Text } from "@chakra-ui/core";
import { css, Global } from "@emotion/core";
import Head from "next/head";
import React from "react";
import Card from "../components/Card";
import HeaderWrapper from "../components/HeaderWrapper";
import Nav from "../components/Nav";
import theme from "../theme";

export default frontMatter => {
  return ({ children: content }) => {
    return (
      <>
        <Head>
          <title>{frontMatter.title}</title>
        </Head>
        <Nav />
        <Box pb={32}>
          <Global styles={contentStyles} />
          <Box>
            <HeaderWrapper>
              <Box mx="auto" maxWidth={["100%", "100%", "100%", "768px"]}>
                <Box>
                  <Text fontSize={40} fontWeight="extrabold">
                    {frontMatter.title}
                  </Text>
                  <Text>{frontMatter.caption}</Text>
                </Box>
                <Box mt={20} className="content">
                  {content}
                </Box>
                <Card mt={32}>
                  <Text mb={5} fontSize="xl" fontWeight="extrabold">
                    Technology used in this project
                  </Text>
                  <Flex flexWrap="wrap">
                    {frontMatter.tech.map(tech => (
                      <Badge mr={2} mb={2} variantColor="red" key={tech}>
                        {tech}
                      </Badge>
                    ))}
                    {frontMatter.servicesUsed.map(tech => (
                      <Badge mr={2} mb={2} variantColor="yellow" key={tech}>
                        {tech}
                      </Badge>
                    ))}
                  </Flex>
                </Card>
              </Box>
            </HeaderWrapper>
          </Box>
        </Box>
      </>
    );
  };
};

const contentStyles = css`
  .content {
    h2,
    h3 {
      line-height: 1.3;
      margin-top: ${theme.sizes["16"]};
      margin-bottom: ${theme.sizes["8"]};
      font-weight: ${theme.fontWeights.extrabold};
    }
    h2 {
      font-size: ${theme.fontSizes["3xl"]};
    }
    h3 {
      font-size: ${theme.fontSizes["2xl"]};
    }
    p {
      margin-bottom: ${theme.sizes["8"]};
      line-height: 28px;
    }
  }
`;
