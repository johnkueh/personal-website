import { Button, Code } from "@chakra-ui/core";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface Props {
  code: string;
  language: Language;
}

const CodeBlock: React.FC<Props> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);
  return (
    <Highlight {...defaultProps} code={code} language={language}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <Code
          w="100%"
          my={4}
          position="relative"
          rounded="md"
          p={4}
          style={style}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
          <CopyToClipboard
            bottom={2}
            right={2}
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
        </Code>
      )}
    </Highlight>
  );
};

export default CodeBlock;
