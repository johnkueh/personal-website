import { Box, Grid, Image, Link } from "@chakra-ui/core";
import { orderBy } from "lodash";
import NextLink from "next/link";
import React from "react";
import Card from "../components/Card";
import CardCaption from "../components/CardCaption";
import CardFooter from "../components/CardFooter";
import CardTitle from "../components/CardTitle";
import { frontMatter as projectsPages } from "../pages/projects/*.mdx";

interface Props {
  featured?: boolean;
  showTech?: boolean;
}

const Projects: React.FC<Props> = ({ featured, showTech }) => {
  let projects = projectsPages;
  if (featured === true) {
    projects = projectsPages.filter(project => project.featured);
  }

  const orderedProjects = orderBy(projects, "order");

  return (
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
      {orderedProjects.map(project => (
        <NextLink
          key={project.__resourcePath}
          href={formatPath(project.__resourcePath)}
        >
          <Link
            _hover={{ textDecoration: "none" }}
            href={formatPath(project.__resourcePath)}
          >
            <Card height="100%">
              <Box height="45px" width="45px">
                <Image rounded="md" src={project.icon} />
              </Box>
              <CardTitle mt={4}>{project.title}</CardTitle>
              <CardCaption>{project.caption}</CardCaption>
              {showTech && (
                <CardFooter fontSize={16}>{project.tech.join(", ")}</CardFooter>
              )}
            </Card>
          </Link>
        </NextLink>
      ))}
    </Grid>
  );
};

export default Projects;

function formatPath(p) {
  return p.replace(/\.mdx$/, "");
}
