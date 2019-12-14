import React from "react";
import { Box, Text } from "@chakra-ui/core";

interface Props {
  title: string;
  caption?: string;
  date?: string;
}

const ArticleCard: React.FC<Props> = ({ date, title, caption, ...props }) => {
  return (
    <Box
      rounded="lg"
      p={6}
      mx={[0, 0, 0, 3]}
      my={3}
      bg="white"
      width={["100%", "100%", "100%", "36rem"]}
      {...props}
    >
      <Text lineHeight="1.3" fontWeight="extrabold">
        {title}
      </Text>
      <Text mt={2} lineHeight="1.3">
        {caption}
      </Text>
      <Text mt={8} fontWeight="semibold" fontSize={18} color="gray.400">
        {date}
      </Text>
    </Box>
  );
};

export default ArticleCard;
