import { Box, Grid, Link } from "@chakra-ui/core";
import { orderBy } from "lodash";
import moment from "moment";
import NextLink from "next/link";
import React from "react";
import Card from "../components/Card";
import CardCaption from "../components/CardCaption";
import CardFooter from "../components/CardFooter";
import CardTitle from "../components/CardTitle";
import { frontMatter as articlesPages } from "../pages/articles/*.mdx";

const mdxDateFormat = "DD-MM-YYYY";

interface Props {
  featured?: boolean;
  showTech?: boolean;
}

const Articles: React.FC<Props> = ({ featured, showTech }) => {
  let articles = articlesPages;
  if (featured === true) {
    articles = articlesPages.filter(article => article.featured);
  }
  const orderedArticles = orderBy(articles, "date", "desc");

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
        "repeat(2, 1fr)"
      ]}
      gap={6}
    >
      {orderedArticles.map(article => (
        <NextLink
          key={article.__resourcePath}
          href={formatPath(article.__resourcePath)}
        >
          <Link
            _hover={{ textDecoration: "none" }}
            href={formatPath(article.__resourcePath)}
          >
            <Card
              justifyContent="space-between"
              flexDirection="column"
              height="100%"
            >
              <Box>
                <CardTitle>{article.title}</CardTitle>
                <CardCaption>{article.caption}</CardCaption>
              </Box>

              <CardFooter>
                {moment(article.date, mdxDateFormat).format("DD MMMM YYYY")}
              </CardFooter>
            </Card>
          </Link>
        </NextLink>
      ))}
    </Grid>
  );
};

export default Articles;

function formatPath(p) {
  return p.replace(/\.mdx$/, "");
}
