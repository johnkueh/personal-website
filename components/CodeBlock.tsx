import { Box, Button } from "@chakra-ui/core";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/dracula";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface Props {
  code: string;
  language: Language;
}

const CodeBlock: React.FC<Props> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);
  return (
    <Highlight {...defaultProps} code={code} language={language} theme={theme}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <Box
          position="relative"
          rounded="lg"
          py={4}
          px={5}
          as="pre"
          whiteSpace="pre-wrap"
          style={style}
          fontSize={14}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
          <CopyToClipboard
            bottom={3}
            right={3}
            position="absolute"
            text={code}
            onCopy={() => {
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 3000);
            }}
          >
            <Button size="xs">{copied ? "Copied!" : "Copy"}</Button>
          </CopyToClipboard>
        </Box>
      )}
    </Highlight>
  );
};

export default CodeBlock;
