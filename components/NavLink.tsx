import { PseudoBox, Text } from "@chakra-ui/core";
import NextLink from "next/link";
import { useRouter } from "next/router";

interface LinkProps {
  href: string;
  label: string;
}
const Link: React.FC<LinkProps> = ({ href, label }) => {
  const router = useRouter();
  const homePath = "/";
  const isHome = href === homePath;
  const active = isHome
    ? router.pathname === homePath
    : router.pathname.includes(href);
  const activeColor = "red.500";
  const color = active ? activeColor : "";

  return (
    <NextLink href={href}>
      <a href={href}>
        <PseudoBox py={2} pr={10} color={color} _hover={{ color: activeColor }}>
          <Text fontWeight="semibold">{label}</Text>
        </PseudoBox>
      </a>
    </NextLink>
  );
};

export default Link;
