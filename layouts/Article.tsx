import { Box, Text } from "@chakra-ui/core";
import { Global } from "@emotion/core";
import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";
import React from "react";
import CodeBlock from "../components/CodeBlock";
import HeaderWrapper from "../components/HeaderWrapper";
import Nav from "../components/Nav";
import { contentStyles } from "./Project";

const getLanguage = props => {
  const className = props.children.props.className;
  if (className == null) {
    return "";
  }

  return className.replace(/language-/, "");
};

const components = {
  pre: props => (
    <CodeBlock
      language={getLanguage(props)}
      code={props.children.props.children}
    />
  ),
  code: props => (
    <CodeBlock
      language={getLanguage(props)}
      code={props.children.props.children}
    />
  ),
  inlineCode: props => <CodeBlock language="bash" code={props.children} />
};

export default frontMatter => {
  return ({ children: content }) => {
    return (
      <>
        <Nav title="Article" />
        <Head>
          <title>{frontMatter.title} | John Kueh</title>
        </Head>
        <Box pb={32}>
          <Global styles={contentStyles} />
          <Box>
            <HeaderWrapper>
              <Box mx="auto" maxWidth={["100%", "100%", "100%", "768px"]}>
                <Box>
                  <Text
                    lineHeight="1.0"
                    mb={3}
                    fontSize={40}
                    fontWeight="extrabold"
                  >
                    {frontMatter.title}
                  </Text>
                  <Text>{frontMatter.caption}</Text>
                </Box>
                <MDXProvider components={components}>
                  <Box mt={20} className="content">
                    {content}
                  </Box>
                </MDXProvider>
              </Box>
            </HeaderWrapper>
          </Box>
        </Box>
      </>
    );
  };
};
