import { Image } from "@chakra-ui/core";
import React from "react";

const ArticleImage: React.FC = ({ ...props }) => (
  <Image my={10} rounded="md" {...props} />
);

export default ArticleImage;
