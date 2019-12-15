import { Box, Image, Link, List, ListItem, Text } from "@chakra-ui/core";
import React from "react";
import HeaderWrapper from "../components/HeaderWrapper";
import Nav from "../components/Nav";

const About = () => (
  <>
    <Nav />
    <Box pb={32}>
      <Box>
        <HeaderWrapper>
          <Box mb={10} maxWidth={["100%", "100%", "100%", "768px"]}>
            <Image width={80} height={80} rounded="full" src="/headshot.jpg" />
            <Text mt={5} fontSize={40} fontWeight="extrabold">
              About me
            </Text>
            <Text mt={5}>
              I am a design-focused software engineer living in Sydney,
              Australia 🇦🇺. Programming is my craft, and I have been doing it
              for more than 10 years. I build my own startups, and occasionally
              consult for others.
            </Text>

            <Text mt={5}>
              JavaScript (TypeScript) is my favourite programming language and I
              particularly enjoy working with these technologies:
            </Text>
            <List mt={3} styleType="disc">
              <ListItem>React and React Native</ListItem>
              <ListItem>GraphQL</ListItem>
              <ListItem>Node</ListItem>
            </List>
            <Text mt={5}>
              If I am not coding or working, I enjoy spending my free time
              thinking about interior design and cooking
            </Text>
            <Text mt={5}>
              I live in Sydney with my wife&nbsp;
              <Link
                color="red.500"
                target="_new"
                href="https://www.mishwong.com"
              >
                Michele
              </Link>
              &nbsp;and our 🐶 Perry. We both love the Japanese culture and
              regularly travel to Japan for food, shopping and design
              inspiration.
            </Text>
            <Text mt={5}>
              You can find me on&nbsp;
              <Link
                color="red.500"
                target="_new"
                href="https://twitter.com/johnkueh"
              >
                Twitter
              </Link>
              &nbsp;where I talk about startups and development, or on&nbsp;
              <Link
                color="red.500"
                target="_new"
                href="https://github.com/johnkueh"
              >
                GitHub
              </Link>
              &nbsp;to check out my projects.
            </Text>
          </Box>
        </HeaderWrapper>
      </Box>
    </Box>
  </>
);

export default About;
