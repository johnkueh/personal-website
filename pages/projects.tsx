import { Badge, Box, Flex, Grid, Image, Text } from "@chakra-ui/core";
import React from "react";
import Card from "../components/Card";
import CardCaption from "../components/CardCaption";
import CardFooter from "../components/CardFooter";
import CardTitle from "../components/CardTitle";
import HeaderWrapper from "../components/HeaderWrapper";
import Nav from "../components/Nav";

const Projects = () => (
  <>
    <Nav />
    <Box pb={32}>
      <Box>
        <HeaderWrapper>
          <Box maxWidth={["100%", "100%", "100%", "768px"]}>
            <Text fontSize={40} fontWeight="extrabold">
              Projects
            </Text>
            <Text maxWidth={["100%", "100%", "100%", "768px"]}>
              Here's a list of everything I've worked on. They range from small
              tools to software for large companies. I single-handedly coded
              everything for most of them.
            </Text>
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
            "repeat(3, 1fr)"
          ]}
          gap={6}
        >
          <Card>
            <Box height="45px" width="45px">
              <Image src="/LogoWAK.png" />
            </Box>
            <Flex mt={3} alignItems="center">
              <CardTitle>Web Analytics Kit</CardTitle>
              <Badge ml={2}>Soon</Badge>
            </Flex>
            <CardCaption>
              Auditing tool for the web analytics professional
            </CardCaption>
            <CardFooter fontSize={16}>
              React, TypeScript, Chrome extension
            </CardFooter>
          </Card>
          <Card>
            <Box height="45px" width="45px">
              <Image src="/LogoBoilerplate.png" />
            </Box>
            <CardTitle mt={3}>Product Boilerplate</CardTitle>
            <CardCaption>
              Boilerplate for my product work using React, Apollo, Node, TypeORM
            </CardCaption>
            <CardFooter fontSize={16}>
              React, GraphQL, Node, graphql-code-generator, TypeGraphQL, TypeORM
            </CardFooter>
          </Card>
          <Card>
            <Box height="45px" width="45px">
              <Image src="/LogoVibejar.png" />
            </Box>
            <CardTitle mt={3}>Vibejar</CardTitle>
            <CardCaption>
              A tool to track daily team mood and happiness
            </CardCaption>
            <CardFooter fontSize={16}>
              Next.js, React, GraphQL, Node, Serverless, AWS Lambda, Prisma,
              Cypress
            </CardFooter>
          </Card>
          <Card>
            <Box height="45px" width="45px">
              <Image rounded="md" src="/LogoZibbet.png" />
            </Box>
            <CardTitle mt={3}>Zibbet</CardTitle>
            <CardCaption>
              List once sell everywhere: A multi-channel e-commerce platform
            </CardCaption>
            <CardFooter fontSize={16}>
              Ember, Ruby on Rails, Stripe API, Shippo API
            </CardFooter>
          </Card>
          <Card>
            <Box height="45px" width="45px">
              <Image rounded="md" src="/LogoFrogID.png" />
            </Box>
            <CardTitle mt={3}>FrogID</CardTitle>
            <CardCaption>
              A platform to collect and evaluate frog calls!
            </CardCaption>
            <CardFooter fontSize={16}>
              React, Ruby on Rails, Sidekiq, Amazon S3
            </CardFooter>
          </Card>
          <Card>
            <Box height="45px" width="45px">
              <Image rounded="md" src="/LogoBeaconmaker.png" />
            </Box>
            <CardTitle mt={3}>Beaconmaker</CardTitle>
            <CardCaption>
              A platform for museums to build audio tour apps
            </CardCaption>
            <CardFooter fontSize={16}>
              React, Contentful API, React Native, Expo, Swift, Bluetooth
              Beacons
            </CardFooter>
          </Card>
          <Card>
            <Box height="45px" width="45px">
              <Image rounded="md" src="/LogoSydneyOpen.jpg" />
            </Box>
            <CardTitle mt={3}>Sydney Open</CardTitle>
            <CardCaption>
              An app to explore Sydney City on this open day
            </CardCaption>
            <CardFooter fontSize={16}>
              React, Contentful API, React Native, Expo, Swift, ARKit
            </CardFooter>
          </Card>
          <Card>
            <Box height="45px" width="45px">
              <Image rounded="md" src="/LogoAMGames.png" />
            </Box>
            <CardTitle mt={3}>AR Whale Trail</CardTitle>
            <CardCaption>
              An augmented reality app to look for hidden whales!
            </CardCaption>
            <CardFooter fontSize={16}>
              React, Contentful API, React Native, Expo, Swift, ARKit
            </CardFooter>
          </Card>
          <Card>
            <Box height="45px" width="45px">
              <Image rounded="md" src="/LogoAMApp.png" />
            </Box>
            <CardTitle mt={3}>Westpac 200 Treasure Hunt</CardTitle>
            <CardCaption>
              A treasure hunt app to look for objects around the museum.
            </CardCaption>
            <CardFooter fontSize={16}>
              React, Contentful API, React Native, Expo, Swift, Bluetooth
              Beacons
            </CardFooter>
          </Card>
          <Card>
            <Box height="45px" width="45px">
              <Image rounded="md" src="/LogoEggscape.png" />
            </Box>
            <CardTitle mt={3}>BIG W Easter Egg Hunt</CardTitle>
            <CardCaption>
              A treasure hunt app to look for virtual easter eggs in retail
              stores.
            </CardCaption>
            <CardFooter fontSize={16}>
              React, Contentful API, React Native, Expo, Swift, Bluetooth
              Beacons
            </CardFooter>
          </Card>
        </Grid>
      </Box>
    </Box>
  </>
);

export default Projects;
