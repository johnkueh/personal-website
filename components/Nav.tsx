import { Flex, PseudoBox, Text, useColorMode } from "@chakra-ui/core";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import PrimaryButton from "./PrimaryButton";

const Nav: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      maxWidth={["100%", "100%", "100%", "968px"]}
      mx="auto"
      py={2}
    >
      <Flex fontSize={16}>
        <Link href="/" label="Home" />
        <Link href="/about" label="About" />
        <Link href="/projects" label="Projects" />
        <Link href="/articles" label="Articles" />
      </Flex>
      <PrimaryButton size="sm" rightIcon={() => <Text ml={2}>👉</Text>}>
        Contact
      </PrimaryButton>
    </Flex>
  );
};

interface LinkProps {
  href: string;
  label: string;
}
const Link: React.FC<LinkProps> = ({ href, label }) => {
  const router = useRouter();
  const active = router.pathname === href;
  const activeColor = "red.500";
  const color = active ? activeColor : "";

  return (
    <NextLink href={href}>
      <a href={href}>
        <PseudoBox py={2} pr={10} color={color} _hover={{ color: activeColor }}>
          <Text fontWeight="semibold">{label}</Text>
        </PseudoBox>
      </a>
    </NextLink>
  );
};

export default Nav;
