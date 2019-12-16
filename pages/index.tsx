import { Box, Flex, Grid, Icon, Image, Link, Text } from "@chakra-ui/core";
import NextLink from "next/link";
import React from "react";
import Card from "../components/Card";
import CardCaption from "../components/CardCaption";
import CardFooter from "../components/CardFooter";
import CardTitle from "../components/CardTitle";
import HeaderWrapper from "../components/HeaderWrapper";
import Nav from "../components/Nav";
import Projects from "../containers/Projects";
import WorkWithMe from "../containers/WorkWithMe";

const Home = () => {
  return (
    <>
      <Nav title="Home" />
      <Box pb={32}>
        <Box py={[10, 10, 10, 0]}>
          <HeaderWrapper>
            <Box maxWidth={["100%", "100%", "100%", "768px"]}>
              <Text fontSize={40} fontWeight="extrabold">
                John Kueh
              </Text>
              <Text maxWidth={["100%", "100%", "100%", "768px"]}>
                👋 I'm a JavaScript engineer living in Sydney, Australia. I love
                creating useful products using React and Node.
              </Text>
              <NextLink href="/about">
                <a href="/about">
                  <Flex alignItems="center" color="red.500" mt={5}>
                    <Text fontWeight="semibold">More about me</Text>
                    <Icon ml={1} name="arrow-forward"></Icon>
                  </Flex>
                </a>
              </NextLink>
            </Box>
          </HeaderWrapper>
        </Box>
        <Box>
          <HeaderWrapper>
            <Box maxWidth={["100%", "100%", "100%", "768px"]}>
              <Text fontWeight="extrabold" fontSize={32}>
                Projects
              </Text>
              <Text>
                Here's a small selection of my latest projects. They range from
                small tools to software for large companies. I single-handedly
                coded everything for most of them.
              </Text>
              <NextLink href="/projects">
                <a href="/projects">
                  <Flex alignItems="center" color="red.500" mt={5}>
                    <Text fontWeight="semibold">View all projects</Text>
                    <Icon ml={1} name="arrow-forward"></Icon>
                  </Flex>
                </a>
              </NextLink>
            </Box>
          </HeaderWrapper>
          <Projects featured={true} />
        </Box>
        <Box>
          <HeaderWrapper>
            <Box maxWidth={["100%", "100%", "100%", "768px"]}>
              <Text fontWeight="extrabold" fontSize={32}>
                Articles
              </Text>
              <Text>
                I've started to document my work process and thoughts so that I
                can come back and learn from them. These are a selection of my
                latest articles.
              </Text>
              <NextLink href="/articles">
                <a href="/articles">
                  <Flex alignItems="center" color="red.500" mt={5}>
                    <Text fontWeight="semibold">View all articles</Text>
                    <Icon ml={1} name="arrow-forward"></Icon>
                  </Flex>
                </a>
              </NextLink>
            </Box>
          </HeaderWrapper>
          <Grid
            mx="auto"
            py={10}
            px={[0, 0, 0, 6]}
            maxWidth={["100%", "100%", "100%", "1200px"]}
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)"
            ]}
            gap={6}
          >
            <Card>
              <CardTitle>Relaunching my personal website</CardTitle>
              <CardCaption>
                The current website at johnkueh.com was created late last year.
                I would like to relaunch it with a new design for the year 2020.
              </CardCaption>
              <CardFooter>14 December 2019</CardFooter>
            </Card>
            <Card>
              <CardTitle>Relaunching my personal website</CardTitle>
              <CardCaption>
                The current website at johnkueh.com was created late last year.
                I would like to relaunch it with a new design for the year 2020.
              </CardCaption>
              <CardFooter>14 December 2019</CardFooter>
            </Card>
          </Grid>
        </Box>
        <Box>
          <HeaderWrapper>
            <Text fontWeight="extrabold" fontSize={32}>
              Consulting
            </Text>
            <Text>
              Throughout my career, I have consulted for large enterprises,
              startup founders, and indie developers. I am passionate in SaaS,
              analytics, productivity, team culture and food.
            </Text>
          </HeaderWrapper>
          <Box pt={10}>
            <Grid
              mx="auto"
              py={10}
              px={[0, 0, 0, 6]}
              maxWidth={["100%", "100%", "100%", "1200px"]}
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)"
              ]}
              gap={6}
            >
              <Card>
                <Box height="70px" width="60px">
                  <Image src="/LogoCanva.png" />
                </Box>
                <CardCaption>
                  When you hire John, you don’t just get a programmer, you get a
                  programmer that is genuinely interested in solving product
                  problems.
                </CardCaption>
                <CardCaption mt={4}>
                  I would gladly work on more projects with him and highly
                  recommend him.
                </CardCaption>
                <CardFooter>
                  <Link target="_new" color="red.500" href="https://ary.nz">
                    Ary
                  </Link>
                  &nbsp;- Product designer at Canva
                </CardFooter>
              </Card>
              <Card>
                <Box height="70px" width="230px">
                  <Image src="/LogoMseq.png" />
                </Box>
                <CardCaption>
                  John is one of a kind. He is a true lean startup entrepreneur
                  who can design as well as he can code as well as he gets in
                  front of customers to understand what they want.
                </CardCaption>
                <CardCaption mt={4}>
                  His attitude is more impressive than his skills. He finds a
                  way forwards with a smile, always.
                </CardCaption>
                <CardFooter>
                  Phil Morle - Partner at Main Sequence Ventures
                </CardFooter>
              </Card>
              <Card>
                <Box height="70px" width="135px">
                  <Image src="/LogoIBM.png" />
                </Box>
                <CardCaption>
                  Since the launch FrogID has successfully collected over
                  106,000 verified frog calls spanning across 187/240 known frog
                  species. In 18 months FrogID has generated 20% of the total
                  frog records ever collected in Australia, a new record for
                  this area of science.
                </CardCaption>
                <Box></Box>
                <CardFooter>
                  <Link
                    target="_new"
                    color="red.500"
                    href="https://drivenxdesign.com/SYD19/project.asp?ID=19023"
                  >
                    2019 Sydney Design Awards
                  </Link>
                  &nbsp;- Gold
                </CardFooter>
              </Card>
              <Card>
                <Box height="70px" width="60px">
                  <Image src="/LogoBigW.png" />
                </Box>
                <CardCaption>
                  Big W’s Great Eggscape Treasure Hunt involved deploying five
                  beacons in 183 Big W stores Australia-wide. Once the app was
                  downloaded, visitors selected which ‘egg’ they wanted to find,
                  and a hot/cold meter in the app guided them to the beacon.
                </CardCaption>
                <Box></Box>
                <CardFooter>
                  <Link
                    target="_new"
                    color="red.500"
                    href="https://www.insideretail.com.au/news/big-w-toys-with-beacon-deployments-201512"
                  >
                    Covered
                  </Link>
                  &nbsp;by InsideRetail
                </CardFooter>
              </Card>
            </Grid>
          </Box>
          <HeaderWrapper pt={20}>
            <WorkWithMe />
          </HeaderWrapper>
        </Box>
      </Box>
    </>
  );
};

export default Home;
