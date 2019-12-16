import React from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

interface Props {
  title: string;
}

const Nav: React.FC<Props> = props => {
  return (
    <>
      <NavMobile title={props.title} />
      <NavDesktop />
    </>
  );
};

export default Nav;
