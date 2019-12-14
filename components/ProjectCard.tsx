import React from "react";
import { Box, Text } from "@chakra-ui/core";

interface Props {
  title: string;
  caption?: string;
  icon?: string;
}

const ProjectCard: React.FC<Props> = ({ icon, title, caption, ...props }) => {
  return (
    <Box
      rounded="lg"
      p={6}
      mx={[0, 0, 0, 3]}
      my={3}
      bg="white"
      width={["100%", "100%", "100%", "24rem"]}
      {...props}
    >
      <Box mb={3} height={12}></Box>
      <Text fontWeight="extrabold">{title}</Text>
      <Text mt={2} lineHeight={1.3}>
        {caption}
      </Text>
    </Box>
  );
};

export default ProjectCard;
