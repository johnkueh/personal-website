import { Box, Grid, Image, Link } from "@chakra-ui/core";
import React from "react";
import Card from "../components/Card";
import CardCaption from "../components/CardCaption";
import CardFooter from "../components/CardFooter";

const Testimonials: React.FC = () => (
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
        programmer that is genuinely interested in solving product problems.
      </CardCaption>
      <CardCaption mt={4}>
        I would gladly work on more projects with him and highly recommend him.
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
        John is one of a kind. He is a true lean startup entrepreneur who can
        design as well as he can code as well as he gets in front of customers
        to understand what they want.
      </CardCaption>
      <CardCaption mt={4}>
        His attitude is more impressive than his skills. He finds a way forwards
        with a smile, always.
      </CardCaption>
      <CardFooter>Phil Morle - Partner at Main Sequence Ventures</CardFooter>
    </Card>
    <Card>
      <Box height="70px" width="135px">
        <Image src="/LogoIBM.png" />
      </Box>
      <CardCaption>
        Since the launch FrogID has successfully collected over 106,000 verified
        frog calls spanning across 187/240 known frog species. In 18 months
        FrogID has generated 20% of the total frog records ever collected in
        Australia, a new record for this area of science.
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
        Big W’s Great Eggscape Treasure Hunt involved deploying five beacons in
        183 Big W stores Australia-wide. Once the app was downloaded, visitors
        selected which ‘egg’ they wanted to find, and a hot/cold meter in the
        app guided them to the beacon.
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
);

export default Testimonials;
