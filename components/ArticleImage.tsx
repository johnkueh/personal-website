import { Image } from "@chakra-ui/core";
import React from "react";

const ArticleImage: React.FC = ({ ...props }) => (
  <Image alignSelf="center" my={5} rounded="md" {...props} />
);

export default ArticleImage;
