import { Image } from "@chakra-ui/core";
import React from "react";

const ArticleImage: React.FC = ({ ...props }) => (
  <Image alignSelf="center" mb={10} rounded="md" {...props} />
);

export default ArticleImage;
