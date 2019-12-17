import { Box, Flex, Icon, Text } from "@chakra-ui/core";
import Head from "next/head";
import NextLink from "next/link";
import React from "react";
import HeaderWrapper from "../components/HeaderWrapper";
import Nav from "../components/Nav";
import Articles from "../containers/Articles";
import Projects from "../containers/Projects";
import Testimonials from "../containers/Testimonials";
import WorkWithMe from "../containers/WorkWithMe";

const Home = () => {
  return (
    <>
      <Nav title="Home" />
      <Head>
        <title>John Kueh - JavaScript engineer</title>
      </Head>
      <Box pb={32}>
        <Box py={[10, 10, 10, 0]}>
          <HeaderWrapper>
            <Box maxWidth={["100%", "100%", "100%", "768px"]}>
              <Text fontSize={40} fontWeight="extrabold">
                John Kueh
              </Text>
              <Text maxWidth={["100%", "100%", "100%", "768px"]}>
                👋 I'm a JavaScript engineer living in Sydney, Australia. I love
                creating useful products using React and Node.
              </Text>
              <NextLink href="/about">
                <a href="/about">
                  <Flex alignItems="center" color="red.500" mt={5}>
                    <Text fontWeight="semibold">More about me</Text>
                    <Icon ml={1} name="arrow-forward"></Icon>
                  </Flex>
                </a>
              </NextLink>
            </Box>
          </HeaderWrapper>
        </Box>
        <Box>
          <HeaderWrapper>
            <Box maxWidth={["100%", "100%", "100%", "768px"]}>
              <Text fontWeight="extrabold" fontSize={32}>
                Projects
              </Text>
              <Text>
                Here's a small selection of my latest projects. They range from
                small tools to software for large companies. I single-handedly
                coded everything for most of them.
              </Text>
              <NextLink href="/projects">
                <a href="/projects">
                  <Flex alignItems="center" color="red.500" mt={5}>
                    <Text fontWeight="semibold">View all projects</Text>
                    <Icon ml={1} name="arrow-forward"></Icon>
                  </Flex>
                </a>
              </NextLink>
            </Box>
          </HeaderWrapper>
          <Projects featured={true} />
        </Box>
        <Box>
          <HeaderWrapper>
            <Box maxWidth={["100%", "100%", "100%", "768px"]}>
              <Text fontWeight="extrabold" fontSize={32}>
                Articles
              </Text>
              <Text>
                I've started to document my work process and thoughts so that I
                can come back and learn from them. These are a selection of my
                latest articles.
              </Text>
              <NextLink href="/articles">
                <a href="/articles">
                  <Flex alignItems="center" color="red.500" mt={5}>
                    <Text fontWeight="semibold">View all articles</Text>
                    <Icon ml={1} name="arrow-forward"></Icon>
                  </Flex>
                </a>
              </NextLink>
            </Box>
          </HeaderWrapper>
          <Articles featured={true} />
        </Box>
        <Box>
          <HeaderWrapper>
            <Text fontWeight="extrabold" fontSize={32}>
              Consulting
            </Text>
            <Text>
              Throughout my career, I have consulted for large enterprises,
              startup founders, and indie developers. I am passionate in SaaS,
              analytics, productivity, team culture and food.
            </Text>
          </HeaderWrapper>
          <Box pt={10}>
            <Testimonials />
          </Box>
          <HeaderWrapper pt={20}>
            <WorkWithMe />
          </HeaderWrapper>
        </Box>
      </Box>
    </>
  );
};

export default Home;
