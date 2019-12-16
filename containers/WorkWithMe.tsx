import { Box, BoxProps, Link, List, ListItem, Text } from "@chakra-ui/core";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

const WorkWithMe: React.FC<BoxProps> = props => (
  <Box maxWidth={["100%", "100%", "100%", "768px"]} {...props}>
    <Text fontWeight="extrabold" fontSize={28}>
      🤝&nbsp;&nbsp;Let's build something together
    </Text>
    <Text mt={5}>
      If you need my help with solving problems in any of the following areas,
      please get in touch with me using the button below.
    </Text>
    <List mt={5}>
      <ListItem mb={[5, 5, 5, 0]}>
        🚀&nbsp;&nbsp;Dissect your startup idea and map the quickest way to ship
        something
      </ListItem>
      <ListItem mb={[5, 5, 5, 0]}>
        🏗&nbsp;&nbsp;High quality React, React Native or Node development
      </ListItem>
      <ListItem mb={[5, 5, 5, 0]}>
        📈&nbsp;&nbsp;Setting up analytics, internal tools and reporting
        dashboards
      </ListItem>
      <ListItem mb={[5, 5, 5, 0]}>
        ✅&nbsp;&nbsp;Recruitment or screening of JavaScript/TypeScript
        engineers
      </ListItem>
    </List>
    <Box pt={10}>
      <Link
        _hover={{ textDecoration: "none" }}
        href="https://airtable.com/shrlvz9QWpffIOZ7v"
      >
        <PrimaryButton size="lg" rightIcon={() => <Text ml={2}>👉</Text>}>
          Contact me
        </PrimaryButton>
      </Link>
    </Box>
    <Text pt={10}>
      Thank you for visiting my website and reading until the end&nbsp;&nbsp;🙇‍♂️
    </Text>
  </Box>
);

export default WorkWithMe;
