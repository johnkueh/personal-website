import React from "react";
import { Icon, Button, useColorMode } from "@chakra-ui/core";

const Nav: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button size="xs" onClick={toggleColorMode}>
        {colorMode === "light" ? <Icon name="moon" /> : <Icon name="sun" />}
      </Button>
    </>
  );
};

export default Nav;
