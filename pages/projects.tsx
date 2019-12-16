import { Box, Text } from "@chakra-ui/core";
import React from "react";
import HeaderWrapper from "../components/HeaderWrapper";
import Nav from "../components/Nav";
import Projects from "../containers/Projects";

const ProjectsPage = () => (
  <>
    <Nav title="Projects" />
    <Box pb={32}>
      <Box>
        <HeaderWrapper>
          <Box maxWidth={["100%", "100%", "100%", "768px"]}>
            <Text fontSize={40} fontWeight="extrabold">
              Projects
            </Text>
            <Text maxWidth={["100%", "100%", "100%", "768px"]}>
              Here's a list of everything I've worked on. They range from small
              tools to software for large companies. I single-handedly coded
              everything for most of them.
            </Text>
          </Box>
        </HeaderWrapper>
        <Projects showTech={true} />
      </Box>
    </Box>
  </>
);

export default ProjectsPage;
