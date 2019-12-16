import { Flex, Text } from "@chakra-ui/core";
import React from "react";
import NavLink from "./NavLink";
import PrimaryButton from "./PrimaryButton";

const NavDesktop: React.FC = () => (
  <Flex
    alignItems="center"
    justifyContent="space-between"
    display={["none", "flex", "flex", "flex"]}
    maxWidth={["100%", "100%", "100%", "968px"]}
    mx="auto"
    py={2}
  >
    <Flex fontSize={16}>
      <NavLink href="/" label="Home" />
      <NavLink href="/about" label="About" />
      <NavLink href="/projects" label="Projects" />
      <NavLink href="/articles" label="Articles" />
    </Flex>
    <PrimaryButton size="sm" rightIcon={() => <Text ml={2}>👉</Text>}>
      Contact
    </PrimaryButton>
  </Flex>
);

export default NavDesktop;
