import { Box, Flex, Text, useColorMode } from "@chakra-ui/core";
import React, { useState } from "react";
import NavLink from "./NavLink";

interface Props {
  title: string;
}

const NavMobile: React.FC<Props> = ({ title }) => {
  const [expanded, setExpanded] = useState(false);

  const { colorMode } = useColorMode();
  const bgColor = { light: "white", dark: "black" };
  return (
    <Box display={["flex", "none", "none", "none"]} height="50px">
      <Box
        position="fixed"
        left={0}
        right={0}
        padding={2}
        bg={bgColor[colorMode]}
      >
        {expanded ? (
          <Box>
            <Box onClick={() => setExpanded(false)} p={1} mr={2} as="button">
              <svg width="24" height="24">
                <rect width="24" height="24" fill="none" rx="0" ry="0" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.7745 4.21818C19.384 3.82765 18.7508 3.82765 18.3603 4.21818L11.9963 10.5821L5.63238 4.21818C5.24185 3.82765 4.60869 3.82765 4.21816 4.21818C3.82764 4.6087 3.82764 5.24187 4.21816 5.63239L10.5821 11.9964L4.21816 18.3603C3.82764 18.7508 3.82764 19.384 4.21816 19.7745C4.60869 20.1651 5.24185 20.165 5.63238 19.7745L11.9963 13.4106L18.3603 19.7745C18.7508 20.165 19.384 20.1651 19.7745 19.7745C20.165 19.384 20.165 18.7508 19.7745 18.3603L13.4106 11.9964L19.7745 5.63239C20.165 5.24187 20.165 4.6087 19.7745 4.21818Z"
                  fill="#ffffff"
                />
              </svg>
            </Box>
            <Box px={2} fontSize={16}>
              <NavLink href="/" label="Home" />
              <NavLink href="/about" label="About" />
              <NavLink href="/projects" label="Projects" />
              <NavLink href="/articles" label="Articles" />
            </Box>
          </Box>
        ) : (
          <Flex alignItems="center">
            <Box onClick={() => setExpanded(true)} p={1} mr={2} as="button">
              <svg width="24" height="24">
                <rect width="24" height="24" fill="none" rx="0" ry="0" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 7C4 6.58579 4.33579 6.25 4.75 6.25H19.25C19.6642 6.25 20 6.58579 20 7C20 7.41421 19.6642 7.75 19.25 7.75H4.75C4.33579 7.75 4 7.41421 4 7ZM4 12C4 11.5858 4.33579 11.25 4.75 11.25H19.25C19.6642 11.25 20 11.5858 20 12C20 12.4142 19.6642 12.75 19.25 12.75H4.75C4.33579 12.75 4 12.4142 4 12ZM4.75 16.25C4.33579 16.25 4 16.5858 4 17C4 17.4142 4.33579 17.75 4.75 17.75H19.25C19.6642 17.75 20 17.4142 20 17C20 16.5858 19.6642 16.25 19.25 16.25H4.75Z"
                  fill="#ffffff"
                />
              </svg>
            </Box>
            <Text fontWeight="semibold" fontSize="md">
              {title}
            </Text>
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default NavMobile;
