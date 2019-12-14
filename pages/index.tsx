import React from "react";
import NextLink from "next/link";
import MainLayout from "../layouts/MainLayout";
import {
  Image,
  Text,
  Box,
  Flex,
  Button,
  Icon,
  Grid,
  Stack
} from "@chakra-ui/core";
import HeaderWrapper from "../components/HeaderWrapper";
import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";
import ArticleCard from "../components/ArticleCard";

const Home = () => (
  <>
    <MainLayout>
      <Nav />
      <Box pb={32}>
        <Box>
          <HeaderWrapper>
            <Text fontSize={40} fontWeight="extrabold">
              John Kueh
            </Text>
            <Text maxWidth={["100%", "100%", "100%", "768px"]}>
              I'm a JavaScript engineer living in Sydney, Australia. I love
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
          </HeaderWrapper>
        </Box>
        <Box>
          <HeaderWrapper>
            <Text fontWeight="extrabold" fontSize={32}>
              Projects
            </Text>
            <Text>A list of works i have done</Text>
            <NextLink href="/projects">
              <a href="/projects">
                <Flex alignItems="center" color="red.500" mt={5}>
                  <Text fontWeight="semibold">View all projects</Text>
                  <Icon ml={1} name="arrow-forward"></Icon>
                </Flex>
              </a>
            </NextLink>
          </HeaderWrapper>
          <Flex justifyContent="center" flexWrap="wrap" pt={10}>
            <ProjectCard
              title="Web Analytics Kit"
              caption="Auditing tool for the web analytics professional"
            />
            <ProjectCard
              title="Product Boilerplate"
              caption="Boilerplate for my product work - TypeScript, React, Apollo,
              Node, TypeGraphQL, TypeORM"
            />
            <ProjectCard
              title="Vibejar"
              caption="A tool to track employee happyness"
            />
            <ProjectCard
              title="Zibbet"
              caption="A multi-channel e-commerce platform."
            />
            <ProjectCard
              title="FrogID"
              caption="A platform to collect and evaluate frog calls!"
            />
            <ProjectCard
              title="Beaconmaker"
              caption="A platform for museums to build audio tour apps."
            />
          </Flex>
        </Box>
        <Box>
          <HeaderWrapper>
            <Text fontWeight="extrabold" fontSize={32}>
              Articles
            </Text>
            <Text>I try to write once in a while</Text>
            <NextLink href="/articles">
              <a href="/articles">
                <Flex alignItems="center" color="red.500" mt={5}>
                  <Text fontWeight="semibold">View all articles</Text>
                  <Icon ml={1} name="arrow-forward"></Icon>
                </Flex>
              </a>
            </NextLink>
          </HeaderWrapper>
          <Flex justifyContent="center" flexWrap="wrap" pt={10}>
            <ArticleCard
              title="Relaunching my personal website"
              caption="The current website at johnkueh.com was created late last year. I would like to relaunch it with a new design for the year 2020."
              date="14 December 2019"
            />
            <ArticleCard
              title="Relaunching my personal website"
              caption="The current website at johnkueh.com was created late last year. I would like to relaunch it with a new design for the year 2020."
              date="14 December 2019"
            />
          </Flex>
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
            <Box pt={10}>
              <Box>CUSTOMER_TESTIMONIALS</Box>
              <Box>CUSTOMER_LOGOS</Box>
            </Box>
            <Box pt={10}>
              <Button
                variantColor="red"
                size="lg"
                rightIcon={() => <Text ml={2}>👉</Text>}
              >
                Contact me
              </Button>
            </Box>
            <Text pt={10}>Thank you for visiting.</Text>
          </HeaderWrapper>
        </Box>
      </Box>
    </MainLayout>
  </>
);

export default Home;
