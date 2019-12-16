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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <NavMobile title={props.title} />
      <NavDesktop />
    </>
  );
};

export default Nav;
