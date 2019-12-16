import { Box, Grid, Text } from "@chakra-ui/core";
import React from "react";
import Card from "../components/Card";
import CardCaption from "../components/CardCaption";
import CardFooter from "../components/CardFooter";
import CardTitle from "../components/CardTitle";
import HeaderWrapper from "../components/HeaderWrapper";
import Nav from "../components/Nav";

const Projects = () => (
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

        <Grid
          mx="auto"
          py={10}
          px={[0, 0, 0, 6]}
          maxWidth={["100%", "100%", "100%", "1200px"]}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)"
          ]}
          gap={6}
        >
          <Card>
            <CardTitle>Relaunching my personal website</CardTitle>
            <CardCaption>
              The current website at johnkueh.com was created late last year. I
              would like to relaunch it with a new design for the year 2020.
            </CardCaption>
            <CardFooter>14 December 2019</CardFooter>
          </Card>
        </Grid>
      </Box>
    </Box>
  </>
);

export default Projects;
