import Head from "next/head";
import React from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

interface Props {
  title: string;
}

const Nav: React.FC<Props> = props => {
  return (
    <>
      <Head>
        <title>{props.title} | John Kueh</title>
      </Head>
      <NavMobile title={props.title} />
      <NavDesktop />
    </>
  );
};

export default Nav;
