import { Flex, Link, Text } from "@chakra-ui/core";
import React from "react";
import { useAnalytics } from "../hooks/useAnalytics";
import NavLink from "./NavLink";
import PrimaryButton from "./PrimaryButton";

const NavDesktop: React.FC = () => {
  const { trackEvent } = useAnalytics();

  return (
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
      <Link
        _hover={{ textDecoration: "none" }}
        href="https://airtable.com/shrlvz9QWpffIOZ7v"
      >
        <PrimaryButton
          onClick={() => {
            trackEvent({
              action: "Clicked Contact",
              category: "NavDesktop"
            });
          }}
          size="sm"
          rightIcon={() => <Text ml={2}>👉</Text>}
        >
          Contact
        </PrimaryButton>
      </Link>
    </Flex>
  );
};

export default NavDesktop;
